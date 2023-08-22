import {ProductsTypes, CartItemsTypes, TransactionDataTypes} from "./types";

import {ReactElement, useCallback, useEffect} from "react";
import * as React from "react";


//return price from products array for each product in the table
export const handleProductPrice = (frontendSlug: string, products: ProductsTypes[]): number | null => {
    let price = null

    products?.forEach((el: ProductsTypes): void => {
        if (el?.frontendSlug === frontendSlug) price = el?.amount
    })

    return price
}



//calculate total purchase price without discount
export const handleTotalPrice = (reduxCartItems: CartItemsTypes[], products: ProductsTypes[]) => {
    let price: number = 0

    let cartArray: CartItemsTypes[] = []

    reduxCartItems?.forEach((el: CartItemsTypes): void => {
        if (el?.inCart) cartArray?.push(el)
    })

    products?.forEach((el: ProductsTypes): void => {
        cartArray?.forEach((item: CartItemsTypes): void => {
            if (item?.frontendSlug === el?.frontendSlug) price = price + (el?.amount * (item?.quantity || 1))
        })
    })


    return price.toFixed(2)
}


//render table columns by frontend slug
export const renderColumns = (frontendSlug: string, title: string): ReactElement | null => {
    if (frontendSlug === "title") return <div className="title_product-column">{title}</div>
    else if (frontendSlug === "product") return <div className="image_product-column">{title}</div>
    else if (frontendSlug === "quantity") return <div className="qty_product-column">{title}</div>
    else if (frontendSlug === "price") return <div className="price_product-column">{title}</div>
    else if (frontendSlug === "remove") return <div className="remove_product-column">{title}</div>
    else return null
}


//only render proucts in the table that are added to cart aka have inCart property set to true in the redux state
export const handleCartItemsToRender = (reduxCartItems: CartItemsTypes[]): CartItemsTypes[] => reduxCartItems?.filter((el: CartItemsTypes) => el?.inCart)




//if logged user made 1 purchase give him 10% discount on total price and on each 5th purchase
export const handleIsDiscountActive = (userEmail: string, transactionData: TransactionDataTypes[]): boolean => {
    let numberOfPurchases: number = 0

    if (userEmail === "" || userEmail === undefined) return false
    else {
        transactionData?.forEach((el: TransactionDataTypes) => {
            const {email, purchase: {products}} = el
            if (email === userEmail && products?.length) numberOfPurchases++
        })
    }

    const handleIsActiveDiscount = (): boolean => {
        if(numberOfPurchases === 0) return false
        else if(numberOfPurchases === 1 || numberOfPurchases % 5 === 0) return true
        else return false
    }

    let isDiscountActive: boolean = handleIsActiveDiscount()


    return isDiscountActive
}




//randomize discount code
export const handleDiscountCode = (): string => {

    const min: number = 100000;
    const max: number = 999999;

    let discountNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;

    return discountNumber.toString()
}



//generate discount code on the first render of the cart component if it is user's 2nd or every 5th purchase
export const useHandleDiscountAsQueryOnFirstRender = (userEmail: string, transactionData: TransactionDataTypes[], setDiscountQuery: Function, setActiveDiscountCode:Function) => {
    useEffect((): void => {
        let isDiscountActive: boolean = handleIsDiscountActive(userEmail, transactionData)

        if (isDiscountActive) {
            let discountCode: string = handleDiscountCode()
            setDiscountQuery(discountCode)
            setActiveDiscountCode(discountCode)
        }
    }, [])
}


//handle discount value of 10% if active from total price, if not return 0.00
export const handleDiscountValue = (activeDiscountCode: string, discountQuery: string, reduxCartItems: CartItemsTypes[], products: ProductsTypes[]): string => {
    if (activeDiscountCode !== "") {
        if (activeDiscountCode === discountQuery) {
            let totalPrice: string = handleTotalPrice(reduxCartItems, products)
            let totalPriceWithDiscount: number = (parseFloat(totalPrice) * 0.1)
            return totalPriceWithDiscount.toFixed(2).toString()
        } else return "0.00"
    } else return "0.00"
}


//deduct discount value of 10% if active from total price, if not, return total price without discount
export const handleTotal = (userEmail: string, transactionData: TransactionDataTypes[], activeDiscountCode: string, discountQuery: string, reduxCartItems: CartItemsTypes[], products: ProductsTypes[]): string | undefined => {
    if (handleIsDiscountActive(userEmail, transactionData)) {
        if (activeDiscountCode === discountQuery) {
            let total: number = parseFloat(handleTotalPrice(reduxCartItems, products)) - (parseFloat(handleTotalPrice(reduxCartItems, products)) * 0.1)
            return total.toFixed(2)?.toString()
        } else return handleTotalPrice(reduxCartItems, products)?.toString()
    } else return handleTotalPrice(reduxCartItems, products)?.toString()
}




//handle price to pass as prop to trasnaction whether discount is active on total price or not
export const handleTotalPriceToDeductFromUser = (userEmail: string, transactionData: TransactionDataTypes[], activeDiscountCode: string, discountQuery: string, reduxCartItems: CartItemsTypes[], products: ProductsTypes[]): string => {
    let isDiscountActive: boolean = handleIsDiscountActive(userEmail, transactionData)

    if(isDiscountActive) return handleTotal(userEmail, transactionData, activeDiscountCode, discountQuery, reduxCartItems, products) as string
    else return  handleTotalPrice(reduxCartItems, products) as string
}




//remove discount coupon alert after 5 sec
export const useHandleCouponInfoTimeout = (couponInfoActive: boolean, setCouponInfoActive: Function): void => {
    const handleCouponInfoCallback = useCallback(() => {
        if(couponInfoActive) {
            let timeout: ReturnType<typeof setTimeout> = setTimeout((): void => {
                setCouponInfoActive(false)
            }, 5000)

            return () => clearTimeout(timeout)
        }
    }, [couponInfoActive])

    useEffect((): void => {
        handleCouponInfoCallback()
    }, [handleCouponInfoCallback])
}



//render div based on if discount coupon has/hasnt been applies
export const handleDivAlert = (activeDiscountCode: string, discountQuery: string): string => {
    if(activeDiscountCode === "") return "Not Applied"
    else {
        if(activeDiscountCode === discountQuery) return "Applied"
        else return "Not Applied"
    }
}


//track whether discount coupon has been applied
export const handleIsCouponApplied = ( activeDiscountCode: string, discountQuery: string): boolean => {
    if(activeDiscountCode === "") return false
    else {
        if(activeDiscountCode === discountQuery) return true
        else return false
    }
}

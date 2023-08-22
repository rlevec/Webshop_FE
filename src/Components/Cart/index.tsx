import {FC, ReactElement, useState, useRef} from "react";
import * as React from "react";

import {StyledCart} from "./styledCart";

import {Link} from "react-router-dom";

import {useGetCartFormDataQuery, useGetProductsDataQuery, useGetTransactionsQuery} from "../../Redux/Slices/apiSlice";
import {removeCartItem, setCartItemsAdd, setCartItemsSubtract} from "../../Redux/Slices/cartSlice";
import {useAppDispatch} from "../../Redux/Store/store";
import {useAppSelector} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import {
    CartFormDataPopulatedColumnsTypes,
    CartFormDataPopulatedTypes,
    ProductsTypes,
    CartItemsTypes,
    TransactionDataTypes
} from "./types";

import PriceTag from "../../Assets/price_tag.svg"
import Close from "../../Assets/close.svg"
import CarretUp from "../../Assets/carret-up.svg"
import CarretDown from "../../Assets/carret-down.svg"
import Refresh from "../../Assets/refresh.svg"
import HomeIcon from "../../Assets/home.svg"
import Question from "../../Assets/question.svg"

import {CONST} from "../../Utils/CONST";

import {
    handleTotalPrice,
    handleProductPrice,
    renderColumns,
    handleCartItemsToRender,
    handleDiscountValue,
    handleTotal,
    handleTotalPriceToDeductFromUser,
    useHandleDiscountAsQueryOnFirstRender,
    useHandleCouponInfoTimeout,
    handleDivAlert,
    handleIsCouponApplied,
} from "./helpers";
import {useHandleClickOutside} from "../../Utils/helpers";


import Transaction from "../../Modals/Transaction";
import ServerError from "../../Pages/ServerError";
import Loading from "../../Pages/Loading";

const Cart: FC = (): ReactElement => {

    const dispatch: Dispatch = useAppDispatch()

    const userEmail: string = useAppSelector((state) => state?.login?.loginData?.email)

    const {
        data: isFetchedProductsData,
        isFetching: isFetchingProductsData,
        isLoading: isLoadingProductsData,
        isError: isErrorProductsData
    } = useGetProductsDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const {
        data: isFetchedCartFormData,
        isFetching: isFetchingCartFormData,
        isLoading: isLoadingCartFormData,
        isError: isErrorCartFormData
    } = useGetCartFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})

    const {
        data: isFetchedTransactionData,
        isFetching: isFetchingTransactionData,
        isLoading: isLoadingTransactionData,
        isError: isErrorTransactionData
    } = useGetTransactionsQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})


    const [activeDiscountCode, setActiveDiscountCode] = useState<string>("")

    const [transactionModalActive, setTransactionModalActive] = useState<boolean>(false)

    const [discountQuery, setDiscountQuery] = useState<string>("")


    const [couponInfoActive, setCouponInfoActive] = useState(false)

    const transactionModalRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    const reduxCartItems: CartItemsTypes[] = useAppSelector((state) => state?.cartItems?.cartItems)

    const products: ProductsTypes[] = isFetchedProductsData

    const populatedCartFormData: CartFormDataPopulatedTypes = isFetchedCartFormData?.populated

    const transactionData: TransactionDataTypes[] = isFetchedTransactionData


    useHandleDiscountAsQueryOnFirstRender(userEmail, transactionData, setDiscountQuery, setActiveDiscountCode)

    useHandleCouponInfoTimeout(couponInfoActive, setCouponInfoActive)

    useHandleClickOutside(setTransactionModalActive, transactionModalRef)


    if (
        isLoadingProductsData ||
        isFetchingProductsData ||
        isLoadingCartFormData ||
        isFetchingCartFormData ||
        isFetchingTransactionData ||
        isLoadingTransactionData
    ) return <Loading/>
    else if (
        isErrorProductsData ||
        isErrorCartFormData ||
        isErrorTransactionData ||
        !isFetchedProductsData ||
        !isFetchedCartFormData ||
        !isFetchedTransactionData
    ) return <ServerError/>
    else {
        return (
            <StyledCart className="styledComponent-Cart">
                <div className="cart_wrapper">
                    <div className="cart_content-wrapper">
                        {
                            transactionModalActive &&
                          <div className="transaction_modal-wrapper" ref={transactionModalRef}>
                            <Transaction
                              setTransactionModalActive={setTransactionModalActive}
                              totalPrice={handleTotalPriceToDeductFromUser(userEmail, transactionData, activeDiscountCode, discountQuery, reduxCartItems, products)}
                            />
                          </div>
                        }
                        <div className="cart_content-container">
                            <div className="cart_content-columns-container">
                                {populatedCartFormData?.cartColumns?.map((el: CartFormDataPopulatedColumnsTypes) => {
                                    const {id, frontendSlug, title,} = el

                                    return (
                                        <div key={id} className="cart_content-column-title">
                                            {renderColumns(frontendSlug, title)}
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="cart_content-products-container">
                                {handleCartItemsToRender(reduxCartItems)?.map((el: CartItemsTypes) => {
                                    const {image, frontendSlug, title, quantity} = el

                                    return (
                                        <div className="cart_content-product-container">
                                            <div className="cart_content-product-title">{title}</div>
                                            <div className="cart_content-product-image-container">
                                                <img
                                                    src={image} alt={frontendSlug}
                                                />
                                            </div>
                                            <div className="cart_content-product-qty-container">
                                                <div className="cart_content-icon"
                                                     onClick={() => dispatch(setCartItemsAdd({cartItem: el}))}
                                                >
                                                    <CarretUp/>
                                                </div>
                                                <div className="cart_content-product-qty">{quantity || 1}</div>
                                                <div className="cart_content-icon"
                                                     onClick={() => dispatch(setCartItemsSubtract({cartItem: el}))}
                                                >
                                                    <CarretDown/>
                                                </div>
                                            </div>
                                            <div
                                                className="cart_content-product-price">{handleProductPrice(frontendSlug, products)} €
                                            </div>
                                            <div
                                                onClick={() => dispatch(removeCartItem({cartItem: el}))}
                                                className="cart_content-product-removal">
                                                <Close/>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="cart_coupon-calculations-container">
                            <div className="cart_coupon-container">
                                <div className="coupon-title">{populatedCartFormData?.couponTitle}</div>
                                <div className="coupon-input-container">
                                    <input
                                        placeholder={populatedCartFormData?.couponInput?.placeholder}
                                        type="text"
                                        value={discountQuery}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDiscountQuery(e?.target?.value)}
                                    />
                                    <button
                                        disabled={activeDiscountCode === discountQuery}
                                        className="refresh-icon-container"
                                        onClick={() => setDiscountQuery(activeDiscountCode)}>
                                        <Refresh/>
                                    </button>
                                    <div className="coupon-icon">
                                        <PriceTag/>
                                    </div>
                                </div>
                                <div className="coupon-alert-container">
                                    <div onClick={() => setCouponInfoActive(true)}
                                         className={handleIsCouponApplied(activeDiscountCode, discountQuery) ? "applied-container" : "notApplied-container"}>{handleDivAlert(activeDiscountCode, discountQuery)}</div>
                                    <div className="coupon-alert-info-container"><Question/></div>
                                    {couponInfoActive &&
                                      <div className="coupon-alert-info-text">Your coupon will be automatically applied
                                        if it is your 2nd web purchase attempt and after on every 5th web purchase
                                        attempt!</div>}
                                </div>
                            </div>
                            <div className="cart_calculations-wrapper">
                                <Link className="home_route-icon" to={CONST?.routes?.root}>
                                    <HomeIcon/>
                                </Link>
                                <div className="cart_calculations-container">
                                    <div className="cart_calculations-price-container">
                                        <div className="price-container">{populatedCartFormData?.priceTitle}:</div>
                                        <div
                                            className="total-price-container">{handleTotalPrice(reduxCartItems, products)?.toString()} €
                                        </div>
                                    </div>
                                    <div className="cart_calculations-price-container">
                                        <div className="price-container">{populatedCartFormData?.discountTitle}:</div>
                                        <div
                                            className="discount-amount-container">{handleDiscountValue(activeDiscountCode, discountQuery, reduxCartItems, products)} €
                                        </div>
                                    </div>
                                    <div className="cart_calculations-amount-container">
                                        <div className="price-container">{populatedCartFormData?.totalTitle}:</div>
                                        <div
                                            className="total-amount-container">{handleTotal(userEmail, transactionData, activeDiscountCode, discountQuery, reduxCartItems, products)} €
                                        </div>
                                    </div>
                                    <button className="purchase_button"
                                            onClick={() => setTransactionModalActive(true)}
                                    >
                                        {populatedCartFormData?.finishButtonTitlte}
                                    </button>
                                    <Link to={CONST?.routes?.productsRoute}>
                                        <button className="shopping_button">
                                            {populatedCartFormData?.continueButtonTitle}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledCart>
        )
    }
}

export default Cart
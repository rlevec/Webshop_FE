import {FC, ReactElement} from "react"

import {StyledCart} from "./styledCart";
import {StyledCartPopulated} from "./styledCartPopulated";

import {CartModalPropTypes, CartFormDataTypes, ProductsTypes, CartItemsTypes} from "./types";

import {Link} from "react-router-dom";

import {useGetCartFormDataQuery, useGetProductsDataQuery} from "../../Redux/Slices/apiSlice";

import {CONST} from "../../Utils/CONST";

import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";
import {removeCartItem} from "../../Redux/Slices/cartSlice";
import {setCartItemsAdd, setCartItemsSubtract} from "../../Redux/Slices/cartSlice";

import {locationRouteDispatcher, productsRouteDispatcher} from "../../Utils/helpers";
import {handleIsPurchaseActive, handlePurchaseProductsToRender} from "./helpers";

import Close from "../../Assets/close.svg"
import ArrowUp from "../../Assets/arrow_up.svg"
import ArrowDown from "../../Assets/arrow_down.svg"

import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";

export const Cart: FC<CartModalPropTypes> = (props): ReactElement => {
    const dispatch: Dispatch = useAppDispatch()

    const reduxStateFractionCartItems: CartItemsTypes[] = useAppSelector((state) => state?.cartItems?.cartItems)

    const {modalActive, setModalActive} = props

    const {
        data: isFetchedCartFormData,
        isFetching: isFetchingCartFormData,
        isLoading: isLoadingCartFormData,
        isError: isErrorCartFormData
    } = useGetCartFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})

    const {
        data: isFetchedProductsData,
        isFetching: isFetchingProductsData,
        isLoading: isLoadingProductsData,
        isError: isErrorProductsData
    } = useGetProductsDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const cartFormData: CartFormDataTypes = isFetchedCartFormData

    const products: ProductsTypes[] = isFetchedProductsData || []

    const deviceType = useAppSelector((state) => state?.device?.device)

    if (isFetchingCartFormData || isFetchingProductsData || isLoadingProductsData || isLoadingCartFormData) return <Loading/>
    else if (isErrorCartFormData || isErrorProductsData || !isFetchedCartFormData || !isFetchedProductsData) return <ServerError/>
    else {
        if (handleIsPurchaseActive(reduxStateFractionCartItems)) {
            return (
                <StyledCartPopulated onMouseEnter={() => setModalActive({...modalActive, cart: true})}
                                     onMouseLeave={() => setModalActive({...modalActive, cart: false})}>
                    <div className="cart_wrapper">
                        {deviceType !== "desktop" && <div className="close-icon-container" onClick={() => setModalActive({...modalActive, cart: false})}><Close/></div>}
                        {handlePurchaseProductsToRender(reduxStateFractionCartItems)?.map((el: CartItemsTypes) => {
                            const {title, image, quantity, frontendSlug} = el

                            return (
                                <div className="cart_products-wrapper">
                                    <div className="cart_products-container">
                                        <div className="cart_products-title">{title}</div>
                                        <div className="cart_producs-desc-icon-container">
                                            <div className="cart_img-qty-price-container">
                                                <img src={image} alt={frontendSlug}/>
                                                <div className="cart_qty-price-container">
                                                    <div className="cart_qty-container">
                                                        <div className="cart_qty-paragraph-one">Quantity:</div>
                                                        <div className="cart_qty-paragraph-two">{quantity || 1}</div>
                                                    </div>
                                                    <div className="cart_price-container">
                                                        <div className="cart_price-paragraph-one">Price:</div>
                                                        <div
                                                            className="cart_price-paragraph-two">{products?.find((item: ProductsTypes): boolean => el?.frontendSlug === item?.frontendSlug)?.amount}<span>€</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cart_qty-arrows-container">
                                                <div className="cart_qty_arrow-icon-container"
                                                     onClick={() => dispatch(setCartItemsAdd({cartItem: el}))}>
                                                    <ArrowUp/></div>
                                                <div className="cart_qty_arrow-icon-container"
                                                     onClick={() => dispatch(setCartItemsSubtract({cartItem: el}))}>
                                                    <ArrowDown/></div>
                                            </div>
                                            <div className="remove_item-icon-wrapper"
                                            >
                                                <div className="remove_item-icon-container"
                                                     onClick={() => dispatch(removeCartItem({
                                                         cartItem: {
                                                             frontendSlug: frontendSlug,
                                                             title: title,
                                                             image: image
                                                         }
                                                     }))}
                                                >
                                                    <Close/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="cart_products-pruchase-finish">
                        <Link to={CONST?.routes?.cartRoute}>
                            <button>{cartFormData?.cartButtonTitle}</button>
                        </Link>
                    </div>
                </StyledCartPopulated>
            )
        } else {
            return (
                <StyledCart onMouseEnter={() => setModalActive({...modalActive, cart: true})}
                            onMouseLeave={() => setModalActive({...modalActive, cart: false})}>
                    <div className="cart_wrapper">
                        {deviceType !== "desktop" && <div className="close-icon-container" onClick={() => setModalActive({...modalActive, cart: false})}><Close/></div>}
                        <div className="cart_title">{cartFormData?.header}</div>
                        <div className="cart_empty">{cartFormData?.emptyTitle}</div>
                        <div className="cart_warning">
                            {cartFormData.emptyWarningOne} <span>
                    <Link
                        to={CONST?.routes?.productsRoute}
                        onClick={() => {
                            productsRouteDispatcher(null, null, null, dispatch);
                            setModalActive({...modalActive, cart: false});
                            locationRouteDispatcher(null, dispatch);
                        }}
                    >
                        {cartFormData?.emptyWarningTwo}
                    </Link>
                    </span> {cartFormData?.emptyWarningThree}
                        </div>
                    </div>
                </StyledCart>
            )
        }
    }
}

export default Cart
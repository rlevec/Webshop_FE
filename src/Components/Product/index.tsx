import {FC, ReactElement, useState} from "react";

import {useLocation, Location, useParams, useNavigate, NavigateFunction, Link} from "react-router-dom";

import {CONST} from "../../Utils/CONST";

import {
    CartItemsTypes,
    WishlistItemsTypes,
    CartItemWarningStateTypes,
    WishlistItemWarningStateTypes,
    ProductsTypes
} from "./types";

import {StyledProduct} from "./styledProduct";

import Plus from "../../Assets/plus.svg"
import Minus from "../../Assets/minus.svg"
import Cart from "../../Assets/cart.svg"
import Wishlist from "../../Assets/heart.svg"
import Truck from "../../Assets/truck.svg"


import {useGetProductsDataQuery} from "../../Redux/Slices/apiSlice";
import {setSelectedCategory} from "../../Redux/Slices/selectedCategorySlice";
import {setSelectedSubCategory} from "../../Redux/Slices/selectedSubCategorySlice";
import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";
import {setSelectedBrand} from "../../Redux/Slices/selectedBrand";
import {setCartItemsAdd, setCartItemsSubtract} from "../../Redux/Slices/cartSlice";

import {
    handleAddToWishlistFunction,
    handleAddToCartFunction,
    useHandleWishlistWarningStateTracker,
    useHandleCartWarningStateTracker,
    handleWishlistCartWarning, productsRouteDispatcher,
} from "../../Utils/helpers";
import {handleQuantity, useHandleProductRouteParamError, extractExactPathAndMatchProductObject} from "./helpers";

import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";


const Product: FC = (): ReactElement => {
    const {
        data: isFetchedProductsData,
        isFetching: isFetchingProductsData,
        isLoading: isLoadingProductsData,
        isError: isErrorProductsData
    } = useGetProductsDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const [cartItemWarning, setCartItemWarning] = useState<CartItemWarningStateTypes>({
        cartItemExists: null,
        cartItemAdded: null
    })
    const [wishlistItemWarning, setWishlistItemWarning] = useState<WishlistItemWarningStateTypes>({
        wishlistItemAdded: null,
        wishlistItemExists: null,
        wishlistItemInCart: null
    })


    const dispatch: Dispatch = useAppDispatch()

    const reduxStateCartItems = useAppSelector((state) => state?.cartItems?.cartItems)

    const reduxWishlistItems = useAppSelector((state) => state?.wishlistItems?.wishlistItems)

    const productsData: ProductsTypes[] = isFetchedProductsData

    const location: Location = useLocation()

    const paramRoute: string | undefined = useParams()?.route

    const navigate: NavigateFunction = useNavigate()

    const matchObject: ProductsTypes | undefined = extractExactPathAndMatchProductObject(location, productsData)


    useHandleProductRouteParamError(paramRoute as string, productsData, navigate)

    useHandleWishlistWarningStateTracker(reduxWishlistItems, reduxStateCartItems, wishlistItemWarning, setWishlistItemWarning)

    useHandleCartWarningStateTracker(cartItemWarning, setCartItemWarning, reduxStateCartItems)


    if (isFetchingProductsData || isLoadingProductsData) return <Loading/>
    else if (isErrorProductsData || !isFetchedProductsData) return <ServerError/>
    else {
        return (
            <StyledProduct>
                <div className="product_wrapper">
                    <div className="product_image-content-wrapper">
                        <div className="product_image-container"
                             onClick={(): void => {
                                 productsRouteDispatcher(matchObject?.categorySlug as string, matchObject?.subCategorySlug as string, matchObject?.brand as string, dispatch);
                                 navigate(CONST?.routes?.productsRoute)
                             }}
                        >
                            <img src={matchObject?.image} alt={matchObject?.frontendSlug}/>
                        </div>
                        <div className="product_content-container">
                            {handleWishlistCartWarning(matchObject?.frontendSlug as string, cartItemWarning, wishlistItemWarning)}
                            <div className="product_categories-container">
                                <Link
                                    to={CONST?.routes?.productsRoute}
                                    className="product_category-title"
                                    onClick={() => {
                                        dispatch(setSelectedCategory({categorySelected: matchObject?.categorySlug}))
                                        dispatch(setSelectedBrand({brandSelected: null}))
                                    }}
                                >
                                    {matchObject?.categoryTitle}
                                </Link>
                                <span>/</span>
                                <Link
                                    to={CONST?.routes?.productsRoute}
                                    className="product_subCategory-title"
                                    onClick={() => {
                                        dispatch(setSelectedSubCategory({subCategorySelected: matchObject?.subCategorySlug}))
                                        dispatch(setSelectedBrand({brandSelected: null}))
                                    }}
                                >
                                    {matchObject?.subCategoryTitle}
                                </Link>
                            </div>
                            <div className="product_title-container">
                                {matchObject?.title}
                            </div>
                            <div className="product_desc-container">
                                {matchObject?.description?.paragraphOne &&
                                  <p className="product_desc">{matchObject?.description?.paragraphOne}</p>}
                                {matchObject?.description?.paragraphTwo &&
                                  <p className="product_desc">{matchObject?.description?.paragraphTwo}</p>}
                            </div>
                            <div className="price_purchase-container">
                                <div className="cost-container">
                                    {matchObject?.amount} €
                                </div>
                                <div className="products_quantity-container">
                                    <div className="icon-container"
                                         onClick={() => handleAddToWishlistFunction(matchObject?.frontendSlug as string, matchObject as WishlistItemsTypes, reduxStateCartItems, dispatch, wishlistItemWarning, setWishlistItemWarning, reduxWishlistItems)}
                                    >
                                        <Wishlist/>
                                    </div>
                                    <div className="products_quantity-content-container">
                                        <div
                                            onClick={() => dispatch(setCartItemsSubtract({
                                                cartItem: {
                                                    frontendSlug: matchObject?.frontendSlug,
                                                    title: matchObject?.title,
                                                    image: matchObject?.image
                                                }
                                            }))}
                                            className="icon-container"
                                        >
                                            <Minus/>
                                        </div>
                                        <div
                                            className="quantity-container">{handleQuantity(matchObject?.frontendSlug as string, reduxStateCartItems)}</div>
                                        <div
                                            onClick={() => dispatch(setCartItemsAdd({
                                                cartItem: {
                                                    frontendSlug: matchObject?.frontendSlug,
                                                    title: matchObject?.title,
                                                    image: matchObject?.image
                                                }
                                            }))}
                                            className="icon-container"
                                        >
                                            <Plus/>
                                        </div>
                                    </div>
                                    <div className="icon-container"
                                         onClick={() => handleAddToCartFunction(matchObject?.frontendSlug as string, matchObject as CartItemsTypes, reduxWishlistItems, dispatch, cartItemWarning, setCartItemWarning, reduxStateCartItems)}
                                    >
                                        <Cart/>
                                    </div>
                                </div>
                            </div>
                            <div className="product_delivery-container">
                                <div className="icon-container"><Truck/></div>
                                <div className="paragraphs-container">
                                    <span className="paragraph-one">Free shipping</span>
                                    <span> </span>
                                    <span className="paragraph-two">with purchase of this item</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledProduct>
        )
    }
}

export default Product
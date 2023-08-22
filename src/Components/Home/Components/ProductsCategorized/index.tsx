import {FC, ReactElement, useState} from "react"

import {StyledProductsCategorized} from "./styledProductsCategorized";

import {Link} from "react-router-dom";

import {CONST} from "../../../../Utils/CONST";

import {
    useHandleCartWarningStateTracker,
    useHandleWishlistWarningStateTracker,
    handleAddToWishlistFunction,
    handleWishlistCartWarning,
    handleAddToCartFunction,
} from "../../../../Utils/helpers";

import {handleSliceChangeByActionTypes, handleSlicedArrayByDeviceType, handleQuantity} from "./helpers";


import {
    useGetProductsDataQuery,
    useUseGetProductsCategorizedFormDataButtonsQuery
} from "../../../../Redux/Slices/apiSlice";
import {setCartItemsAdd, setCartItemsSubtract} from "../../../../Redux/Slices/cartSlice";
import {useAppDispatch} from "../../../../Redux/Store/store";
import {useAppSelector} from "../../../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import Previous from "../../../../Assets/angle-left.svg";
import Heart from "../../../../Assets/heart.svg";
import Minus from "../../../../Assets/minus.svg";
import Plus from "../../../../Assets/plus.svg";
import Cart from "../../../../Assets/cart.svg";
import Next from "../../../../Assets/angle-right.svg";
import ArrowRight from "../../../../Assets/arrow-right.svg"

import {
    ProductsCategorizedTypes,
    ProductsCategorizedButtonsFormDataTypes,
    SliceValueStateTypes,
    CartItemsTypes,
    WishlistItemsTypes, CartItemWarningStateTypes, WishlistItemWarningStateTypes,
} from "./types";

import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";
import Buttons from "./Components/Buttons";
import Dropdown from "./Components/Dropdown";


const ProductsCategorized: FC = (): ReactElement => {

    const reduxStateCartItems: CartItemsTypes[] = useAppSelector((state) => state?.cartItems?.cartItems)
    const reduxWishlistItems: WishlistItemsTypes[] = useAppSelector((state) => state?.wishlistItems?.wishlistItems)
    const deviceType = useAppSelector((state) => state?.device?.device)


    const dispatch:Dispatch = useAppDispatch()

    const {
        data: isFetchedProductsData,
        isFetching: isFetchingProductsData,
        isLoading: isLoadingProductsData,
        isError: isErrorProductsData
    } = useGetProductsDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})


    const {
        data: isFetchedProductsCategorizedFormDataButtons,
        isFetching: isFetchingProductsCategorizedFormDataButtons,
        isLoading: isLoadingProductsCategorizedFormDataButtons,
        isError: isErrorProductsCategorizedFormDataButtons
    } = useUseGetProductsCategorizedFormDataButtonsQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true
    })


    const [activeCategory, setActiveCategory] = useState<string>("bestSellers")
    const [sliceValue, setSliceValue] = useState<SliceValueStateTypes>({
        start: 0,
        end: 5
    })
    const [tabletSliceValue, setTabletSliceValue] = useState<SliceValueStateTypes>({
        start: 0,
        end: 2
    })
    const [phoneSliceValue, setPhoneSliceValue] = useState<SliceValueStateTypes>({
        start: 0,
        end: 1
    })
    const [cartItemWarning, setCartItemWarning] = useState<CartItemWarningStateTypes>({cartItemAdded: null, cartItemExists: null})
    const [wishlistItemWarning, setWishlistItemWarning] = useState<WishlistItemWarningStateTypes>({wishlistItemAdded: null, wishlistItemExists: null, wishlistItemInCart: null})

    const sliceStepArgument: number = 5
    const tabletSliceStepArgument: number = 2
    const phoneSliceStepArgument: number = 1
    const arrayLimitIndex: number = 10



    const productsCategorizedFormButtons: ProductsCategorizedButtonsFormDataTypes = isFetchedProductsCategorizedFormDataButtons || {}

    const products: ProductsCategorizedTypes[] = isFetchedProductsData || []


    useHandleWishlistWarningStateTracker(reduxWishlistItems,reduxStateCartItems, wishlistItemWarning, setWishlistItemWarning)

    useHandleCartWarningStateTracker(cartItemWarning, setCartItemWarning, reduxStateCartItems)

    if (isFetchingProductsData || isFetchingProductsCategorizedFormDataButtons || isLoadingProductsData || isLoadingProductsCategorizedFormDataButtons) return <Loading/>
    else if (isErrorProductsData || isErrorProductsCategorizedFormDataButtons || !isFetchedProductsData || !isFetchedProductsCategorizedFormDataButtons) return <ServerError/>
    else {
        return (
            <StyledProductsCategorized className="styledComponent-ProductsCategorized">
                <div className="products-categorized_wrapper">
                    {deviceType === "desktop" ? (
                        <Buttons
                            data={productsCategorizedFormButtons?.filterButtons}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            sliceValue={sliceValue}
                            setSliceValue={setSliceValue}
                            sliceStepArgument={sliceStepArgument}
                        />
                    ) : (
                        <Dropdown
                            data={productsCategorizedFormButtons?.filterButtons}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            tabletSliceValue={tabletSliceValue}
                            setTabletSliceValue={setTabletSliceValue}
                            phoneSliceValue={phoneSliceValue}
                            setPhoneSliceValue={setPhoneSliceValue}
                            tabletSliceStepArgument={tabletSliceStepArgument}
                            phoneSliceStepArgument={phoneSliceStepArgument}
                        />
                    )
                    }
                    <div className="products-categorized_container">
                        <div className="products-categorized_icon-container"
                             onClick={() => handleSliceChangeByActionTypes("previous", deviceType, phoneSliceValue, setPhoneSliceValue, tabletSliceValue, setTabletSliceValue, sliceValue, setSliceValue, arrayLimitIndex, phoneSliceStepArgument, tabletSliceStepArgument, sliceStepArgument)}>
                            <Previous/>
                        </div>
                        <div className="products-categorized_content-container">
                            {handleSlicedArrayByDeviceType(products, deviceType, activeCategory, phoneSliceValue, tabletSliceValue, sliceValue)?.map((el: ProductsCategorizedTypes) => {
                                const {
                                    route,
                                    frontendSlug,
                                    title,
                                    amount,
                                    image,
                                } = el

                                return (
                                    <div key={frontendSlug}
                                         className="products-categorized_card-container">
                                        {handleWishlistCartWarning(frontendSlug, cartItemWarning, wishlistItemWarning)}
                                        <Link to={`/${route}`} onClick={() => window.scrollTo(0, 0)}
                                              className="products-categorized_image-container">
                                            <img src={image} alt={frontendSlug}/>
                                        </Link>
                                        <Link to={`/${route}`} onClick={() => window.scrollTo(0, 0)}
                                              className="products-categorized_title-container">
                                            <div className="products-categorized_title">{title}</div>
                                        </Link>
                                        <div className="products-categorized_price-container">
                                            <div
                                                className="products-categorized_price">{amount} €
                                            </div>
                                        </div>
                                        <div className="products-categorized_quantity-container">
                                            <div className="products-categorized_icon-container"
                                                 onClick={() => handleAddToWishlistFunction(frontendSlug, el as WishlistItemsTypes, reduxStateCartItems, dispatch, wishlistItemWarning, setWishlistItemWarning, reduxWishlistItems)}
                                            >
                                                <Heart/>
                                            </div>
                                            <div className="products-categorized_content-container">
                                                <div className="products-categorized_icon-container"
                                                     onClick={() => dispatch(setCartItemsSubtract({cartItem: {frontendSlug: frontendSlug, title: title, image: image}}))}
                                                >
                                                    <Minus/>
                                                </div>
                                                <div className="products-categorized_purchase-container">
                                                    <div className="products-categorized_purchase">
                                                        <div
                                                            className="products-categorized_purchase-amount">{handleQuantity(frontendSlug, reduxStateCartItems)}</div>
                                                    </div>
                                                </div>
                                                <div className="products-categorized_icon-container"
                                                     onClick={() => dispatch(setCartItemsAdd({cartItem: {frontendSlug: frontendSlug, title: title, image: image}}))}
                                                >
                                                    <Plus/>
                                                </div>
                                            </div>
                                            <div
                                                onClick={() => handleAddToCartFunction(frontendSlug, el as CartItemsTypes, reduxWishlistItems, dispatch, cartItemWarning, setCartItemWarning, reduxStateCartItems)}
                                                className="products-categorized_icon-container"
                                            >
                                                <Cart/>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="products-categorized_icon-container"
                             onClick={() => handleSliceChangeByActionTypes("next", deviceType, phoneSliceValue, setPhoneSliceValue, tabletSliceValue, setTabletSliceValue, sliceValue, setSliceValue, arrayLimitIndex, phoneSliceStepArgument, tabletSliceStepArgument, sliceStepArgument)}>
                            <Next/>
                        </div>
                    </div>
                    <Link className="show_all-button-container" to={CONST?.routes?.productsRoute} onClick={() => window.scrollTo(0, 0)}>
                        <button>
                            <div>{productsCategorizedFormButtons?.showAll?.title}</div>
                            <ArrowRight/>
                        </button>
                    </Link>
                </div>
            </StyledProductsCategorized>
        )
    }
}

export default ProductsCategorized
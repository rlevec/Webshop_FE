import React, {FC, ReactElement, useRef, useState} from "react";

import {
    ProductsTypes,
    CategoriesArrayTypes,
    SubCategoryArrayTypes,
    BrandArrayTypes,
    CartItemsTypes,
    WishlistItemsTypes,
    CartItemWarningStateTypes,
    WishlistItemWarningStateTypes
} from "./types";


import {
    handleUniqueCategoriesArray,
    handleProductsToRender,
    handleBrands,
    handlePriceRanges,
    handleChecked,
    handleAmount,
    handleSubCategories,
    handleSubCategoryClassName,
    handleSubCategoryAmountClassName,
    handleClassName,
    handlePriceChangeDebounce,
    useHandleExternalComponentRedirect,
    useHandleDivHeight,
    handleQuantity,
} from "./helpers";


import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";

import {Link} from "react-router-dom";

import Minus from "../../Assets/minus.svg";
import Plus from "../../Assets/plus.svg";
import Heart from "../../Assets/heart.svg"
import Cart from "../../Assets/cart.svg"

import {StyledProducts} from "./styledProducts";

import {CONST} from "../../Utils/CONST";

import {setSelectedSubCategory} from "../../Redux/Slices/selectedSubCategorySlice";
import {setSelectedCategory} from "../../Redux/Slices/selectedCategorySlice";
import {setSelectedBrand} from "../../Redux/Slices/selectedBrand";
import {setCartItemsSubtract, setCartItemsAdd} from "../../Redux/Slices/cartSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {useGetProductsDataQuery} from "../../Redux/Slices/apiSlice";

import {useHandleCartWarningStateTracker, useHandleWishlistWarningStateTracker, handleAddToWishlistFunction, handleAddToCartFunction, handleWishlistCartWarning} from "../../Utils/helpers";

import ServerError from "../../Pages/ServerError";
import Loading from "../../Pages/Loading";

const Products: FC = (): ReactElement => {
    const reduxStateCartItems = useAppSelector((state) => state?.cartItems?.cartItems)
    const reduxStateWishlistItems = useAppSelector((state) => state?.wishlistItems?.wishlistItems)
    const categorySelectedRedux = useAppSelector((state) => state?.selectedCategory?.categorySelected)
    const subCategorySelectedRedux = useAppSelector((state) => state?.selectedSubCategory?.subCategorySelected)
    const brandSelectedRedux = useAppSelector((state) => state?.selectedBrand?.brandSelected)

    const [brandsListActive, setBrandsListActive] = useState(false)
    const [activeCategory, setActiveCategory] = useState<string>("")
    const [activeCategoryHovered, setActiveCategoryHovered] = useState<string>("")
    const [activeSubCategory, setActiveSubCategory] = useState<string>("")
    const [subCategoryHovered, setSubCategoryHovered] = useState<string>("")
    const [checkedBrands, setCheckedBrands] = useState<string[]>([])
    const [activePrice, setActivePrice] = useState<number | null>(null)
    const [priceFilterActive, setPriceFilterActive] = useState<boolean>(false)
    const [filterDivHeight, setFilterDivHeight] = useState<null | number>(null)
    const [cartItemWarning, setCartItemWarning] = useState<CartItemWarningStateTypes>({cartItemExists: null, cartItemAdded: null})
    const [wishlistItemWarning, setWishlistItemWarning] = useState<WishlistItemWarningStateTypes>({wishlistItemAdded: null, wishlistItemExists: null, wishlistItemInCart: null})


    const filterRef: React.RefObject<HTMLDivElement> = useRef(null);

    const dispatch: Dispatch = useAppDispatch()

    const {
        data: isFetchedProductsData,
        isFetching: isFetchingProductsData,
        isLoading: isLoadingProductsData,
        isError: isErrorProductsData
    } = useGetProductsDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const productsData: ProductsTypes[] = isFetchedProductsData

    useHandleExternalComponentRedirect(productsData, categorySelectedRedux, subCategorySelectedRedux, setActiveCategory, setActiveSubCategory, brandSelectedRedux, setCheckedBrands, checkedBrands, setBrandsListActive)

    useHandleDivHeight(filterRef, setFilterDivHeight, brandsListActive, priceFilterActive)

    useHandleWishlistWarningStateTracker(reduxStateWishlistItems,reduxStateCartItems, wishlistItemWarning, setWishlistItemWarning)

    useHandleCartWarningStateTracker(cartItemWarning, setCartItemWarning, reduxStateCartItems)


    if (isFetchingProductsData || isLoadingProductsData) return <Loading/>
    else if (isErrorProductsData || !isFetchedProductsData) return <ServerError/>
    else {
        return (
            <StyledProducts filterDivHeight={filterDivHeight as number}>
                <div className="categories_filter-wrapper" ref={filterRef}>
                    <div className="categories_wrapper">
                        <div className="categories_title-container">
                            <div className="categories_title">Categories</div>
                        </div>
                        <div className="categories_content">
                            {handleUniqueCategoriesArray(productsData)?.map((el: CategoriesArrayTypes) => {
                                const {frontendSlug, title} = el
                                return (
                                    <div className="categories_single-content-wrapper">
                                        <div onMouseEnter={() => setActiveCategoryHovered(frontendSlug)}
                                             onMouseLeave={() => setActiveCategoryHovered("")}
                                             className={handleClassName(frontendSlug, activeCategory, activeCategoryHovered)}
                                             onClick={(): void => {
                                                 if (activeCategory === frontendSlug) setActiveCategory("")
                                                 else {
                                                     setActiveSubCategory("")
                                                     setCheckedBrands([])
                                                     setActivePrice(null)
                                                     setActiveCategory(frontendSlug)
                                                 }
                                             }}
                                             key={frontendSlug}>{title}</div>
                                        {activeCategory === frontendSlug ?
                                            <div className="svg-icon-container" onClick={() => {
                                                if (activeCategory === frontendSlug) setActiveCategory("")
                                                else setActiveCategory(frontendSlug)
                                            }}><Minus/></div> : <div className="svg-icon-container" onClick={() => {
                                                if (activeCategory === frontendSlug) setActiveCategory("")
                                                else setActiveCategory(frontendSlug)
                                            }}><Plus/></div>}
                                        {activeCategory === frontendSlug && (
                                            <div className="subCategories_container">
                                                {handleSubCategories(frontendSlug, activeCategory, productsData)?.map((el: SubCategoryArrayTypes) => {
                                                    const {subCategoryTitle, subCategorySlug, brand} = el
                                                    return (
                                                        <div className="subCategories_single-content-container">
                                                            <div
                                                                className={handleSubCategoryClassName(subCategorySlug, activeSubCategory, subCategoryHovered)}
                                                                onMouseEnter={() => setSubCategoryHovered(subCategorySlug)}
                                                                onMouseLeave={() => setSubCategoryHovered("")}
                                                                onClick={() => {
                                                                    setActiveSubCategory(subCategorySlug);
                                                                    setCheckedBrands([])
                                                                    setActivePrice(null)
                                                                }}>{subCategoryTitle}</div>
                                                            <div
                                                                className={handleSubCategoryAmountClassName(subCategorySlug, activeSubCategory, subCategoryHovered)}>{handleAmount(subCategorySlug, productsData)}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="filter_wrapper">
                        <div className="filter_title-container">
                            <div className="filter_title">Filters</div>
                        </div>
                        <div className="brands_title-content-container">
                            <div className="brands_title-container"
                                 onClick={() => setBrandsListActive(!brandsListActive)}>Brands
                            </div>
                            {brandsListActive ?
                                <div className="svg-icon-container" onClick={() => setBrandsListActive(false)}><Minus/>
                                </div> :
                                <div className="svg-icon-container" onClick={() => setBrandsListActive(true)}><Plus/>
                                </div>}
                            {brandsListActive && (
                                <div className="brands_content-container">
                                    {handleBrands(activeCategory, activeSubCategory, productsData)?.map((el: BrandArrayTypes) => {
                                        const {brandTitle, brandSlug} = el
                                        return (
                                            <div className="single_checkbox-label-container">
                                                <input
                                                    className="filter_checkbox"
                                                    onClick={() => handleChecked(brandSlug, checkedBrands, setCheckedBrands)}
                                                    type="checkbox"
                                                    checked={checkedBrands?.includes(brandSlug)}
                                                />
                                                <label>{brandTitle}</label>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                        <div className="price_title-content-container">
                            <div className="price_title-container"
                                 onClick={() => setPriceFilterActive(!priceFilterActive)}>Price
                            </div>
                            {priceFilterActive ?
                                <div className="svg-icon-container" onClick={() => setPriceFilterActive(false)}><Minus/>
                                </div> :
                                <div className="svg-icon-container" onClick={() => setPriceFilterActive(true)}><Plus/>
                                </div>}
                            {priceFilterActive && (
                                <div className="input_value-container">
                                    <div className="value-container">
                                        <div>{handlePriceRanges(activeCategory, activeSubCategory, checkedBrands, productsData)?.minPrice}€</div>
                                        <div>-</div>
                                        <div>{handlePriceRanges(activeCategory, activeSubCategory, checkedBrands, productsData)?.maxPrice}€</div>
                                        <div>{`(${activePrice !== null ? activePrice : handlePriceRanges(activeCategory, activeSubCategory, checkedBrands, productsData)?.maxPrice}€)`}</div>
                                    </div>
                                    <input type="range"
                                           onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePriceChangeDebounce(parseInt(e?.target?.value), setActivePrice)}
                                           value={activePrice !== null ? activePrice : handlePriceRanges(activeCategory, activeSubCategory, checkedBrands, productsData)?.maxPrice}
                                           min={handlePriceRanges(activeCategory, activeSubCategory, checkedBrands, productsData)?.minPrice}
                                           max={handlePriceRanges(activeCategory, activeSubCategory, checkedBrands, productsData)?.maxPrice}
                                           step="1"/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="products_wrapper">
                    {handleProductsToRender(activeCategory, activeSubCategory, checkedBrands, activePrice, productsData)?.map((el: ProductsTypes) => {
                        const {image, frontendSlug, title, amount, quantity, route} = el
                        return (
                            <div
                                key={frontendSlug}
                                className="product_container"
                                onClick={() => {
                                    window.scrollTo(0, 0)
                                    dispatch(setSelectedSubCategory({subCategorySelected: null}))
                                    dispatch(setSelectedCategory({categorySelected: null}))
                                    dispatch(setSelectedBrand({brandSelected: null}))
                                }}
                            >
                                {handleWishlistCartWarning(frontendSlug, cartItemWarning, wishlistItemWarning)}
                                <Link
                                    to={`${CONST?.routes?.productsRoute}/${route}`}>
                                    <img className="product_img" src={image} alt={frontendSlug}/>
                                </Link>
                                <Link
                                    to={`${CONST?.routes?.productsRoute}/${route}`}
                                    className="product_title"
                                >
                                    {title}
                                </Link>
                                <div className="product_price">{amount}<span>€</span></div>
                                <div className="products_quantity-container">
                                    <div className="icon-container"
                                         onClick={() => handleAddToWishlistFunction(frontendSlug, el as WishlistItemsTypes, reduxStateCartItems, dispatch, wishlistItemWarning, setWishlistItemWarning, reduxStateWishlistItems)}
                                    >
                                        <Heart/>
                                    </div>
                                    <div className="products_quantity-content-container">
                                        <div className="icon-container"
                                             onClick={() => dispatch(setCartItemsSubtract({
                                                 cartItem: {
                                                     frontendSlug: frontendSlug,
                                                     title: title,
                                                     image: image
                                                 }
                                             }))}
                                        >
                                            <Minus/>
                                        </div>
                                        <div
                                            className="quantity-container">{handleQuantity(frontendSlug, reduxStateCartItems)}</div>
                                        <div className="icon-container"
                                             onClick={() => dispatch(setCartItemsAdd({
                                                 cartItem: {
                                                     frontendSlug: frontendSlug,
                                                     title: title,
                                                     image: image
                                                 }
                                             }))}
                                        >
                                            <Plus/>
                                        </div>
                                    </div>
                                    <div className="icon-container"
                                         onClick={() => handleAddToCartFunction(frontendSlug, el as CartItemsTypes, reduxStateWishlistItems, dispatch, cartItemWarning, setCartItemWarning, reduxStateCartItems)}
                                    >
                                        <Cart/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </StyledProducts>
        )
    }
}

export default Products
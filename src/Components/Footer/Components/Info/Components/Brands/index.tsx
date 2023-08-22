import {FC, ReactElement} from "react";

import {ProductsTypes, ProductsDataBrandTypes, BrandsFormInteractiveTypes} from "./types";

import {StyledBrands} from "./styledBrands";

import {
    scrollToElement,
    handleProductQuantity,
    handleArraysToRender,
    renderBrandsClickableImages
} from "./helpers";
import {productsRouteDispatcher} from "../../../../../../Utils/helpers";

import {Link} from "react-router-dom";

import {useAppDispatch} from "../../../../../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";
import {useGetProductsDataQuery} from "../../../../../../Redux/Slices/apiSlice";

import {CONST} from "../../../../../../Utils/CONST";

import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";

const Brands: FC = (): ReactElement => {

    const dispatch:Dispatch = useAppDispatch()

    const {
        data: isFetchedProductsData,
        isFetching: isFetchingProductsData,
        isLoading: isLoadingProductsData,
        isError: isErrorProductsData
    } = useGetProductsDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})


    const productsData: ProductsTypes[] = isFetchedProductsData


    if (isFetchingProductsData || isLoadingProductsData) return <Loading />
    else if (isErrorProductsData || !isFetchedProductsData) return <ServerError/>
    else {
        return (
            <StyledBrands>
                <div className="brands_wrapper">
                    <div className="brands_image-container">
                        {renderBrandsClickableImages()?.map((el: BrandsFormInteractiveTypes) => {
                            const {id, frontendSlug, src, alt} = el
                            return (
                                <Link
                                    to={CONST?.routes?.productsRoute}
                                    className="brands_single-img-container"
                                    key={id}
                                    onClick={() => productsRouteDispatcher(null, null, frontendSlug, dispatch)}
                                >
                                    <img src={src} alt={frontendSlug}/>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="brands_letters-container">
                        {handleArraysToRender(productsData).uniqueLettersArr?.map((el: string) => {
                            return (
                                <div className="brands_single-letter-container"
                                     onClick={() => scrollToElement(el)}
                                >
                                    {el}
                                </div>
                            )
                        })}
                    </div>
                    <div className="brands_content-container">
                        {handleArraysToRender(productsData)?.uniqueLettersArr?.map((el: string) => {
                            return (
                                <div id={el} className="brands_letter-content-container">
                                    <div className="brands_single-letter-content">{el}</div>
                                    <span
                                        className="brands_title-qty-container">{handleArraysToRender(productsData)?.ascSortedUniqueBrands?.map((item: ProductsDataBrandTypes) => {
                                        const {brandTitle, brandSlug} = item
                                        if (brandTitle[0] === el) return (
                                            <Link
                                                to={CONST?.routes?.productsRoute}
                                                onClick={() => productsRouteDispatcher(null, null, brandSlug, dispatch)}
                                            >
                                                <span className="brands_single-title-qty-container">
                                                    <div className="brands_title">{brandTitle}</div>
                                                    <div
                                                className="brands_quantity">{handleProductQuantity(brandSlug, productsData)}</div>
                                                </span>
                                            </Link>
                                        )
                                    })}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </StyledBrands>
        )
    }
}

export default Brands
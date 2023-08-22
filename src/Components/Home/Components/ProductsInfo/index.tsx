import {FC, ReactElement, useState} from "react";
import * as React from "react";

import {StyledProductsInfo} from "./styledProductsInfo";

import {ProductsInfoFormDataTypes} from "./types";

import Previous from "../../../../Assets/angle-left.svg"
import Next from "../../../../Assets/angle-right.svg"

import {handleSlideChange, handleMaxStep, handleFilteredProductsByStep} from "./helpers";
import {productsRouteDispatcher} from "../../../../Utils/helpers";

import {useGetProductsInfoFormDataQuery} from "../../../../Redux/Slices/apiSlice";
import {useAppDispatch} from "../../../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import {Link} from "react-router-dom";

import {CONST} from "../../../../Utils/CONST";

import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";


const ProductsInfo: FC = (): ReactElement => {
    const dispatch:Dispatch = useAppDispatch()

    const {
        data: isFetchedProductsInfoFormdata,
        isFetching: isFetchingProductsInfoFormdata,
        isLoading: isLoadingProductsInfoFormdata,
        isError: isErrorProductsInfoFormdata
    } = useGetProductsInfoFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })

    const [currentStep, setCurrentStep] = useState<number>(1)

    const productsInfoFormData: ProductsInfoFormDataTypes[] = isFetchedProductsInfoFormdata


    if (isLoadingProductsInfoFormdata || isFetchingProductsInfoFormdata) return <Loading/>
    else if (isErrorProductsInfoFormdata || !isFetchedProductsInfoFormdata) return <ServerError/>
    else {
        return (
            <StyledProductsInfo>
                <div className="products_info-wrapper">
                    <div className="products_info-container">
                        <div className="products_info_container_arrow"
                             onClick={() => handleSlideChange(currentStep, setCurrentStep, handleMaxStep(productsInfoFormData) as number, "previous")}>
                            <Previous/>
                        </div>
                        <div className="products_info-container-content">
                            {handleFilteredProductsByStep(productsInfoFormData, currentStep)?.map((el: ProductsInfoFormDataTypes) => {
                                const {id, header, paragraphOne, paragraphTwo, frontendSlug, image} = el

                                return (
                                    <div key={id} className="products_info-content">
                                        <Link
                                            to={CONST?.routes?.productsRoute}
                                            onClick={() => productsRouteDispatcher(frontendSlug, null, null, dispatch)}
                                            className="products_info-content-img-container">
                                            <img src={image} alt={frontendSlug}/>
                                        </Link>
                                        <div className="products_info-content-container">
                                            <div className="products_info-content-title-container">
                                                <div className="products_info-content-title">{header}</div>
                                            </div>
                                            <div className="products_info-content-paragraph-container">
                                                <p className="products_info-content-paragraph-one">{paragraphOne}</p>
                                                <p className="products_info-content-paragraph-two">{paragraphTwo}</p>
                                            </div>
                                            <div className="products_info-content-button-container">
                                                <Link
                                                    to={CONST?.routes?.productsRoute}
                                                    onClick={() => productsRouteDispatcher(frontendSlug, null, null, dispatch)}
                                                >
                                                    <button className="products_info-content-button">
                                                        Click and check
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="products_info_container_arrow"
                             onClick={() => handleSlideChange(currentStep, setCurrentStep, handleMaxStep(productsInfoFormData) as number, "next")}>
                            <Next/>
                        </div>
                    </div>
                </div>
            </StyledProductsInfo>
        )
    }
}

export default ProductsInfo
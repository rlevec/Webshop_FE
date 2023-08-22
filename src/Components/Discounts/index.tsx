import {FC, ReactElement, useState} from "react";

import {useGetDiscountsFormDataQuery, useGetLocationsFormDataQuery} from "../../Redux/Slices/apiSlice";
import {useAppDispatch} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import {
    LocationFormDataTypes,
    LocationsFormDataDiscountTypes,
    SortedStateTypes,
    DiscountsFormDataTypes
} from "./types";

import {StyledDiscounts} from "./styledDiscounts";

import {Location, NavigateFunction, useLocation, Link, useParams, useNavigate} from "react-router-dom";

import {CONST} from "../../Utils/CONST";

import {productsRouteDispatcher} from "../../Utils/helpers";
import {
    handleSort,
    handleCarret,
    handleSortedArrayToRender,
    useHandleLocationDiscountRouteParamError,
    handleArrayToRender,
    handleExactPath
} from "./helpers";


import ServerError from "../../Pages/ServerError";
import Loading from "../../Pages/Loading";
import {BasicNavLinks} from "../../Shared/BasicNavLinks";

const Discounts: FC = (): ReactElement => {
    const dispatch: Dispatch = useAppDispatch()

    const location: Location = useLocation()

    const navigate: NavigateFunction = useNavigate()

    const paramRoute: string | undefined = useParams()?.route

    const {
        data: isFetchedLocationsFormData,
        isFetching: isFetchingLocationsFormData,
        isLoading: isLoadingLocationsFormData,
        isError: isErrorLocationsFormData
    } = useGetLocationsFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const {
        data: isFetchedDiscountsFormData,
        isFetching: isFetchingDiscountsFormData,
        isLoading: isLoadingDiscountsFormData,
        isError: isErrorDiscountsFormData
    } = useGetDiscountsFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const [sorted, setSorted] = useState<SortedStateTypes>({
        brand: "asc",
        percent: "asc",
    })

    const [sortActive, setSortActive] = useState<string>("")

    const locationsFormData: LocationFormDataTypes = isFetchedLocationsFormData

    const discountsFormData: DiscountsFormDataTypes = isFetchedDiscountsFormData


    useHandleLocationDiscountRouteParamError(paramRoute as string, locationsFormData, navigate)

    if (isFetchingLocationsFormData || isFetchingDiscountsFormData || isLoadingLocationsFormData || isLoadingDiscountsFormData) return <Loading/>
    else if (isErrorLocationsFormData || isErrorDiscountsFormData || !isFetchedLocationsFormData || !isFetchedDiscountsFormData) return <ServerError/>
    else {
        return (
            <StyledDiscounts className="styledComponent-Discounts">
                <div className="discounts_wrapper">
                    <BasicNavLinks/>
                    <div className="discounts_header-container">
                        <div className="discounts_header-title">{discountsFormData?.headerTitle}</div>
                        <div className="discounts_header-paragraph"><span
                            className="discounts_header-span-one">{discountsFormData?.headerParagraphOne}:</span>
                            <span
                                className="discounts_header-span-two">{handleArrayToRender(locationsFormData, handleExactPath(location))?.startDate} - {handleArrayToRender(locationsFormData, handleExactPath(location))?.endDate}</span>
                        </div>
                        <div className="discounts_header-paragraph"><span
                            className="discounts_header-span-one">{discountsFormData?.headerSpanOne}:</span> <span
                            className="discounts_header-span-two">{handleArrayToRender(locationsFormData, handleExactPath(location))?.cityLocation}</span>
                        </div>
                        <div className="discounts_header-paragraph"><span
                            className="discounts_header-span-one">{discountsFormData?.headerSpanTwo}:</span> <span
                            className="discounts_header-span-two">{handleArrayToRender(locationsFormData, handleExactPath(location))?.locationTitle}</span>
                        </div>
                        <div className="discounts_header-paragraph"><span
                            className="discounts_header-span-one">{discountsFormData?.headerParagraphTwo}:</span>
                            <span className="discounts_header-span-two">{locationsFormData?.locationsWorkTime}</span>
                        </div>
                        <div className="discounts_header-paragraph"><span
                            className="discounts_header-span-one">{discountsFormData?.headerSpanThree}:</span>
                            <span className="discounts_header-span-two">{locationsFormData?.locationsPhoneNumber}</span>
                        </div>
                        <div className="discounts_header-warning"><span
                            className="discount_header-warning-span-one">*</span> <span
                            className="discount_header-warning-span-two">{discountsFormData?.warningSpanOne}</span>
                        </div>
                        <div className="discounts_header-warning"><span
                            className="discount_header-warning-span-one">*</span> <span
                            className="discount_header-warning-span-two">{discountsFormData?.warningSpanTwo}</span>
                        </div>
                        <div className="discounts_header-underline">{discountsFormData?.headerParagraphThree}</div>
                    </div>
                    <div className="table_container">
                        <div className="table_columns-container">
                            {handleArrayToRender(locationsFormData, handleExactPath(location))?.columns?.map((el: string, idx: number) => {
                                return (
                                    <div className="table_single-column-container" key={idx}>
                                        {el}
                                        {el !== "Start" && el !== "End" ? (
                                            <div
                                                className="table_single-column-carret-icon"
                                                onClick={() => handleSort(el, sorted, setSortActive, setSorted)}
                                            >
                                                {handleCarret(el, sorted)}
                                            </div>
                                        ) : null}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="table_rows-container">
                            {handleSortedArrayToRender(sortActive, sorted, locationsFormData, handleExactPath(location)).map((el: LocationsFormDataDiscountTypes) => {
                                const {id, brandSlug, brandTitle, percent, startDate, endDate} = el

                                return (
                                    <Link
                                        to={CONST?.routes?.productsRoute}
                                        onClick={() => productsRouteDispatcher(null, null, brandSlug, dispatch)}
                                        className="table_single-row-container"
                                        key={id}
                                    >
                                        <div className="table_single-row-content">{brandTitle}</div>
                                        <div className="table_single-row-content">{`${percent}%`}</div>
                                        <div className="table_single-row-content">{startDate}</div>
                                        <div className="table_single-row-content">{endDate}</div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </StyledDiscounts>
        )
    }
}

export default Discounts
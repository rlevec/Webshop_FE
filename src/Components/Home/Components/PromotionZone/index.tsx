import {FC, ReactElement} from "react";

import {StyledPromotionZone} from "./styledPromotionZone";

import {PromotionZoneFormDataTypes} from "./types";

import {useGetPromotionZoneFormDataQuery} from "../../../../Redux/Slices/apiSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../../../Redux/Store/store";

import {Link} from "react-router-dom";

import {CONST} from "../../../../Utils/CONST";

import {productsRouteDispatcher} from "../../../../Utils/helpers";

import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";

const PromotionZone:FC = (): ReactElement => {
    const dispatch:Dispatch = useAppDispatch()

    const {
        data: isFetchedPromotionZoneFormData,
        isFetching: isFetchingPromotionZoneFormData,
        isLoading: isLoadingPromotionZoneFormData,
        isError: isErrorPromotionZoneFormData
    } = useGetPromotionZoneFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })

    const promotionZoneFormData:PromotionZoneFormDataTypes[] = isFetchedPromotionZoneFormData


    if(isFetchingPromotionZoneFormData ||isLoadingPromotionZoneFormData) return <Loading/>
    else if(isErrorPromotionZoneFormData || !isFetchedPromotionZoneFormData) return <ServerError/>
    else {
        return (
            <StyledPromotionZone>
                <div className="promotion_zone_wrapper">
                    <div className="promotion_zone_container">
                        {promotionZoneFormData?.map((el: PromotionZoneFormDataTypes) => {
                            const {id, description, frontendSlug, image} = el
                            return (
                                <Link
                                    to={CONST?.routes?.productsRoute}
                                    onClick={() => productsRouteDispatcher(null, null, frontendSlug, dispatch)}
                                    className={`promotion_zone_image-container content-${id}`}
                                    key={id}>
                                    <img className={`image-${id}`} src={image} alt={frontendSlug}/>
                                    <div className="promotion_zone_description-container">
                                        <div>{description}</div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </StyledPromotionZone>
        )
    }
}

export default PromotionZone
import {FC, ReactElement, useState} from "react";

import {StyledPromotions} from "./styledPromotions";

import {
    handleSlideChange,
    useHandleSlideTimeout,
    handleMaxOrderValue,
    handleFilteredSlide
} from "./helpers";

import Next from "../../../../Assets/angle-right.svg"
import Previous from "../../../../Assets/angle-left.svg"

import {PromotionsFormDataTypes} from "./types";

import {useGetPromotionsFormDataQuery} from "../../../../Redux/Slices/apiSlice";
import {useAppDispatch} from "../../../../Redux/Store/store";
import {productsRouteDispatcher} from "../../../../Utils/helpers";
import {Dispatch} from "@reduxjs/toolkit";

import {CONST} from "../../../../Utils/CONST";

import {Link} from "react-router-dom";

import ServerError from "../../../../Pages/ServerError";
import Loading from "../../../../Pages/Loading";

const Promotions: FC = (): ReactElement => {
    const {
        data: isFetchedPromotionsFormData,
        isFetching: isFetchingPromotionsFormData,
        isLoading: isLoadingPromotionsFormData,
        isError: isErrorPromotionsFormData
    } = useGetPromotionsFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })

    const [currentSlide, setCurrentSlide] = useState<number>(1)

    const dispatch: Dispatch = useAppDispatch()


    const promotionsFormData: PromotionsFormDataTypes[] = isFetchedPromotionsFormData


    useHandleSlideTimeout(currentSlide, setCurrentSlide, handleMaxOrderValue(promotionsFormData) as number)


    if (isFetchingPromotionsFormData || isLoadingPromotionsFormData) return <Loading/>
    else if (isErrorPromotionsFormData || !isFetchedPromotionsFormData) return <ServerError/>
    else {
        return (
            <StyledPromotions className="styledComponent-Promotions">
                <div className="promotions_wrapper">
                    <div className="promotions_container">
                        <div className="promotions_arrow-container"
                             onClick={() => handleSlideChange(currentSlide, setCurrentSlide, handleMaxOrderValue(promotionsFormData) as number, "previous")}>
                            <Previous/>
                        </div>
                        <div className="promotions_image-content-container">
                            {handleFilteredSlide(promotionsFormData, currentSlide)?.map((el: PromotionsFormDataTypes) => {
                                const {frontendSlug, image} = el
                                return (
                                    <Link
                                        to={CONST?.routes?.productsRoute}
                                        className="promotions_image-container"
                                        key={frontendSlug}
                                        onClick={() => productsRouteDispatcher(null, null, frontendSlug, dispatch)}
                                    >
                                        <img
                                            src={image}
                                            alt={frontendSlug}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="promotions_arrow-container"
                             onClick={() => handleSlideChange(currentSlide, setCurrentSlide, handleMaxOrderValue(promotionsFormData) as number, "next")}>
                            <Next/>
                        </div>
                    </div>
                    <div className="promotions_slider-bar-wrapper">
                        <div className="promotions_slider-bar-container">
                            {promotionsFormData?.map((el: PromotionsFormDataTypes) => {
                                const {id} = el
                                return <div key={id} onClick={() => setCurrentSlide(id)}
                                            className={id === currentSlide ? `promotions_slider-single-bar active-${currentSlide}` : "promotions_slider-single-bar"}></div>
                            })}
                        </div>
                    </div>
                </div>
            </StyledPromotions>
        )
    }
}

export default Promotions
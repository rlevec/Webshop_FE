import {FC, ReactElement, useState} from "react";

import {StyledLocations} from "./styledLocations";

import Location from "../../../../Assets/location-pin.svg";

import {LocationTypes} from "./types";

import {useGetFooterLocationsFormDataQuery} from "../../../../Redux/Slices/apiSlice";
import {useAppDispatch} from "../../../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import {Link} from "react-router-dom";

import {CONST} from "../../../../Utils/CONST";

import {locationRouteDispatcher} from "../../../../Utils/helpers";

import ServerError from "../../../../Pages/ServerError";
import Loading from "../../../../Pages/Loading";

const Locations: FC = ():ReactElement => {
    const dispatch:Dispatch = useAppDispatch()

    const {
        data: isFetchedFooterLocationsFormData,
        isFetching: isFetchingFooterLocationsFormData,
        isLoading: isLoadingFooterLocationsFormData,
        isError: isErrorFooterLocationsFormData
    } = useGetFooterLocationsFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })


    const [hovered, setHovered] = useState<string>("")


    const locationsFooterFormData: LocationTypes[] = isFetchedFooterLocationsFormData


    if (isFetchingFooterLocationsFormData || isLoadingFooterLocationsFormData) return <Loading/>
    else if (isErrorFooterLocationsFormData || !isFetchedFooterLocationsFormData) return <ServerError/>
    else {
        return (
            <StyledLocations className="styledComponent-Locations">
                <div className="locations_wrapper">
                    <div className="locations_content-container">
                        {locationsFooterFormData?.map((el: LocationTypes) => {
                            const {id, title, frontendSlug} = el
                            return (
                                <Link
                                    to={CONST?.routes?.locationsRoute}
                                    onClick={() => locationRouteDispatcher(frontendSlug, dispatch)}
                                    className="locations_content-single-container"
                                    key={id}
                                     onMouseEnter={() => setHovered(frontendSlug)}
                                    onMouseLeave={() => setHovered("")}>
                                    <div className={frontendSlug === hovered ? `svg active-svg` : `svg`}><Location/>
                                    </div>
                                    <div
                                        className={frontendSlug === hovered ? `locations_content-single-title active` : `locations_content-single-title`}>{title}</div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </StyledLocations>
        )
    }

}

export default Locations
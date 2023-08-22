import React, {FC, ReactElement, useState} from "react";

import {StyledLocations} from "./styledLocations";

import {handleSliceChangeByActionTypes, handleSlicedArrayByDeviceType} from "./helpers";

import {
    LocationFormDataTypes,
    LocationFormDataAddressesTypes,
    LocationSliceStateTypes
} from "./types";

import LocationPin from "../../../../Assets/location-pin.svg"

import PreviousArrow from "../../../../Assets/angle-left.svg"
import NextArrow from "../../../../Assets/angle-right.svg"


import {Link} from "react-router-dom";

import {useGetLocationsFormDataQuery} from "../../../../Redux/Slices/apiSlice";

import ServerError from "../../../../Pages/ServerError";
import Loading from "../../../../Pages/Loading";

import {CONST} from "../../../../Utils/CONST";

import {useAppSelector} from "../../../../Redux/Store/store";


const Locations: FC = (): ReactElement => {
    const {
        data: isFetchedLocationsFormData,
        isFetching: isFetchingLocationsFormData,
        isLoading: isLoadingLocationsFormData,
        isError: isErrorLocationsFormData
    } = useGetLocationsFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})

    const deviceType = useAppSelector((state) => state?.device?.device)

    const initialSliceArgument: number = 5
    const tabletInitialSliceArgument: number = 2
    const phoneInitialSliceArgument: number = 1

    const [sliceValue, setSliceValue] = useState<LocationSliceStateTypes>({start: 0, end: initialSliceArgument})
    const [tabletSliceValue, setTabletSliceValue] = useState<LocationSliceStateTypes>({
        start: 0,
        end: tabletInitialSliceArgument
    })
    const [phoneSliceValue, setPhoneSliceValue] = useState<LocationSliceStateTypes>({
        start: 0,
        end: phoneInitialSliceArgument
    })

    const locationsFormData: LocationFormDataTypes = isFetchedLocationsFormData


    if (isFetchingLocationsFormData || isLoadingLocationsFormData) return <Loading/>
    else if (isErrorLocationsFormData || !isFetchedLocationsFormData) return <ServerError/>
    else {
        return (
            <StyledLocations className="styledComponent-Locations">
                <div className="locations_wrapper">
                    <div className="locations_content-arrow-container">
                        <div className="locations_arrow-container"
                             onClick={() => handleSliceChangeByActionTypes("previous", phoneSliceValue, setPhoneSliceValue, tabletSliceValue, setTabletSliceValue, sliceValue, setSliceValue, deviceType, locationsFormData, phoneInitialSliceArgument, tabletInitialSliceArgument, initialSliceArgument)}>
                            <PreviousArrow/>
                        </div>
                        <div className="locations_content-container">
                            {handleSlicedArrayByDeviceType(locationsFormData, phoneSliceValue, tabletSliceValue, deviceType, sliceValue).map((el: LocationFormDataAddressesTypes) => {
                                const {title, promotionStart, promotionEnd, frontendSlug, route} = el

                                return (
                                    <Link
                                        to={`${CONST?.routes?.discountsRoute}/${route}`}
                                        key={frontendSlug}
                                        onClick={() => window.scrollTo(0, 0)}
                                        className="locations_container">
                                        <LocationPin/>
                                        <div className="locations_title-date-container">
                                            <div className="locations_date">
                                                <div>{promotionStart}</div>
                                                <div>-</div>
                                                <div>{promotionEnd}</div>
                                            </div>
                                            <div className="locations_title">{title}</div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="locations_arrow-container"
                             onClick={() => handleSliceChangeByActionTypes("next", phoneSliceValue, setPhoneSliceValue, tabletSliceValue, setTabletSliceValue, sliceValue, setSliceValue, deviceType, locationsFormData, phoneInitialSliceArgument, tabletInitialSliceArgument, initialSliceArgument)}
                        >
                            <NextArrow/>
                        </div>
                    </div>
                </div>
            </StyledLocations>
        )
    }
}

export default Locations
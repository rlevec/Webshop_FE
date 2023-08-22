import {FC, ReactElement} from "react"

import {StyledLocation} from "./styledLocation";

import {LocationModalPropTypes, LocationFormDataLocationsTypes,LocationFormDataTypes} from "./types";

import {useAppDispatch} from "../../Redux/Store/store";
import {useGetLocationsFormDataQuery} from "../../Redux/Slices/apiSlice";
import {Dispatch} from "@reduxjs/toolkit";

import {Link} from "react-router-dom";

import {CONST} from "../../Utils/CONST";

import {locationRouteDispatcher, productsRouteDispatcher} from "../../Utils/helpers";

import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";

export const Location: FC<LocationModalPropTypes> = (props): ReactElement => {
    const {modalActive, setModalActive} = props

    const dispatch:Dispatch = useAppDispatch()

    const {
        data: isFetchedLocationsFormData,
        isFetching: isFetchingLocationsFormData,
        isLoading: isLoadingLocationsFormData,
        isError: isErrorLocationsFormData
    } = useGetLocationsFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})


    const locationsFormData: LocationFormDataTypes = isFetchedLocationsFormData

    if (isFetchingLocationsFormData || isLoadingLocationsFormData) return <Loading/>
    else if (isErrorLocationsFormData || !isFetchedLocationsFormData) return <ServerError/>
    else {
        return (
            <StyledLocation onMouseEnter={() => setModalActive({...modalActive, location: true})}
                            onMouseLeave={() => setModalActive({...modalActive, location: false})}>
                <div className="location_wrapper">
                    <div className="location_title-container">
                        <div className="location_title">{locationsFormData?.locationsTitle}</div>
                    </div>
                    <div className="location_content-icons-container">
                        <div className="location_content-container">
                            {locationsFormData?.locations?.map((el: LocationFormDataLocationsTypes) => {
                                const {id, city, frontendSlug, stores} = el

                                return (
                                    <div className="location_content">
                                        <Link
                                            onClick={() => {
                                                productsRouteDispatcher(null, null, null, dispatch);
                                                locationRouteDispatcher(frontendSlug, dispatch)
                                                setModalActive({...modalActive, location: false})
                                            }}
                                            to={CONST?.routes?.locationsRoute}
                                            className="location_content-city"
                                            key={id}
                                        >{city}</Link>
                                        <div className="location_content-stores">{stores}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </StyledLocation>
        )
    }
}

export default Location
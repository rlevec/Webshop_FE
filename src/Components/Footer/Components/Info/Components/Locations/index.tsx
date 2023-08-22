import {FC, ReactElement, useRef, useState} from "react";
import React from "react";

import {StyledLocations} from "./styledLocations";

import PharmacyStore from "../../../../../../Assets/images/pharmacy_store.jpeg"
import LocationPin from "../../../../../../Assets/location-pin.svg"
import Clock from "../../../../../../Assets/clock.svg"
import Phone from "../../../../../../Assets/phone.svg"


import {useGetLocationsFormDataQuery} from "../../../../../../Redux/Slices/apiSlice";

import {scrollToRef, handleIcon, handleInlineStyles, useHandleLocationSelected} from "./helpers";

import {LocationFormDataTypes, LocationFormDataLocationsTypes, LocationFormDataAddressesTypes} from "./types";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";

import {Link} from "react-router-dom";

import {useAppSelector} from "../../../../../../Redux/Store/store";

import {CONST} from "../../../../../../Utils/CONST";


const Locations: FC = (): ReactElement => {
    const {
        data: isFetchedLocationsFormData,
        isFetching: isFetchingLocationsFormData,
        isLoading: isLoadingLocationsFormData,
        isError: isErrorLocationsFormData
    } = useGetLocationsFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const locationSelectedRedux: string = useAppSelector((state) => state?.selectedLocations?.locationSelected)

    const locationsFormData:LocationFormDataTypes = isFetchedLocationsFormData

    const [activeCity, setActiveCity] = useState<string | null>(null)
    const [hovered, setHovered] = useState<string>("")

    const accordionRef:React.RefObject<HTMLDivElement> = useRef(null);


    useHandleLocationSelected(locationSelectedRedux, setActiveCity, accordionRef)

    if(isFetchingLocationsFormData || isLoadingLocationsFormData) return <Loading/>
    else if(isErrorLocationsFormData || !isFetchedLocationsFormData) return <ServerError/>
    else {
        return (
            <StyledLocations>
                <BasicNavLinks />
                <div className="locations_wrapper">
                    <div className="locations_header-container">
                        {locationsFormData?.locations?.map((el: LocationFormDataLocationsTypes) => {
                            const {id, city, frontendSlug} = el

                            return (
                                <div key={id} className="locations_header-single-content"
                                     onMouseEnter={() => setHovered(frontendSlug)} onMouseLeave={() => setHovered("")}
                                     onClick={() => {
                                         if (activeCity === null) {
                                             setActiveCity(frontendSlug)
                                             scrollToRef(accordionRef)
                                         } else setActiveCity(null)
                                     }}>
                                    <div className={frontendSlug === hovered || frontendSlug === activeCity ? `active-pin` : `pin`}>
                                        <LocationPin/></div>
                                    <div
                                        className={frontendSlug === hovered || frontendSlug === activeCity ? `locations_header-title-active` : `locations_header-title`}>{city}</div>
                                </div>
                            )
                        })}
                    </div>
                    <img className="locations_pharmacy-image" src={PharmacyStore} alt="pharmacy"/>
                    <div className="locations_title">{locationsFormData?.locationsTitleAlt}</div>
                    <div className="locations_accordion-wrapper" ref={accordionRef}>
                        <div className="locations_accordion-container">
                            {locationsFormData?.locations?.map((el: LocationFormDataLocationsTypes) => {
                                const {id, frontendSlug, city, addresses} = el

                                return (
                                    <div className="locations_accordion-single-content-container" key={id}>
                                        <div className="locations_accordion-single-content-icon-title-container">
                                            <div className="locations_accordion-single-content-icon-container"
                                                 onClick={(): void => {
                                                     if (activeCity === null) {
                                                         setActiveCity(frontendSlug)
                                                         scrollToRef(accordionRef)
                                                     } else {
                                                         setActiveCity(null)
                                                         scrollToRef(accordionRef)
                                                     }
                                                 }}>{handleIcon(frontendSlug, activeCity)}</div>
                                            <div className="locations_accordion-single-content-title-container">{city}</div>
                                        </div>
                                        <div className="locations_accordion-active-content-container"
                                             style={handleInlineStyles(activeCity, frontendSlug)}>
                                            {activeCity === frontendSlug && addresses?.map((el: LocationFormDataAddressesTypes) => {
                                                const {title, image, frontendSlug, route} = el
                                                return (
                                                    <Link
                                                          to={`${CONST?.routes?.discountsRoute}/${route}`}
                                                          onClick={() => window.scrollTo(0, 0)}
                                                          className="locations_accordion-single-content-container">
                                                        <div className="locations_accordion-single-content-image-container">
                                                            <img src={image} alt={frontendSlug}/></div>
                                                        <div
                                                            className="locations_accordion-single-content-icon-title-container">
                                                            <LocationPin/>
                                                            <p>{title}</p>
                                                        </div>
                                                        <div
                                                            className="locations_accordion-single-content-icon-title-container">
                                                            <Phone/>
                                                            <p>{locationsFormData?.locationsPhoneNumber}</p>
                                                        </div>
                                                        <div
                                                            className="locations_accordion-single-content-icon-title-container">
                                                            <Clock/>
                                                            <p>{locationsFormData?.locationsWorkTime}</p>
                                                        </div>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </StyledLocations>
        )
    }
}

export default Locations
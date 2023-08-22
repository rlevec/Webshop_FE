import {
    LocationFormDataAddressesTypes,
    LocationFormDataLocationsTypes,
    LocationsFormDataDiscountTypes,
    FunctionReturnTypes,
    LocationFormDataTypes, SortedStateTypes
} from "./types";

import {ReactElement, useCallback, useEffect} from "react";

import CarretDown from "../../Assets/carret-down.svg";
import CarretUp from "../../Assets/carret-up.svg";

import {Location, NavigateFunction} from "react-router-dom";

import {CONST} from "../../Utils/CONST";


//render appropriate data based on the url path transformed by handleExactPath function
export const handleArrayToRender = (locationsFormData: LocationFormDataTypes, exactPath: string): FunctionReturnTypes => {
    let targetArray: LocationFormDataAddressesTypes[] = []

    let newLocationsFormData: LocationFormDataTypes = locationsFormData

    let cityLocation: string = ""

    let startDate: string = ""

    let endDate: string = ""

    newLocationsFormData.locations.forEach((el: LocationFormDataLocationsTypes): void => {
        const {addresses} = el

        addresses.forEach((item: LocationFormDataAddressesTypes) => {
            if (item?.route === exactPath) {
                targetArray?.push(item)
                cityLocation = el?.city
                startDate = item?.promotionStart
                endDate = item?.promotionEnd
            }
        })
    })


    let targetObject: LocationFormDataAddressesTypes = targetArray[0]

    let locationTitle: string = targetObject?.title

    let discountArray: LocationsFormDataDiscountTypes[] | [] = targetObject?.discount || []

    let columns: string[] = ["Brand", "Percent", "Start", "End"]

    return {discountArray, columns, locationTitle, cityLocation, startDate, endDate}
}


//handle desc/asc sort based on brand/discount columns
export const handleSort = (frontendSlug: string, sorted: SortedStateTypes, setSortActive: Function, setSorted: Function): void | null => {
    if (frontendSlug === "Brand") {
        setSortActive("Brand")
        if (sorted?.brand === "asc") setSorted({...sorted, brand: "desc"})
        else if (sorted?.brand === "desc") setSorted({...sorted, brand: "asc"})
        else return null
    } else if (frontendSlug === "Percent") {
        setSortActive("Percent")
        if (sorted?.percent === "asc") setSorted({...sorted, percent: "desc"})
        else if (sorted?.percent === "desc") setSorted({...sorted, percent: "asc"})
        else return null
    } else return null
}



//handle appropriate data after it has been sorted
export const handleSortedArrayToRender = (sortActive: string, sorted: SortedStateTypes, locationsFormData: LocationFormDataTypes, exactPath: string): LocationsFormDataDiscountTypes[] => {
    const discountArray: LocationsFormDataDiscountTypes[] | [] = handleArrayToRender(locationsFormData, exactPath)?.discountArray;


    if (sortActive === "Brand") {
        if (sorted?.brand === "asc") return [...discountArray].sort((a: LocationsFormDataDiscountTypes, b: LocationsFormDataDiscountTypes) => a?.brandTitle?.localeCompare(b?.brandTitle))
        else if (sorted?.brand === "desc") return [...discountArray]?.sort((a: LocationsFormDataDiscountTypes, b: LocationsFormDataDiscountTypes) => b?.brandTitle?.localeCompare(a?.brandTitle))
        else return []
    } else if (sortActive === "Percent") {
        if (sorted?.percent === "asc") return [...discountArray]?.sort((a: LocationsFormDataDiscountTypes, b: LocationsFormDataDiscountTypes) => a?.percent - b?.percent)
        else if (sorted?.percent === "desc") return [...discountArray].sort((a: LocationsFormDataDiscountTypes, b: LocationsFormDataDiscountTypes) => b.percent - a?.percent)
        else return []
    } else return [...discountArray]
}


//render carret based on the triggered asc/desc sorting metod
export const handleCarret = (frontendSlug: string, sorted: SortedStateTypes): ReactElement | null => {
    if (frontendSlug === "Brand") {
        if (sorted?.brand === "asc") return <CarretDown/>
        else if (sorted?.brand === "desc") return <CarretUp/>
        else return null
    } else if (frontendSlug === "Percent") {
        if (sorted?.percent === "asc") return <CarretDown/>
        else if (sorted?.percent === "desc") return <CarretUp/>
        else return null
    } else return null
}




//throw 404 page if dynamic route is not included in the extractedAllRoutes array
export const useHandleLocationDiscountRouteParamError = (paramRoute: string, locationsFormData: LocationFormDataTypes, navigate: NavigateFunction): void => {

    const HandleLocationDiscountRouteParamErrorCallback = useCallback(() => {
        if (paramRoute) {
            let extractedAllRoutes: string[] = []

            if(locationsFormData?.locations?.length) {
                locationsFormData?.locations.forEach((el: LocationFormDataLocationsTypes): void => {
                    const {addresses} = el

                    addresses.forEach((el: LocationFormDataAddressesTypes): void => {
                        const {route} = el

                        extractedAllRoutes?.push(route)
                    })
                })
            }

            if (extractedAllRoutes?.length && !extractedAllRoutes?.includes(paramRoute)) navigate(CONST?.routes?.invalidRoute, { replace: true })
        }
    }, [paramRoute])

    useEffect((): void => {
        HandleLocationDiscountRouteParamErrorCallback()
    }, [HandleLocationDiscountRouteParamErrorCallback])
}


//handle exact path to render appropriate data based on it
export const handleExactPath  = (location: Location): string => {
    const fullPath: string[] = location?.pathname?.split("/")

    const exactPath: string = fullPath[fullPath?.length - 1]

    return exactPath
}
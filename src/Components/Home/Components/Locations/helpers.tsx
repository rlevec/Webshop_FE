import {LocationSliceStateTypes, LocationFormDataAddressesTypes, LocationFormDataLocationsTypes, LocationFormDataTypes} from "./types";


//render sliced array based on the device type
export const handleSlicedArrayByDeviceType = (locationsFormData: LocationFormDataTypes, phoneSliceValue: LocationSliceStateTypes, tabletSliceValue: LocationSliceStateTypes, deviceType: string, sliceValue: LocationSliceStateTypes): LocationFormDataAddressesTypes[] => {
    if (deviceType === "phonePortrait") return handleLocationAddresses(locationsFormData)?.slice(phoneSliceValue?.start, phoneSliceValue.end)
    else if (deviceType === "tabletPortrait") return handleLocationAddresses(locationsFormData)?.slice(tabletSliceValue?.start, tabletSliceValue.end)
    else return handleLocationAddresses(locationsFormData)?.slice(sliceValue?.start, sliceValue.end)
}


//send parameters to sliceChange function based on the device type
export const handleSliceChangeByActionTypes = (
    type: string,
    phoneSliceValue: LocationSliceStateTypes,
    setPhoneSliceValue: Function,
    tabletSliceValue: LocationSliceStateTypes,
    setTabletSliceValue: Function,
    sliceValue: LocationSliceStateTypes,
    setSliceValue: Function,
    deviceType: string,
    locationsFormData: LocationFormDataTypes,
    phoneInitialSliceArgument: number,
    tabletInitialSliceArgument: number,
    initialSliceArgument: number
): void | null => {
    if (type === "previous") {
        if (deviceType === "phonePortrait") handleSliceChange(phoneSliceValue, setPhoneSliceValue, type, locationsFormData, phoneInitialSliceArgument)
        else if (deviceType === "tabletPortrait") handleSliceChange(tabletSliceValue, setTabletSliceValue, type, locationsFormData, tabletInitialSliceArgument)
        else handleSliceChange(sliceValue, setSliceValue, type, locationsFormData, initialSliceArgument)
    } else if (type === "next") {
        if (deviceType === "phonePortrait") handleSliceChange(phoneSliceValue, setPhoneSliceValue, type, locationsFormData, phoneInitialSliceArgument)
        else if (deviceType === "tabletPortrait") handleSliceChange(tabletSliceValue, setTabletSliceValue, type, locationsFormData, tabletInitialSliceArgument)
        else handleSliceChange(sliceValue, setSliceValue, type, locationsFormData, initialSliceArgument)
    } else return null
}


//handle array slice on each user action type on next/previous step
export const handleSliceChange = (sliceValue: LocationSliceStateTypes, setSliceValue: Function, type: string, locationFormData: LocationFormDataTypes, sliceArgument: number): void | null => {
    let array: LocationFormDataAddressesTypes[] = handleLocationAddresses(locationFormData)

    if (type === "previous") {
        if (sliceValue?.start === 0) return null
        else setSliceValue({
            ...sliceValue,
            start: sliceValue?.start - sliceArgument,
            end: sliceValue?.end - sliceArgument
        })
    } else if (type === "next") {
        if (array?.length <= sliceValue?.end) return null
        setSliceValue({...sliceValue, start: sliceValue?.start + sliceArgument, end: sliceValue?.end + sliceArgument})
    } else return null
}


//extract addresses array from the locationsFormData
export const handleLocationAddresses = (locationsFormData: LocationFormDataTypes): LocationFormDataAddressesTypes[] => {
    const addresses: LocationFormDataAddressesTypes[] = []

    const {locations} = locationsFormData

    locations?.forEach((el: LocationFormDataLocationsTypes): void => {
        el?.addresses?.forEach((item: LocationFormDataAddressesTypes): void => {
            addresses?.push(item)
        })
    })

    return addresses
}
import {CartItemsTypes, ProductsCategorizedTypes, SliceValueStateTypes} from "./types";


//render sliced array based on the device type
export const handleSlicedArrayByDeviceType = (products: ProductsCategorizedTypes[], deviceType: string, activeCategory: string, phoneSliceValue: SliceValueStateTypes, tabletSliceValue: SliceValueStateTypes, sliceValue: SliceValueStateTypes): ProductsCategorizedTypes[] | undefined => {
    if(deviceType === "phonePortrait") return products?.filter((el: ProductsCategorizedTypes) => el?.extraCategories?.includes(activeCategory))?.slice(phoneSliceValue?.start, phoneSliceValue?.end)
    else if(deviceType === "tabletPortrait") return products?.filter((el: ProductsCategorizedTypes) => el?.extraCategories?.includes(activeCategory))?.slice(tabletSliceValue?.start, tabletSliceValue?.end)
    else return products?.filter((el: ProductsCategorizedTypes) => el?.extraCategories?.includes(activeCategory))?.slice(sliceValue?.start, sliceValue?.end)
}

//send parameters to sliceChange function based on the device type
export const handleSliceChangeByActionTypes = (type: string, deviceType: string, phoneSliceValue: SliceValueStateTypes, setPhoneSliceValue: Function, tabletSliceValue: SliceValueStateTypes, setTabletSliceValue: Function, sliceValue: SliceValueStateTypes, setSliceValue: Function, arrayLimitIndex: number, phoneSliceStepArgument: number, tabletSliceStepArgument: number, sliceStepArgument: number): void | null => {
    if(type === "previous") {
        if(deviceType === "phonePortrait") handleSliceValue(type, phoneSliceValue, setPhoneSliceValue, arrayLimitIndex, phoneSliceStepArgument)
        else if(deviceType === "tabletPortrait") handleSliceValue(type, tabletSliceValue, setTabletSliceValue, arrayLimitIndex, tabletSliceStepArgument)
        else handleSliceValue(type, sliceValue, setSliceValue, arrayLimitIndex, sliceStepArgument)
    }
    else if(type === "next") {
        if (deviceType === "phonePortrait") handleSliceValue(type, phoneSliceValue, setPhoneSliceValue, arrayLimitIndex, phoneSliceStepArgument)
        else if(deviceType === "tabletPortrait") handleSliceValue(type, tabletSliceValue, setTabletSliceValue, arrayLimitIndex, tabletSliceStepArgument)
        else handleSliceValue(type, sliceValue, setSliceValue, arrayLimitIndex, sliceStepArgument)
    }
    else return null
}


//handle array slice on each user action type on next/previous step
export const handleSliceValue = (type: string, sliceValue: SliceValueStateTypes, setSliceValue: Function, arrayLimitIndex: number, sliceStepArgument: number): void | null => {
    if(type === "next") {
        if(sliceValue?.end === arrayLimitIndex) return null
        else setSliceValue({...sliceValue, start: sliceValue?.start + sliceStepArgument,  end: sliceValue?.end + sliceStepArgument})
    }
    else if(type === "previous") {
        if(sliceValue?.start === 0) return null
        else setSliceValue({...sliceValue, start: sliceValue?.start - sliceStepArgument,  end: sliceValue?.end - sliceStepArgument})
    }
    else return null
}

//handle quantity alteration for each product via redux state
export const handleQuantity = (frontendSlug: string, reduxStateCartItems: CartItemsTypes[]): number =>  reduxStateCartItems?.find((el: CartItemsTypes): boolean => el?.frontendSlug === frontendSlug)?.quantity || 1
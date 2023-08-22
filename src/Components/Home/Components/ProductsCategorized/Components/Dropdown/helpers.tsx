import {SliceValueStateTypes} from "../../types"


//reset filtered products slice index to 0 on category change based on the device type
export const handleIndexReset = (deviceType: string, slug: string, setActiveCategory: Function, setPhoneSliceValue: Function, phoneSliceValue: SliceValueStateTypes, setTabletSliceValue:Function, tabletSliceValue: SliceValueStateTypes, initialPhoneSliceArgument: number, initialTabletSliceArgument: number): void | null => {
    setActiveCategory(slug)
    if(deviceType === "tabletPortrait") setTabletSliceValue({...tabletSliceValue, start: 0, end: initialTabletSliceArgument})
    else if(deviceType === "phonePortrait") setPhoneSliceValue({...phoneSliceValue, start: 0, end: initialPhoneSliceArgument})
    else return null
}
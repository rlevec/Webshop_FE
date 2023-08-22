import {SliceValueStateTypes} from "../../types";

export const handleClassname = (slug: string, activeCategory: string): string | undefined => {
    if (slug === activeCategory) return "active"
    else return undefined
}

export const handleIndexReset = (slug: string, setActiveCategory: Function, setSliceValue: Function, sliceValue: SliceValueStateTypes, initialSliceArgument: number): void => {
    setActiveCategory(slug)
    setSliceValue({...sliceValue, start: 0, end: initialSliceArgument})
}
import {ProductsCategorizedButtonsFormDataFilterButtonTypes, SliceValueStateTypes} from "../../types";

export type DrodpdownPropTypes = {
    data: ProductsCategorizedButtonsFormDataFilterButtonTypes[]
    activeCategory: string,
    setActiveCategory: Function,
    tabletSliceValue: SliceValueStateTypes,
    setTabletSliceValue: Function,
    phoneSliceValue: SliceValueStateTypes,
    setPhoneSliceValue: Function,
    tabletSliceStepArgument: number,
    phoneSliceStepArgument: number
}
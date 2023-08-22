import {BlogFormDataTypes} from "../../types";

export type BlogFormDataContentPropTypes = {
    blogFormData: BlogFormDataTypes[],
    activeCategory: string,
    setActiveCategory: Function,
}
import {BlogFormDataTypes} from "../../types";

export type BlogFormDataDropdownPropTypes = {
    blogFormData: BlogFormDataTypes[],
    activeCategory: string,
    setActiveCategory: Function,
}
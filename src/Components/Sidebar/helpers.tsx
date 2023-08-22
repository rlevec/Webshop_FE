import {CategoriesModalFormDataTypes, CategoriesSubCategoriesModalFormDataTypes} from "./types";

//handle subCategory data to render based on the active category
export const handleSubCategoryActive = (categoriesModalFormData: CategoriesModalFormDataTypes[], categoryActive: string) => {
    const matchSubcategories: CategoriesSubCategoriesModalFormDataTypes[] | undefined = categoriesModalFormData?.find((el: CategoriesModalFormDataTypes): boolean => el?.categorySlug === categoryActive)?.subCategories
    return matchSubcategories
}


export type CategoriesModalPropTypes = {
    hovered: CategoriesModalHoveredStateTypes,
    setHovered: Function
}


export type CategoriesModalHoveredStateTypes = {
    cosmetics: boolean,
    selfHealing: boolean,
    brands: boolean,
    covid: boolean,
    momKids: boolean,
    foodSupplements: boolean,
    medicalAids: boolean
}


type ProductsDescriptionTypes = {
    paragraphOne: string,
    paragraphTwo: string
}

export type ProductsTypes = {
    id: number | null,
    frontendSlug: string,
    title: string,
    amount: number,
    discountAmount: number | null,
    quantity: number | null,
    description: ProductsDescriptionTypes
    categorySlug: string,
    categoryTitle: string,
    subCategorySlug: string,
    subCategoryTitle: string,
    extraCategories: string[],
    image: string,
    brand: string,
    brandTitle: string,
    route: string
}



export type BrandLogoImagesDataTypes = {
    id: number,
    frontendSlug: string,
    image: string
}


export type CategoriesSubCategoriesModalFormDataTypes = {
    id: number,
    subCategorySlug: string,
    subCategoryImage: string,
    subCategoryTitle: string
}

export type CategoriesModalFormDataTypes = {
    id: number,
    categorySlug: string,
    categoryImagePrimary: string,
    categoryImageSecondary: string
    subCategories: CategoriesSubCategoriesModalFormDataTypes[]
}
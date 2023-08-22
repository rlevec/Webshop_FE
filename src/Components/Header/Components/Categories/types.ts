export type CategoriesHoveredStateTypes = {
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

export type ProductsCategoriesTypes = {
    categorySlug: string,
    categoryTitle: string
}


export type BrandsFormInteractiveTypes = {
    id: number,
    frontendSlug: string,
    src: string,
    alt: string,
    order: number
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

export type ProductsDataBrandTypes = {
    brandSlug: string,
    brandTitle: string
}


export type FunctionReturnTypes = {
    ascSortedUniqueBrands: ProductsDataBrandTypes[],
    uniqueLettersArr: string[]
}

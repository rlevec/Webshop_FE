
export type HeaderFormModalTypes = {
    id: number,
    frontendSlug: string,
    title: string,
}

export type HeaderFormSearchInputTypes = {
    id: number,
    frontendSlug: string,
    name: string,
    placeholder: string,
    error: string,
    type: string
}

type HeaderFormSearchTypes = {
    placeholder: string,
    input: HeaderFormSearchInputTypes,
}

export type HeaderFormDataTypes = {
    searchInput: HeaderFormSearchTypes,
    modals: HeaderFormModalTypes[],
}


export type ModalActiveStateTypes = {
    help: boolean,
    location: boolean,
    profile: boolean,
    wish: boolean,
    cart: boolean
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
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

export type ModalActiveStateTypes = {
    help?: boolean,
    location?: boolean,
    profile: boolean,
    wish: boolean,
    cart: boolean,
    sidebar?: boolean,
    search: boolean
}

export type SearchPropTypes = {
    searchQuery?: string,
    filteredProducts?: (ProductsTypes | undefined)[] | undefined | any[],
    setSearchModalActive?: Function,
    setSearchQuery?: Function,
    modalActive?:  ModalActiveStateTypes
    setModalActive?: Function
}

export type CategoriesSubCategoriesModalFormDataTypes = {
    id: number,
    subCategorySlug: string,
    subCategoryImage: string,
    subCategoryTitle: string
}

export type CategoriesModalFormDataTypes = {
    id: number,
    categorySlug: string,
    categoryTitle: string,
    categoryImagePrimary: string,
    categoryImageSecondary: string
    subCategories: CategoriesSubCategoriesModalFormDataTypes[]
}

export type BrandLogoImagesDataTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    image: string
}

export type ModalActivePropTypes = {
    profile: boolean,
    wish: boolean,
    cart: boolean,
    sidebar: boolean
}


export type SidbearPropTypes = {
    setModalActive: Function
    modalActive: ModalActivePropTypes,
}


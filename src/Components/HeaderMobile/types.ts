import {ReactElement} from "react";

export type HeaderMobileStaticDataLogoTypes = {
    image: string,
    alt: string
}

export type HeaderMobileStaticDataContentTypes = {
    id: number,
    element: ReactElement,
    alt: string,
    parentClassName: string,
    order: number,
    frontendSlug: string,
}


export type HeaderMobileStaticDataTypes = {
    logo: HeaderMobileStaticDataLogoTypes,
    content: HeaderMobileStaticDataContentTypes[]
}

type DescriptionTitleTypes = {
    paragraphOne: string,
    paragraphTwo: string
}


type ProductsDescriptionTypes = {
    title: DescriptionTitleTypes[]

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
    purchaseAmount: number | null,
    brand: string,
    brandTitle: string,
    route: string
}


export type ModalActiveStateTypes = {
    profile: boolean,
    wish: boolean,
    cart: boolean,
    sidebar: boolean,
    search: boolean
}
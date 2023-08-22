export type ModalActiveStateTypes = {
    help?: boolean,
    location?: boolean,
    profile: boolean,
    wish: boolean,
    cart: boolean
    sidebar?: boolean,
}

export type CartModalPropTypes =  {
    modalActive: ModalActiveStateTypes,
    setModalActive: Function,
}

export type CartFormDataPopulatedCouponInputTypes = {
    placeholder: string
}

export type CartFormDataPopulatedColumnsTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    order: number
}



export type CartFormDataPopulatedTypes = {
    cartColumns: CartFormDataPopulatedColumnsTypes[],
    couponTitle: string,
    couponInput: CartFormDataPopulatedCouponInputTypes,
    couponButtonTitle: string,
    priceTitle: string,
    discountTitle: string,
    totalTitle: string,
    finishButtonTitlte: string,
    continueButtonTitle: string,
}

export type CartFormDataTypes = {
    header: string,
    frontendSlug: string,
    emptyTitle: string,
    emptyWarningOne: string,
    emptyWarningTwo: string,
    emptyWarningThree: string,
    priceTitle: string,
    quantityTitle: string,
    deliveryTitle: string,
    totalTitle: string,
    cartButtonTitle: string,
    populated: CartFormDataPopulatedTypes
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


export type CartItemsTypes = {
    frontendSlug: string;
    title: string;
    image: string;
    quantity?: number;
    inCart?: boolean | null;
    price?: null;
};



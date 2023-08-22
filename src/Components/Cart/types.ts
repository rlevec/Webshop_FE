
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

export type CartItemsTypes = {
    frontendSlug: string;
    title: string;
    image: string;
    quantity?: number;
    inCart?: boolean | null;
    price?: null;
};


export type TransactionDataPurchasePrdouctsTypes = {
    productTitle: string,
    productQuantity: number
}



export type TransactionDataPurchaseTypes = {
    products: TransactionDataPurchasePrdouctsTypes[],
    totalPrice: string
}

export type TransactionDataTypes = {
    email: string,
    firstName:string,
    lastName: string,
    city:string,
    zip: string,
    address: string,
    creditCard: string,
    ccv: string,
    country: string,
    expireYear: string,
    expireMonth: string,
    purchase: TransactionDataPurchaseTypes
}
export type TransactionPropTypes = {
    setTransactionModalActive: Function,
    totalPrice: string
}

export type TransactionModalFormDataInputTypes = {
    error: string,
    frontendSlug: string,
    id: number,
    label: string,
    name: string,
    placeholder: string,
    type: string,
    validation: string,
    min?: number,
    max?: number
}


export type TransactionModalFormDataTypes = {
    deliveryParagraphOne: string,
    deliveryParagraphTwo: string,
    deliveryParagraphThree: string,
    inputs: TransactionModalFormDataInputTypes[],
    registerAndLoginParagraphSeven: string,
    registerAndLoginParagraphSix: string,
    registerAndLoginParagraphFive: string,
    registerAndLoginParagraphFour: string,
    registerAndLoginParagraphOne: string,
    registerAndLoginParagraphThree: string,
    registerAndLoginParagraphTwo: string,
    title: string,
    transactionButtonLabel: string,
    warningParagraphOne: string,
    warningParagraphTwo: string,
}


export type TransactionModalQueryStateTypes = {
    email: string,
    firstName: string,
    lastName: string,
    country: string,
    city: string,
    zip: string,
    address: string,
    creditCard: string,
    expireMonth: string,
    expireYear: string,
    ccv: string
}

export type TransactionModalFieldErrorStateTypes = {
    email: boolean,
    firstName: boolean,
    lastName: boolean,
    country: boolean,
    city: boolean,
    zip: boolean,
    address: boolean,
    creditCard: boolean,
    expireMonth: boolean,
    expireYear: boolean,
    ccv: boolean,
}

export type CartItemsTypes = {
    frontendSlug: string,
    image: string,
    inCart?: boolean,
    quantity: number,
    title: string,
}

export type CartItemsToPostTypes = {
    productTitle: string,
    productQuantity: number,
}

export type TransactionPostTypes = {
    products: CartItemsToPostTypes[],
    totalPrice: string,
}


export type TransactionDataToPostTypes = {
    purchase: TransactionPostTypes
}


export type LoggedUserDataTypes = {
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    country: string,
    city: string,
    zip: string,
    address: string,
    creditCard: string,
    expireMonth: number,
    expireYear: number,
    ccv: string
}

export type ChangeCreditCardInputFormDataTypes = {
    id: number,
    label: string,
    frontendSlug: string,
    name: string,
    type: string,
    placeholder: string,
    min?: number,
    max?: number,
    validation: string,
    error: string,
}




export type ChangeCreditCardFormDataTypes = {
    formLabel: string,
    inputs: ChangeCreditCardInputFormDataTypes[],
    submitButtonLabel: string,
    backButtonLabel: string,
}


export type ChangeCreditCardFieldErrorStateTypes = {
    newCreditCard: boolean,
    newCcv: boolean,
    newExpireMonth: boolean,
    newExpireYear: boolean
}


export type ChangeCreditCardQueryStateTypes = {
    newCreditCard: string,
    newCcv: string,
    newExpireMonth: string,
    newExpireYear: string
}


export type ChangeCreditCardPropTypes = {
    setActiveComponent: Function
}

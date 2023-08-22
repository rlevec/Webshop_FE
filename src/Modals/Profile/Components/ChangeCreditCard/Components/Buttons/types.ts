import {ChangeCreditCardFieldErrorStateTypes, ChangeCreditCardQueryStateTypes} from "../../types";

export type ChangeCreditCartButtonPropTypes = {
    setActiveComponent: Function,
    backButtonLabel: string,
    fieldError: ChangeCreditCardFieldErrorStateTypes,
    query: ChangeCreditCardQueryStateTypes
    submitButtonLabel: string
}
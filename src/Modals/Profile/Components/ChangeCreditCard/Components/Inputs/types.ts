import {ChangeCreditCardFieldErrorStateTypes, ChangeCreditCardQueryStateTypes} from "../../types";

export type ChangeCreditCardInputPropTypes = {
    frontendSlug: string,
    placeholder: string,
    validation: string,
    error: string,
    type: string,
    name: string,
    label: string,
    min: number,
    max: number,
    query: ChangeCreditCardQueryStateTypes,
    fieldError: ChangeCreditCardFieldErrorStateTypes,
    setQuery: Function,
    setFieldError: Function,
}
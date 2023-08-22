import {LoginFieldErrorStateTypes, LoginQueryStateTypes} from "../../types";

export type LoginInputsProps = {
    frontendSlug: string,
    type: string,
    placeholder: string,
    query: LoginQueryStateTypes,
    fieldError: LoginFieldErrorStateTypes,
    validation: string,
    name: string,
    setQuery: Function,
    setFieldError: Function,
    error: string
}

export type LoginShowPasswordTypeStateTypes = {
    password: string
}
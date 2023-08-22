import {RegistrationFieldErrorStateTypes, RegistrationQueryStateTypes} from "../../../types";

export type RegularPropTypes = {
    query: RegistrationQueryStateTypes,
    frontendSlug: string,
    setQuery: Function,
    fieldError: RegistrationFieldErrorStateTypes,
    setFieldError: Function,
    validation: string,
    placeholder: string,
    min: string,
    max: string
    type: string,
    name: string,
    error: string,
    fieldExampleData: string
}
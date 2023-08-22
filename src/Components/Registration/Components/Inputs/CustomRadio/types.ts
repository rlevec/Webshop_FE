import {RegistrationFieldErrorStateTypes, RegistrationQueryStateTypes} from "../../../types";

export type CustomRadioPropTypes = {
    frontendSlug: string,
    query: RegistrationQueryStateTypes,
    setQuery: Function,
    error: string,
    fieldError: RegistrationFieldErrorStateTypes,
    options: string[] | number[]
}
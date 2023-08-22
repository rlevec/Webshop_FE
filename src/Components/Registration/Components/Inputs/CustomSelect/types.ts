import {
    RegistrationFieldErrorStateTypes,
    RegistrationQueryStateTypes,
    RegistrationSelectDropdownInputStateTypes
} from "../../../types";

export type CustomSelectPropTypes = {
    frontendSlug: string,
    dropdownActive: RegistrationSelectDropdownInputStateTypes,
    setDropdownActive: Function,
    query: RegistrationQueryStateTypes,
    placeholder: string,
    error: string,
    fieldError: RegistrationFieldErrorStateTypes,
    options: string[] | number[],
    setQuery: Function,
}
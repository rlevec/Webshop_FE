import {ChangePasswordFormFieldErrorStateTypes, ChangePasswordFormQueryStateTypes} from "../../types";

export type ChangePasswordInputsPropTypes = {
    placeholder: string,
    frontendSlug: string,
    query: ChangePasswordFormQueryStateTypes,
    fieldError: ChangePasswordFormFieldErrorStateTypes,
    setQuery: Function,
    setFieldError: Function,
    validation: string
    type: string,
    name: string,
    error: string,
}

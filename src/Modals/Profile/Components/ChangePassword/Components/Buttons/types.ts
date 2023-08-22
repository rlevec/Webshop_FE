import {ChangePasswordFormDataTypes, ChangePasswordFormFieldErrorStateTypes, ChangePasswordFormQueryStateTypes} from "../../types";

export type ChangePasswordButtonsPropTypes = {
    setActiveComponent: Function,
    changePasswordFormData: ChangePasswordFormDataTypes,
    fieldError:ChangePasswordFormFieldErrorStateTypes,
    query: ChangePasswordFormQueryStateTypes
}
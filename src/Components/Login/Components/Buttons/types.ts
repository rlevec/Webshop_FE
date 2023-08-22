import {LoginFieldErrorStateTypes, LoginQueryStateTypes, LoginSubmitErrorStateTypes} from "../../types";

export type LoginButtonsProps = {
    setForgotPasswordActive: Function,
    forgotPasswordLabelOne: string,
    forgotPasswordLabelTwo: string,
    fieldError: LoginFieldErrorStateTypes,
    query: LoginQueryStateTypes,
    setSubmitError: Function,
    submitError: LoginSubmitErrorStateTypes,
    setQuery: Function,
    buttonLabel: string
}
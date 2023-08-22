import {RegistrationFieldErrorStateTypes, RegistrationQueryStateTypes, RegistrationSubmitErrorTypes} from "../../types";

export type RegistrationButtonsPropTypes = {
    currentStep: number,
    minStep: number,
    maxStep: number,
    setCurrentStep: Function,
    previousButtonLabel: string,
    query: RegistrationQueryStateTypes,
    nextButtonLabel: string,
    termsAccepted: boolean,
    fieldError: RegistrationFieldErrorStateTypes,
    setSubmitError: Function,
    submitError: RegistrationSubmitErrorTypes,
    setQuery: Function,
    singUpButtonLabel: string
}
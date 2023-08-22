import {ReactElement} from "react";

import * as React from "react";

import {
    HandleStepValuesReturnTypes,
    RegistrationFormDataInputTypes,
    RegistrationFormDataTypes,
    RegistrationSubmitErrorTypes,
} from "./types";


//handle registration submit form error if user already registered with the provided email on BE
export const renderRegistrationSubmitError = (submitError: RegistrationSubmitErrorTypes, registrationFormData: RegistrationFormDataTypes): ReactElement | null => {
    if (submitError?.emailError) return <div className="submit-error">{registrationFormData?.existsError}</div>
    else return null
}


//render inputs based on the current step value
export const handleStepValues = (registrationFormData: RegistrationFormDataTypes, currentStep: number): HandleStepValuesReturnTypes => {
    const steps: (number | undefined)[] | undefined = registrationFormData?.inputs?.map((el: RegistrationFormDataInputTypes) => el?.step)

    const uniqueSteps: (number | undefined)[] = [...new Set(steps)]

    let maxStep: number | undefined = Math.max(...uniqueSteps as [])

    let minStep: number | undefined = 1

    let inputsByStep: RegistrationFormDataInputTypes[] = registrationFormData?.inputs?.filter((el: RegistrationFormDataInputTypes): boolean => el?.step === currentStep)

    return {minStep, maxStep, inputsByStep}
}
















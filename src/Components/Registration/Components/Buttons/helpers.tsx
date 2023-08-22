import {
    RegistrationFieldErrorStateTypes, RegistrationFormDataTypes,
    RegistrationQueryStateTypes,
    RegistrationRegisteredUsersTypes, RegistrationSubmitErrorTypes
} from "../../types";
import {RegistrationFormDataInputTypes} from "../../types";

import {NavigateFunction} from "react-router-dom";

import {CONST} from "../../../../Utils/CONST";

export function handleRegistrationCurrentStep(currentStep: number, setCurrentStep: Function, type: string, maxStep: number | null,): void | null {
    if (type === "previous") {
        if (currentStep === 1) return null
        else setCurrentStep(currentStep - 1)
    } else if (type === "next") {
        if (currentStep === maxStep) return null
        else setCurrentStep(currentStep + 1)
    } else return null
}



//handle button disable/enable based on the fieldError and query state values for each step value
export const handleRegistrationDisabledByStep = (fieldError: RegistrationFieldErrorStateTypes, currentStep: number, query: RegistrationQueryStateTypes, registrationFormData: RegistrationFormDataTypes): boolean => {
    let inputDataByStep: RegistrationFormDataInputTypes[] = registrationFormData?.inputs?.filter((el: RegistrationFormDataInputTypes) => el?.step === currentStep)
    let fieldErrorValuesByStep: boolean[] = []
    let queryValuesByStep: string[] = []
    Object.entries(fieldError)?.forEach(([key, val]): void => {
        inputDataByStep?.forEach((el: RegistrationFormDataInputTypes): void => {
            const {frontendSlug} = el
            if (frontendSlug === key) fieldErrorValuesByStep.push(val)
        })
    })
    Object.entries(query)?.forEach(([key, val]): void => {
        inputDataByStep?.forEach((el: RegistrationFormDataInputTypes): void => {
            const {frontendSlug} = el
            if (frontendSlug === key) queryValuesByStep.push(val)
        })
    })
    if (fieldErrorValuesByStep?.includes(true) || queryValuesByStep?.some((el) => el === "")) return true
    else return false
}



//if user already registered on the BE registeredUsersData endpoint return null
//else submit registration data to the BE registeredUsersData endpoint
export const handleRegistrationSubmit = (
    registeredUsers: RegistrationRegisteredUsersTypes[],
    query: RegistrationQueryStateTypes,
    setSubmitError: Function,
    submitError: RegistrationSubmitErrorTypes,
    setQuery: Function,
    setCurrentStep: Function,
    postRegistrationData: Function,
    navigate: NavigateFunction
): void | null => {
    let registeredUserObj: RegistrationRegisteredUsersTypes | undefined = registeredUsers?.find((el: RegistrationRegisteredUsersTypes) => el?.email === query?.email)

    let userExists: boolean = Boolean(registeredUserObj)

    if (userExists) {
        setSubmitError({...submitError, emailError: true})
        setQuery({...query, email: ""})
        setCurrentStep(1)
        return null
    } else {
        setSubmitError({...submitError, emailError: false})
        let registrationSubmitData = {
            email: query?.email,
            username: query?.username,
            password: query?.password,
            confirmPassword: query?.confirmPassword,
            firstName: query?.firstName,
            lastName: query?.lastName,
            gender: query?.gender,
            dob: query?.dob,
            country: query?.country,
            city: query?.city,
            zip: query?.zip,
            address: query?.address,
            creditCard: query?.creditCard,
            expireMonth: query?.expireMonth,
            expireYear: query?.expireYear,
            ccv: query?.ccv
        }
        postRegistrationData(registrationSubmitData)
        navigate(CONST?.routes?.loginRoute)
    }
}

export type ModalActiveStateTypes = {
    help?: boolean,
    location?: boolean,
    profile: boolean,
    wish: boolean,
    cart: boolean,
    sidebar?: boolean
}


export type LoggedUserDataTypes = {
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    gender: string,
    dob: string,
    country: string,
    city: string,
    zip: string,
    address: string,
    creditCard: string,
    expireMonth: number,
    expireYear: number,
    ccv: string
}

export interface ProfileModalPropTypes {
    modalActive: ModalActiveStateTypes,
    setModalActive: Function,
}



export type ProfileButtonsFormDataTypes = {
    id: number,
    frontendSlug: string,
    label: string
}

export type ProfileUnauthenticatedFormDataTypes = {
    title: string,
    paragraphOne: string,
    paragraphTwo: string,
    link: string,
    paragraphThree: string
}

export type ProfileFormDataTypes = {
    profileButtonsFormData: ProfileButtonsFormDataTypes[],
    profileUnauthenticatedFormData: ProfileUnauthenticatedFormDataTypes
}

export type RegistrationFormDataInputTypes = {
    id?: number,
    label?: string,
    frontendSlug?: string,
    name?: string,
    placeholder?: string,
    type?: string,
    validation?: string,
    error?: string,
    step?: number,
    options?: string[] | number[],
    content?: string,
    termsAcceptBtnLabel?: string,
    termsDeclineBtnLabel?: string
    max?: string,
    min?: string
}

export type RegistrationFormDataTypes = {
    formLabel: string,
    inputs: RegistrationFormDataInputTypes[],
    formError: string,
    successMessage?: string,
    stepLabel: string,
    singUpButtonLabel: string,
    previousButtonLabel: string,
    nextButtonLabel: string,
    loginRedirectLabel: string,
    existsError: string
}

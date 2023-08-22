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
    fieldExampleData?: string
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



export type RegistrationQueryStateTypes = {
    email: string,
    username: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    gender?: string,
    dob: string,
    country: string,
    city: string,
    zip: string,
    address: string,
    creditCard: string,
    expireMonth: string,
    expireYear: string,
    ccv: string
}


export type RegistrationFieldErrorStateTypes =  {
    email: boolean,
    username: boolean,
    password: boolean,
    confirmPassword: boolean,
    firstName: boolean,
    lastName: boolean,
    gender: boolean,
    dob: boolean,
    country: boolean,
    city: boolean,
    zip: boolean,
    address: boolean,
    creditCard: boolean,
    expireMonth: boolean,
    expireYear: boolean,
    ccv: boolean
}



export type RegistrationSubmitErrorTypes = {
    emailError: boolean,
}


export type RegistrationShowPasswordTypeStateTypes  = {
    password: string,
    confirmPassword: string
}

export type RegistrationSelectDropdownInputStateTypes = {
    country: boolean,
    month:  boolean,
    year: boolean
}

export type RegistrationRegisteredUsersTypes = {
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


export type HandleStepValuesReturnTypes = {
    minStep: number | undefined
    maxStep: number | undefined
    inputsByStep: RegistrationFormDataInputTypes[]
}


export type StyledRegistrationPropsTypes = {
    terms: boolean
    dateSelected: boolean
}
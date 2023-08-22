export type LoginFormDataInputTypes = {
    id: number,
    label: string,
    frontendSlug: string,
    name: string,
    placeholder: string,
    validation: string,
    error: string,
    type: string,
}

export type LoginFormDataTypes = {
    formLabel: string,
    inputs: LoginFormDataInputTypes[],
    formError: string,
    submitEmailError: string,
    submitPasswordError: string,
    submitUnregisteredError: string,
    buttonLabel: string,
    forgotPasswordLabelOne: string,
    forgotPasswordLabelTwo: string,
    signUpLabel: string,
}

export type LoginFieldErrorStateTypes = {
    email: boolean,
    password: boolean,
}

export type LoginQueryStateTypes = {
    email: string,
    password: string,
}

export type LoginSubmitErrorStateTypes = {
    nonExistent: boolean,
    emailError: boolean,
    passwordError: boolean,
}


export type LoginRegisteredUsersTypes = {
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

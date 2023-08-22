export type ForgotPasswordFormInputTypes = {
    id: number,
    label: string,
    frontendSlug: string,
    type: string,
    name: string,
    placeholder: string,
    validation: string,
    error: string,
    fieldType: string,
}

export type ForgotPasswordFormTypes = {
    formLabel: string,
    formError: string,
    inputs: ForgotPasswordFormInputTypes[],
    buttonLabel: string,
}



export type ForgotPasswordQueryTypes = {
    email: string
}

export type ForgotPasswordFieldErrorTypes = {
    email: boolean
}

export type ForgotPasswordPropTypes = {
    setForgotPasswordActive: Function
}

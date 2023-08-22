export type ChangePasswordFormDataInputTypes = {
    id: number,
    label: string,
    frontendSlug: string,
    name: string,
    type: string,
    placeholder: string,
    validation: string,
    error: string,
}

export type ChangePasswordFormDataTypes = {
    formLabel: string,
    inputs: ChangePasswordFormDataInputTypes[],
    submitButtonLabel: string,
    backButtonLabel: string,
}

export type ChangePasswordFormShowPasswordTypeStateTypes  = {
    oldPassword: string,
    confirmNewPassword?: string,
    newPassword: string,
}

export type ChangePasswordFormQueryStateTypes =  {
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string,
}

export type ChangePasswordFormFieldErrorStateTypes = {
    oldPassword: boolean,
    newPassword: boolean,
    confirmNewPassword: boolean,
}


export type ChangePasswordFormDataPropTypes = {
    setActiveComponent: Function
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

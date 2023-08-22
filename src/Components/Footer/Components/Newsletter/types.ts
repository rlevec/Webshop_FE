export type NewsletterInputTypes = {
    id: number,
    frontendSlug: string,
    type: string,
    fieldType: string,
    name: string,
    placeholder: string,
    validation: string,
    error: string,
}

export type NewsletterButtonTypes = {
    id: number,
    frontendSlug: string,
    title: string,
}

export type NewsletterCheckboxTypes = {
    id: number,
    type: string,
    fieldType: string,
    frontendSlug: string,
    titleOne: string,
    titleTwo: string,
    error: string
}

export type NewsletterTypes = {
    id: number,
    error: string,
    frontendSlug: string,
    title: string,
    description: string,
    input: NewsletterInputTypes,
    button: NewsletterButtonTypes,
    checkbox: NewsletterCheckboxTypes

}

export type NewsletterStateQueryTypes = {
    email: string,
    gdpr: boolean
}

export type NewsletterStateFieldErrorTypes = {
    email: boolean,
    gdpr: boolean
}

export type NewsletterSelectorTypes = {
    email: string;
    firstName: string
    fname: string
    gdpr: boolean,
    lastName: string
    lname: string
}
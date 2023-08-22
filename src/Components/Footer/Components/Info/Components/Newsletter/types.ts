type NewsletterInteractiveFormDataFormMarketingInputTypes = {
    id: number,
    label: string,
    frontendSlug: string,
    placeholder: string,
    type: string,
    validation: string,
    error: string,
}

type NewsletterInteractiveFormDataFormMailchimpTypes = {
    logo: string,
    paragraph: string,
    frontendSlug: string,
}


type NewsletterInteractiveFormDataFormMarketingTypes = {
    title: string,
    paragraphOne: string,
    input: NewsletterInteractiveFormDataFormMarketingInputTypes,
    paragraphTwo: string,
    mailchimp: NewsletterInteractiveFormDataFormMailchimpTypes,
}


export type NewsletterInteractiveFormDataFormInputsTypes = {
    id: number,
    label: string,
    frontendSlug: string,
    name: string,
    type: string,
    placeholder: string,
    validation: string,
    error: string,
}


export type NewsletterInteractiveFormDataFormButtonTypes = {
    title: string,
    frontendSlug: string
}



export type NewsletterInteractiveFormDataFormDataTypes = {
    inputs: NewsletterInteractiveFormDataFormInputsTypes[],
    content: string,
    marketing: NewsletterInteractiveFormDataFormMarketingTypes,
    button: NewsletterInteractiveFormDataFormButtonTypes,
}


export type NewsletterInteractiveFormDataStateQueryTypes = {
    email: string,
    firstName: string,
    lastName: string,
    checked: boolean
}

export type NewsletterInteractiveFormDataStateFieldErrorTypes = {
    email: boolean,
    firstName: boolean,
    lastName: boolean,
    checked: boolean
}
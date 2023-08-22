export type EditConsentNecessaryCookiesTypes = {
    inputType: string,
    fieldType: string,
    label: string,
    descriptionOne: string,
    linkOne: string,
    descriptionTwo: string,
    linkTwo: string,
    descriptionThree: string,
    linkThree: string,
    descriptionFour: string,
    linkFour: string,
}

export type EditConsentMarketingServicesTypes = {
    inputType: string,
    fieldType: string,
    label: string,
    listContent: string[]
}

export type EditConsentAnalyticsTypes = {
    inputType: string,
    fieldType: string,
    label: string,
    listContent: string[]
}

export type EditConsentButtonTypes = {
    title: string
}

export type EditConsentTypes = {
    necessaryCookies: EditConsentNecessaryCookiesTypes,
    marketingServices: EditConsentMarketingServicesTypes,
    analytics: EditConsentAnalyticsTypes,
    editConsentButton: EditConsentButtonTypes,
}

export type ConsentInitialStateTypes = {
    cookies: boolean,
    marketingServices: boolean,
    analytics: boolean,
}
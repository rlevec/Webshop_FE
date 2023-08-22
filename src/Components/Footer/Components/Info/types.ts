

export type DescriptionContentTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    link: string
}

type SupportedPaymentMethodsDescriptionTypes = {
    title: string,
    content: DescriptionContentTypes[]
}

export type SupportedPaymentMethodsIconsTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    link: string
}

type SupportedPaymentMethodsParagraphTypes = {
    id: number,
    frontendSlug: string,
    descriptionOne: string,
    descriptionTwo: string,
}

type SupportedPaymentMethodsExchangeRateTypes = {
    id: number,
    frontendSlug: string,
    content: string,
}

type SupportedPaymentMethodsTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    description: SupportedPaymentMethodsDescriptionTypes,
    icons: SupportedPaymentMethodsIconsTypes[],
    paragraph: SupportedPaymentMethodsParagraphTypes,
    exchangeRate: SupportedPaymentMethodsExchangeRateTypes,
}

export type TermsOfUseContentTypes = {
    id: number,
    frontendSlug: string,
    title: string
}

export type TermsOfUseTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    content: TermsOfUseContentTypes[]
}


export type CydexPharmContentTypes = {
    id: number,
    frontendSlug: string,
    title: string,
}


export type CydexPharmTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    content: CydexPharmContentTypes[]
}


export type FooterInfoFormDataTypes = {
    cydexPharm: CydexPharmTypes,
    termsOfUse: TermsOfUseTypes,
    supportedPaymentMethods: SupportedPaymentMethodsTypes
}
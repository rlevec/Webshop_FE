
export type ModalActiveStateTypes = {
    help: boolean,
    location: boolean,
    profile: boolean,
    wish: boolean,
    cart: boolean
}
export interface HelpModalPropTypes {
    modalActive?: ModalActiveStateTypes,
    setModalActive?: Function,
}


export type HelpFormDataLinkTypes = {
    facebook: string,
    instagram: string,
    linkedIn: string,
}

export type HelpFormDataTypes = {
    header: string,
    frontendSlug: string,
    phone: string,
    faq: string,
    mail: string,
    mailRedirect: string,
    time: string,
    links: HelpFormDataLinkTypes
}
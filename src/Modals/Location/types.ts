export type LocationsFormDataDiscountTypes = {
    id: number,
    brandSlug: string,
    brandTitle: string,
    percent: number,
    startDate: number,
    endDate: number
}


export type LocationFormDataAddressesTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    promotionStart: string,
    promotionEnd: string,
    route: string,
    image: string,
    discount: LocationsFormDataDiscountTypes[]
}


export type ModalActiveStateTypes = {
    help: boolean,
    location: boolean,
    profile: boolean,
    wish: boolean,
    cart: boolean
}

export interface LocationModalPropTypes {
    modalActive: ModalActiveStateTypes,
    setModalActive: Function,
}

export type LocationFormDataLocationsTypes = {
    id: number,
    city: string,
    frontendSlug: string,
    stores: number,
    addresses: LocationFormDataAddressesTypes[],
}

export type LocationFormDataTypes = {
    locationsTitle: string,
    locationsTitleAlt: string,
    locationsPromotionsTitle: string,
    locationsWorkTime: string,
    locationsPhoneNumber: string,
    locations: LocationFormDataLocationsTypes[]
}
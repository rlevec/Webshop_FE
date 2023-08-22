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
    discount: LocationsFormDataDiscountTypes[]
}


export type LocationFormDataLocationsTypes = {
    id: number,
    city: string,
    frontendSlug: string,
    stores: number,
    addresses: LocationFormDataAddressesTypes[]
}


export type LocationFormDataTypes = {
    locationsTitle: string,
    locationsTitleAlt: string,
    locationsPromotionsTitle: string,
    locationsWorkTime: string,
    locationsPhoneNumber: string,
    locations: LocationFormDataLocationsTypes[]
}

export type LocationSliceStateTypes = {
    start: number,
    end: number
}


export type LocationsFormDataDiscountTypes = {
    id: number,
    brandSlug: string,
    brandTitle: string,
    percent: number,
    startDate: string,
    endDate: string
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

export type FunctionReturnTypes = {
    discountArray: LocationsFormDataDiscountTypes[] | [],
    columns: string[],
    cityLocation: string,
    locationTitle: string,
    startDate: string,
    endDate: string
}

export type SortedStateTypes = {
    brand: string,
    percent: string
}

export type DiscountsFormDataTypes = {
    headerTitle: string,
    headerParagraphOne: string,
    headerParagraphTwo: string,
    headerParagraphThree: string,
    headerSpanOne: string,
    headerSpanTwo: string,
    headerSpanThree: string,
    warningSpanOne: string,
    warningSpanTwo: string,
}
export type ModalActiveStateTypes = {
    help?: boolean,
    location?: boolean,
    profile: boolean,
    wish: boolean,
    cart: boolean
    sidebar?: boolean,
}


export type WishlistFormDataPropTypes =  {
    modalActive: ModalActiveStateTypes,
    setModalActive: Function,
}


export type WishlistFormDataTypes = {
    header: string,
    frontendSlug: string,
    emptyTitle: string,
    emptyWarningOne: string,
    emptyWarningTwo: string,
    emptyWarningThree: string
}


export  type WishlistTypes = {
    frontendSlug: string,
    title: string,
    image: string,
    price?: null,
    inWishlist?: boolean | null
};
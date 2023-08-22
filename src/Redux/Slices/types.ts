export type ConsentInitialStateTypes = {
    cookies: boolean,
    marketingServices: boolean,
    analytics: boolean,
}


export type InitialLoginStateTypes = {
    loginData: InitialLoginStateSubTypes
}

export type InitialLoginStateSubTypes = {
    email: string
}

export type NewsletterStateTypes = {
    email: string,
    gdpr: boolean | null,
    firstName: string,
    lastName: string,
}




export type WishlistUniversalTypes = {
    frontendSlug: string,
    title: string,
    image: string,
    price?: null,
    inWishlist?: boolean | null
};

export type WishlistItemsTypes = {
    wishlistItem: WishlistUniversalTypes | {};
    wishlistItems: WishlistUniversalTypes[];
};


export type CartItemsUniversalTypes = {
    frontendSlug: string;
    title: string;
    image: string;
    quantity?: number;
    inCart?: boolean | null;
    price?: null;
};

export type CartItemsTypes = {
    cartItem: CartItemsUniversalTypes | {};
    cartItems: CartItemsUniversalTypes[];
};



export type SelectedBrandInitiatlStateTypes = {
    brandSelected: string | null
}

export type SelectedCategoryInitialStateTypes = {
    categorySelected: string | null
}

export type SelectedLocationInitialStateTypes = {
    locationSelected: string | null
}

export type SelectedSubCategoryInitialStateTypes = {
    subCategorySelected: string | null
}


export type DeviceSliceInitialState = {
    device: string | null;
}


export type CopyrightSliceInitialSlice = {
    copyright: boolean;
}


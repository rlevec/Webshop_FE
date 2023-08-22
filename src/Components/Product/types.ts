
type ProductsDescriptionTypes = {
    paragraphOne: string,
    paragraphTwo: string
}

export type ProductsTypes = {
    id: number | null,
    frontendSlug: string,
    title: string,
    amount: number,
    discountAmount: number | null,
    quantity: number | null,
    description: ProductsDescriptionTypes
    categorySlug: string,
    categoryTitle: string,
    subCategorySlug: string,
    subCategoryTitle: string,
    extraCategories: string[],
    image: string,
    brand: string,
    brandTitle: string,
    route: string
}

export type CartItemsTypes = {
    frontendSlug: string;
    title: string;
    image: string;
    quantity?: number;
    inCart?: boolean | null;
    price?: null;
};

export type WishlistItemsTypes = {
    frontendSlug: string,
    title: string,
    image: string,
    price?: null,
    inWishlist?: boolean | null
};


export type CartItemWarningStateTypes = {
    cartItemExists: string | null,
    cartItemAdded: string | null
}

export type WishlistItemWarningStateTypes = {
    wishlistItemAdded: string | null,
    wishlistItemExists: string | null,
    wishlistItemInCart: string | null,
}
export type QueryStateTypes = {
    email?: string,
    username?: string,
    password?: string,
    confirmPassword?: string,
    firstName?: string,
    lastName?: string,
    gender?: string,
    dob?: string,
    country?: string,
    city?: string,
    zip?: string,
    address?: string,
    creditCard?: string,
    expireMonth?: string,
    expireYear?: string,
    ccv?: string
    newCreditCard?: string,
    newCcv?: string,
    newExpireMonth?: string,
    newExpireYear?: string,
    oldPassword?: string,
    newPassword?: string,
    confirmNewPassword?: string,
}

export type FieldErrorStateTypes =  {
    email?: boolean,
    username?: boolean,
    password?: boolean,
    confirmPassword?: boolean,
    firstName?: boolean,
    lastName?: boolean,
    gender?: boolean,
    dob?: boolean,
    country?: boolean,
    city?: boolean,
    zip?: boolean,
    address?: boolean,
    creditCard?: boolean,
    expireMonth?: boolean,
    expireYear?: boolean,
    ccv?: boolean
    newCreditCard?: boolean,
    newCcv?: boolean,
    newExpireMonth?: boolean,
    newExpireYear?: boolean
    oldPassword?: boolean,
    newPassword?: boolean,
    confirmNewPassword?: boolean,
}



export type CartItemWarningStateTypes = {
    cartItemExists: string | null,
    cartItemAdded: string | null
}

export type WishlistItemWarningStateTypes = {
    wishlistItemAdded: string | null,
    wishlistItemExists: string | null,
    wishlistItemInCart: string | null,
}

type CartItemTypes = {
    frontendSlug: string;
    title: string;
    image: string;
    quantity?: number;
    inCart?: boolean | null;
    price?: null;
};

type WishlistTypes = {
    frontendSlug: string,
    title: string,
    image: string,
    price?: null,
    inWishlist?: boolean | null
};

export type BlogFormDataCategoriesTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    image: string,
    alt: string,
    description: string
    route: string,
    subContent?: string
}

export type BlogFormDataTypes = {
    id: number,
    frontendSlug: string,
    title: string,
    categories?: BlogFormDataCategoriesTypes[]
}

export type ModalActiveStateTypes = {
    profile: boolean,
    wish: boolean,
    cart: boolean,
    sidebar: boolean,
    search: boolean
}


export type ShowPasswordTypeStateTypes  = {
    password?: string,
    confirmPassword?: string,
    oldPassword?: string,
    newPassword?: string,
    confirmNewPassword?: string,
}

export type UniversalHelperTypes = {
    cartItems: CartItemTypes[],
    cartItem: CartItemTypes,
    wishlistItem: WishlistTypes,
    wishlistItems: WishlistTypes[]
    blogFormDataArray: BlogFormDataTypes[],
    blogFormData: BlogFormDataTypes | undefined,
    blogFormDataCategoriesArray: BlogFormDataCategoriesTypes[]
    blogFormDataCategories: BlogFormDataCategoriesTypes,
    cartItemWarningStateTypes: CartItemWarningStateTypes,
    wishlistItemWarningStateTypes: WishlistItemWarningStateTypes,
    modalActiveTypes: ModalActiveStateTypes,
    queryStateTypes: QueryStateTypes,
    fieldErrorStateTypes: FieldErrorStateTypes
    showPasswordStateTypes: ShowPasswordTypeStateTypes
}


type ConstVariableApiTypes = {
    root: string,
    loginFormDataRoute: string,
    loggedUsersDataRoute: string,
    registeredUsersDataRoute: string,
    registrationFormDataRoute: string,
    forgotPasswordFormDataRoute: string,
    headerFormDataRoute: string
    changePasswordFormDataRoute: string,
    changeCreditCardFormDataRoute: string,
    promotionsFormDataRoute: string,
    generalInfoFormDataRoute: string,
    productsInfoFormDataRoute: string,
    promotionZoneFormDataRoute: string,
    footerNewsletterFormDataRoute: string,
    footerLocationsFormDataRoute: string,
    footerInfoFormDataRoute: string,
    shippingDeliveryFormDataRoute: string,
    returnsComplaintsFormDataRoute: string,
    paymentMethodsFormDataRoute: string,
    contractTerminationFormDataRoute: string,
    privacyStatementFormDataRoute: string,
    dataPrivacyFormDataRoute: string,
    termsFormDataRoute: string,
    faqFormDataRoute: string,
    newsletterInteractiveFormDataRoute: string,
    aboutUsFormDataRoute: string,
    brandsFormDataRoute: string,
    contactFormDataRoute: string,
    editConsentFormDataRoute: string,
    categoriesFormDataRoute: string,
    locationsFormDataRoute: string,
    cartFormDataRoute: string,
    wishlistFormDataRoute: string,
    profileFormDataRoute: string,
    helpFormDataRoute: string,
    blogFormDataRoute: string,
    productsDataRoute: string,
    productsCategorizedFormDataButtonsRoute: string,
    warningModalFormDataRoute: string,
    transactionModalFormDataRoute: string,
    transactionsDataRoute: string,
    discountsFormData: string,
    decentralizedFormData: string,
    brandLogoImagesDataRoute: string,
    categoriesModalFormDataRoute: string
}

type ConstVariableRoutesTypes = {
    root: string,
    loginRoute: string,
    registrationRoute: string,
    brandsRoute: string,
    dynamicProductRoute: string,
    discountsDynamicRoute: string,
    discountsRoute: string,
    aboutUsRoute: string,
    faqRoute: string,
    contactRoute: string,
    newsletterRoute: string,
    locationsRoute: string,
    termsRoute: string,
    blogNewsRoute: string,
    paymentMethodsRoute: string,
    editConsentRoute: string,
    returnsComplaintsRoute: string,
    dataPrivacyRoute: string,
    shippingDeliveryRoute: string,
    privacyStatementRoute: string,
    contractTerminationRoute: string,
    blogFormDataDynamicRoute: string,
    brandsDynamicRoute: string,
    productsRoute: string,
    productDynamicRoute: string
    cartRoute: string,
    invalidRoute: string,
}

export type ConstVariableTypes = {
    api:ConstVariableApiTypes,
    routes: ConstVariableRoutesTypes
}
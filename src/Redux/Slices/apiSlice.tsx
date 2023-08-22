import {BaseQueryFn, createApi, FetchArgs, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

import {EndpointBuilder} from "@reduxjs/toolkit/dist/query/endpointDefinitions";

import {CONST} from "../../Utils/CONST";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${CONST?.api?.root}`,
    }),
    tagTypes: [
        "LoggedUsers",
        "RegisteredUsers",
        "LoginFormData",
        "RegistrationFormData",
        "ForgotPasswordFormData",
        "HeaderFormData",
        "ChangePasswordFormData",
        "ChangeCreditCardFormData",
        "PromotionsFormData",
        "GeneralInfoFormData",
        "ProductsInfoFormData",
        "PromotionZoneFormData",
        "FooterNewsletterFormData",
        "FooterLocationsFormData",
        "FooterInfoFormData",
        "ShippingDeliveryFormData",
        "ReturnsComplaintsFormData",
        "PaymentMethodsFormData",
        "ContractTerminationFormData",
        "PrivacyStatementFormData",
        "DataPrivacyFormData",
        "TermsFormData",
        "FaqFormData",
        "NewsletterInteractiveFormData",
        "AboutUsFormData",
        "ContactFormData",
        "EditConsentFormData",
        "LocationsFormData",
        "CartFormData",
        "WishlistFormData",
        "ProfileFormData",
        "HelpFormData",
        "BlogFormData",
        "ProductsData",
        "ProductsCategorizedFormData",
        "WarningModalFormData",
        "TransactionModalFormData",
        "TransactionsData",
        "DiscountsFormData",
        "BrandLogoImagesData",
        "CategoriesModalFormData"
    ],
    endpoints: (builder: EndpointBuilder<BaseQueryFn, string, string>) => ({
        getProductsData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.productsDataRoute}`,
            providesTags: ["ProductsData"]
        }),
        getLoginFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.loginFormDataRoute}`,
            providesTags: ["LoginFormData"]
        }),
        getLoggedUsers: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.loggedUsersDataRoute}`,
            providesTags: ["LoggedUsers"],
        }),
        postLoggedUser: builder.mutation({
            query: (payload): string | FetchArgs => ({
                url: `${CONST?.api?.loggedUsersDataRoute}`,
                method: "POST",
                body: {payload},
            }),
            invalidatesTags: ["LoggedUsers"]
        }),
        deleteLoggedUser: builder.mutation({
            query: (payload): string | FetchArgs => ({
                url: `${CONST?.api?.loggedUsersDataRoute}`,
                method: 'DELETE',
                body: {payload},
            }),
            invalidatesTags: ['LoggedUsers'],
        }),
        getRegistrationFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.registrationFormDataRoute}`,
            providesTags: ["RegistrationFormData"]
        }),
        getRegisteredUsers: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.registeredUsersDataRoute}`,
            providesTags: ["RegisteredUsers"]
        }),
        postRegisteredUser: builder.mutation({
            query: (payload): string | FetchArgs => ({
                url: `${CONST?.api?.registeredUsersDataRoute}`,
                method: "POST",
                body: {payload},
            }),
            invalidatesTags: ["RegisteredUsers"]
        }),
        deleteRegisteredUser: builder.mutation({
            query: (payload): string | FetchArgs => ({
                url: `${CONST?.api?.registeredUsersDataRoute}`,
                method: 'DELETE',
                body: {payload},
            }),
            invalidatesTags: ['RegisteredUsers'],
        }),
        getForgotPasswordFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.forgotPasswordFormDataRoute}`,
            providesTags: ["ForgotPasswordFormData"]
        }),
        getHeaderFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.headerFormDataRoute}`,
            providesTags: ["HeaderFormData"]
        }),
        getChangePasswordFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.changePasswordFormDataRoute}`,
            providesTags: ["ChangePasswordFormData"]
        }),
        getChangeCreditCardFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.changeCreditCardFormDataRoute}`,
            providesTags: ["ChangeCreditCardFormData"]
        }),
        getPromotionsFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.promotionsFormDataRoute}`,
            providesTags: ["PromotionsFormData"]
        }),
        getGeneralInfoFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.generalInfoFormDataRoute}`,
            providesTags: ["GeneralInfoFormData"]
        }),
        getProductsInfoFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.productsInfoFormDataRoute}`,
            providesTags: ["ProductsInfoFormData"]
        }),
        getPromotionZoneFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.promotionZoneFormDataRoute}`,
            providesTags: ["PromotionZoneFormData"]
        }),
        getFooterNewsletterFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.footerNewsletterFormDataRoute}`,
            providesTags: ["FooterNewsletterFormData"]
        }),
        getFooterLocationsFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.footerLocationsFormDataRoute}`,
            providesTags: ["FooterLocationsFormData"]
        }),
        getFooterInfoFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.footerInfoFormDataRoute}`,
            providesTags: ["FooterInfoFormData"]
        }),
        getShippingDeliveryFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.shippingDeliveryFormDataRoute}`,
            providesTags: ["ShippingDeliveryFormData"]
        }),
        getReturnsComplaintsFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.returnsComplaintsFormDataRoute}`,
            providesTags: ["ReturnsComplaintsFormData"]
        }),
        getPaymentMethodsFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.paymentMethodsFormDataRoute}`,
            providesTags: ["PaymentMethodsFormData"]
        }),
        getContractTerminationFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.contractTerminationFormDataRoute}`,
            providesTags: ["ContractTerminationFormData"]
        }),
        getPrivacyStatementFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.privacyStatementFormDataRoute}`,
            providesTags: ["PrivacyStatementFormData"]
        }),
        getDataPrivacyFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.dataPrivacyFormDataRoute}`,
            providesTags: ["DataPrivacyFormData"]
        }),
        getTermsFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.termsFormDataRoute}`,
            providesTags: ["TermsFormData"]
        }),
        getFaqFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.faqFormDataRoute}`,
            providesTags: ["FaqFormData"]
        }),
        getAboutUsFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.aboutUsFormDataRoute}`,
            providesTags: ["AboutUsFormData"]
        }),
        getNewsletterInteractiveFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.newsletterInteractiveFormDataRoute}`,
            providesTags: ["NewsletterInteractiveFormData"]
        }),
        getContactFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.contactFormDataRoute}`,
            providesTags: ["ContactFormData"]
        }),
        getEditConsentFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.editConsentFormDataRoute}`,
            providesTags: ["EditConsentFormData"]
        }),
        getLocationsFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.locationsFormDataRoute}`,
            providesTags: ["LocationsFormData"]
        }),
        getCartFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.cartFormDataRoute}`,
            providesTags: ["CartFormData"]
        }),
        getWishlistFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.wishlistFormDataRoute}`,
            providesTags: ["WishlistFormData"]
        }),
        getProfileFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.profileFormDataRoute}`,
            providesTags: ["ProfileFormDataRoute"]
        }),
        getHelpFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.helpFormDataRoute}`,
            providesTags: ["HelpFormData"]
        }),
        getBlogFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.blogFormDataRoute}`,
            providesTags: ["BlogFormData"]
        }),
        useGetProductsCategorizedFormDataButtons: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.productsCategorizedFormDataButtonsRoute}`,
            providesTags: ["ProductsCategorizedFormData"]
        }),
        useGetWarningModalFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.warningModalFormDataRoute}`,
            providesTags: ["WarningModalFormData"]
        }),
        useGetTransactionModalFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.transactionModalFormDataRoute}`,
            providesTags: ["TransactionModalFormData"]
        }),
        getTransactions: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.transactionsDataRoute}`,
            providesTags: ["TransactionsData"],
        }),
        postTransaction: builder.mutation({
            query: (payload): string | FetchArgs => ({
                url: `${CONST?.api?.transactionsDataRoute}`,
                method: "POST",
                body: {payload},
            }),
            invalidatesTags: ["TransactionsData"]
        }),
        getDiscountsFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.discountsFormData}`,
            providesTags: ["DiscountsFormData"],
        }),
        useGetBrandLogoImagesData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.brandLogoImagesDataRoute}`,
            providesTags: ["BrandLogoImagesData"],
        }),
        useGetCategoriesModalFormData: builder.query({
            query: (): string | FetchArgs => `${CONST?.api?.categoriesModalFormDataRoute}`,
            providesTags: ["CategoriesModalFormData"],
        }),
    }),
});

export const {
    useGetLoggedUsersQuery,
    useGetRegisteredUsersQuery,
    usePostRegisteredUserMutation,
    usePostLoggedUserMutation,
    useDeleteLoggedUserMutation,
    useDeleteRegisteredUserMutation,
    useGetLoginFormDataQuery,
    useGetRegistrationFormDataQuery,
    useGetForgotPasswordFormDataQuery,
    useGetHeaderFormDataQuery,
    useGetChangePasswordFormDataQuery,
    useGetChangeCreditCardFormDataQuery,
    useGetPromotionsFormDataQuery,
    useGetGeneralInfoFormDataQuery,
    useGetProductsInfoFormDataQuery,
    useGetPromotionZoneFormDataQuery,
    useGetFooterNewsletterFormDataQuery,
    useGetFooterLocationsFormDataQuery,
    useGetFooterInfoFormDataQuery,
    useGetShippingDeliveryFormDataQuery,
    useGetReturnsComplaintsFormDataQuery,
    useGetPaymentMethodsFormDataQuery,
    useGetContractTerminationFormDataQuery,
    useGetPrivacyStatementFormDataQuery,
    useGetDataPrivacyFormDataQuery,
    useGetTermsFormDataQuery,
    useGetAboutUsFormDataQuery,
    useGetFaqFormDataQuery,
    useGetNewsletterInteractiveFormDataQuery,
    useGetContactFormDataQuery,
    useGetEditConsentFormDataQuery,
    useGetLocationsFormDataQuery,
    useGetCartFormDataQuery,
    useGetWishlistFormDataQuery,
    useGetProfileFormDataQuery,
    useGetHelpFormDataQuery,
    useGetBlogFormDataQuery,
    useGetProductsDataQuery,
    useUseGetProductsCategorizedFormDataButtonsQuery,
    useUseGetWarningModalFormDataQuery,
    useUseGetTransactionModalFormDataQuery,
    useGetTransactionsQuery,
    usePostTransactionMutation,
    useGetDiscountsFormDataQuery,
    useUseGetBrandLogoImagesDataQuery,
    useUseGetCategoriesModalFormDataQuery
} = apiSlice
import {CONST} from "../../../../Utils/CONST";


//handle routes to navigate to from the footer
export const handleRoutes = (frontendSlug: string):string => {
    if(frontendSlug === "home") return CONST?.routes?.root
    else if(frontendSlug === "aboutUs") return CONST?.routes?.aboutUsRoute
    else if(frontendSlug === "blogNews") return CONST?.routes?.blogNewsRoute
    else if(frontendSlug === "faq") return CONST?.routes?.faqRoute
    else if(frontendSlug === "brands") return CONST?.routes?.brandsRoute
    else if(frontendSlug === "termsPurchase") return CONST?.routes?.termsRoute
    else if(frontendSlug === "contact") return CONST?.routes?.contactRoute
    else if(frontendSlug === "newsletter") return CONST?.routes?.newsletterRoute
    else if(frontendSlug === "pharmacyLocations") return CONST?.routes?.locationsRoute
    else if(frontendSlug === "paymentMethods") return CONST?.routes?.paymentMethodsRoute
    else if(frontendSlug === "returnsComplaints") return CONST?.routes?.returnsComplaintsRoute
    else if(frontendSlug === "dataPrivacy") return CONST?.routes?.dataPrivacyRoute
    else if(frontendSlug === "shippingDelivery") return CONST?.routes?.shippingDeliveryRoute
    else if(frontendSlug === "privacyStatement") return CONST?.routes?.privacyStatementRoute
    else if(frontendSlug === "unilateralTerminationOfTheContract") return CONST?.routes?.contractTerminationRoute
    else if(frontendSlug === "editConsent") return CONST?.routes?.editConsentRoute
    else return ""
}
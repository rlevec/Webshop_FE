import {CONST} from "../../../../Utils/CONST";

//handle routes to redirect to on user click action
export const handleRoutes = (frontendSlug: string): string=> {
    if (frontendSlug === "consultation_one") return CONST?.routes?.contactRoute
    else if (frontendSlug === "consultation_two") return CONST?.routes?.shippingDeliveryRoute
    else if (frontendSlug === "consultation_three") return CONST?.routes?.shippingDeliveryRoute
    else if (frontendSlug === "consultation_four") return CONST?.routes?.locationsRoute
    else if (frontendSlug === "consultation_five") return CONST?.routes?.paymentMethodsRoute
    else return ""
}
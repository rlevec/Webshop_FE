import {FC, ReactElement} from "react";

import {StyledPaymentMethods} from "./styledPaymentMethods";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";

import {handleCurrentUrlAndDisableComponent} from "../../../../../../Utils/helpers";

import {
    useGetPaymentMethodsFormDataQuery
} from "../../../../../../Redux/Slices/apiSlice";

import {PaymentMethodsTypes} from "./types";

import {CONST} from "../../../../../../Utils/CONST";
import {useAppSelector} from "../../../../../../Redux/Store/store";

const PaymentMethods: FC = ():ReactElement => {
    const {
        data: isFetchedPaymentMethodsFormData,
        isFetching: isFetchingPaymentMethodsFormData,
        isLoading: isLoadingPaymentMethodsFormData,
        isError: isErrorPaymentMethodsFormData
    } = useGetPaymentMethodsFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const paymentMethodsFormData: PaymentMethodsTypes = isFetchedPaymentMethodsFormData

    const deviceType = useAppSelector((state) => state?.device?.device)

    if(isFetchingPaymentMethodsFormData || isLoadingPaymentMethodsFormData) return <Loading/>
    else if(isErrorPaymentMethodsFormData || !isFetchedPaymentMethodsFormData) return <ServerError/>
    else {
        return (
            <StyledPaymentMethods>
                {!handleCurrentUrlAndDisableComponent(CONST?.routes?.paymentMethodsRoute)?.disableComponent && <BasicNavLinks />}
                <div className="payment-methods-wrapper"
                     style={{width: handleCurrentUrlAndDisableComponent(CONST?.routes?.paymentMethodsRoute)?.currentUrl ? `${deviceType === "desktop" ? 50 : 100}%` : undefined, padding: handleCurrentUrlAndDisableComponent(CONST?.routes?.paymentMethodsRoute)?.currentUrl ? "20px" : undefined}}
                     dangerouslySetInnerHTML={{__html: handleCurrentUrlAndDisableComponent(CONST?.routes?.paymentMethodsRoute)?.currentUrl ? `<h1>Payment Methods</h1>` + paymentMethodsFormData?.content : paymentMethodsFormData?.content}}>
                </div>
            </StyledPaymentMethods>
        )
    }
}

export default PaymentMethods
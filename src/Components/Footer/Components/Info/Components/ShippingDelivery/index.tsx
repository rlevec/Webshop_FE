import {FC, ReactElement} from "react";

import {StyledShippingDelivery} from "./styledShippingDelivery";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";

import {handleCurrentUrlAndDisableComponent} from "../../../../../../Utils/helpers";

import {ShippingDeliveryTypes} from "./types";

import {
    useGetShippingDeliveryFormDataQuery
} from "../../../../../../Redux/Slices/apiSlice";

import {CONST} from "../../../../../../Utils/CONST";

import {useAppSelector} from "../../../../../../Redux/Store/store";

const ShippingDelivery: FC = ():ReactElement => {
    const {
        data: isFetchedShippingDeliveryFormData,
        isFetching: isFetchingShippingDeliveryFormData,
        isLoading: isLoadingShippingDeliveryFormData,
        isError: isErrorShippingDeliveryFormData
    } = useGetShippingDeliveryFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const shippingDeliveryFormData: ShippingDeliveryTypes = isFetchedShippingDeliveryFormData

    const deviceType = useAppSelector((state) => state?.device?.device)

    if(isFetchingShippingDeliveryFormData || isLoadingShippingDeliveryFormData) return <Loading/>
    else if(isErrorShippingDeliveryFormData || !isFetchedShippingDeliveryFormData) return <ServerError/>
    else {
        return (
            <StyledShippingDelivery>
                {!handleCurrentUrlAndDisableComponent(CONST?.routes?.shippingDeliveryRoute)?.disableComponent && <BasicNavLinks />}
                <div className="shipping-delivery-wrapper"
                     style={{width: handleCurrentUrlAndDisableComponent(CONST?.routes?.shippingDeliveryRoute)?.currentUrl ? `${deviceType === "desktop" ? 50 : 100}%` : undefined, padding: handleCurrentUrlAndDisableComponent(CONST?.routes?.shippingDeliveryRoute)?.currentUrl ? "20px" : undefined}}
                     dangerouslySetInnerHTML={{__html: handleCurrentUrlAndDisableComponent(CONST?.routes?.shippingDeliveryRoute)?.currentUrl ? `<h1>Shipping and Delivery</h1>` + shippingDeliveryFormData?.content : shippingDeliveryFormData?.content}}>
                </div>
            </StyledShippingDelivery>
        )
    }
}

export default ShippingDelivery
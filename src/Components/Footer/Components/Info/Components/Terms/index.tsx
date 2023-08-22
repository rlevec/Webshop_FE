import {FC, ReactElement} from "react";

import {StyledTerms} from "./styledTerms";

import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";
import PaymentMethods from "../PaymentMethods";
import ReturnsComplaints from "../ReturnsComplaints";
import PrivacyStatement from "../PrivacyStatement";
import ShippingDelivery from "../ShippingDelivery";
import DataPrivacy from "../DataPrivacy";
import ContractTermination from "../ContractTermination";
import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";

import {useGetTermsFormDataQuery} from "../../../../../../Redux/Slices/apiSlice";

import {TermsTypes} from "./types";

const Terms: FC = (): ReactElement => {
    const {
        data: isFetchedTermsFormData,
        isFetching: isFetchingTermsFormData,
        isLoading: isLoadingTermsFormData,
        isError: isErrorTermsFormData
    } = useGetTermsFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const termsFractionFormData: TermsTypes = isFetchedTermsFormData

    if(isFetchingTermsFormData || isLoadingTermsFormData) return <Loading/>
    else if(isErrorTermsFormData || !isFetchedTermsFormData) return <ServerError/>
    else {
        return (
            <StyledTerms>
                <BasicNavLinks />
                <div className="terms-wrapper">
                    <div dangerouslySetInnerHTML={{__html: termsFractionFormData?.paragraphOne}}></div>
                    <PaymentMethods/>
                    <ShippingDelivery/>
                    <div dangerouslySetInnerHTML={{__html: termsFractionFormData?.paragaraphTwo}}></div>
                    <ContractTermination/>
                    <ReturnsComplaints/>
                    <div dangerouslySetInnerHTML={{__html: termsFractionFormData?.paragraphThree}}></div>
                    <DataPrivacy/>
                    <PrivacyStatement/>
                </div>
            </StyledTerms>
        )
    }
}

export default Terms
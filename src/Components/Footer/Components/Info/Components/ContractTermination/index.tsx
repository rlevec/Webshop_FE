import {FC, ReactElement} from "react";

import {StyledContractTermination} from "./styledContractTermination";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";

import {handleCurrentUrlAndDisableComponent} from "../../../../../../Utils/helpers";

import {useAppSelector} from "../../../../../../Redux/Store/store";

import {ContractTerminationTypes} from "./types";

import {
    useGetContractTerminationFormDataQuery
} from "../../../../../../Redux/Slices/apiSlice";

import {CONST} from "../../../../../../Utils/CONST";

const ContractTermination: FC = (): ReactElement => {
    const {
        data: isFetchedContractTerminationFormData,
        isFetching: isFetchingContractTerminationFormData,
        isLoading: isLoadingContractTerminationFormData,
        isError: isErrorContractTerminationFormData
    } = useGetContractTerminationFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const contractTerminationFormData: ContractTerminationTypes = isFetchedContractTerminationFormData

    const deviceType = useAppSelector((state) => state?.device?.device)

    if(isFetchingContractTerminationFormData || isLoadingContractTerminationFormData) return <Loading/>
    else if(isErrorContractTerminationFormData || !isFetchedContractTerminationFormData) return <ServerError/>
    else {
        return (
            <StyledContractTermination>
                {!handleCurrentUrlAndDisableComponent(CONST?.routes?.contractTerminationRoute)?.disableComponent && <BasicNavLinks />}
                <div className="contract-termination-wrapper"
                     style={{width: handleCurrentUrlAndDisableComponent(CONST?.routes?.contractTerminationRoute)?.currentUrl ? `${deviceType === "desktop" ? 50 : 100}%` : undefined, padding: handleCurrentUrlAndDisableComponent(CONST?.routes?.contractTerminationRoute)?.currentUrl ? "20px" : undefined}}
                     dangerouslySetInnerHTML={{__html: handleCurrentUrlAndDisableComponent(CONST?.routes?.contractTerminationRoute)?.currentUrl ? `<h1>Unilateral Termination of Contract</h1>` + contractTerminationFormData?.content : contractTerminationFormData?.content}}
                >
                </div>
            </StyledContractTermination>
        )
    }
}

export default ContractTermination
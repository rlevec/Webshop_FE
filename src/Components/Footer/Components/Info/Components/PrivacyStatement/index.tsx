import {FC, ReactElement} from "react";

import {StyledPrivacyStatement} from "./styledPrivacyStatement";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";

import {
    useGetPrivacyStatementFormDataQuery
} from "../../../../../../Redux/Slices/apiSlice";

import {PrivacyStatementTypes} from "./types";

import {handleCurrentUrlAndDisableComponent} from "../../../../../../Utils/helpers";

import {CONST} from "../../../../../../Utils/CONST";
import {useAppSelector} from "../../../../../../Redux/Store/store";

const PrivacyStatement: FC = ():ReactElement => {
    const {
        data: isFetchedPrivacyStatementFormData,
        isFetching: isFetchingPrivacyStatementFormData,
        isLoading: isLoadingPrivacyStatementFormData,
        isError: isErrorPrivacyStatementFormData
    } = useGetPrivacyStatementFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const privacyStatementFormData: PrivacyStatementTypes = isFetchedPrivacyStatementFormData

    const deviceType = useAppSelector((state) => state?.device?.device)

    if(isFetchingPrivacyStatementFormData || isLoadingPrivacyStatementFormData) return <Loading/>
    else if(isErrorPrivacyStatementFormData || !isFetchedPrivacyStatementFormData) return <ServerError/>
    else {
        return (
            <StyledPrivacyStatement>
                {!handleCurrentUrlAndDisableComponent(CONST?.routes?.privacyStatementRoute)?.disableComponent && <BasicNavLinks />}
                <div className="privacy-statement-wrapper"
                     style={{width: handleCurrentUrlAndDisableComponent(CONST?.routes?.privacyStatementRoute)?.currentUrl ? `${deviceType === "desktop" ? 50 : 100}%` : undefined, padding: handleCurrentUrlAndDisableComponent(CONST?.routes?.privacyStatementRoute)?.currentUrl ? "20px" : undefined}}
                     dangerouslySetInnerHTML={{__html: handleCurrentUrlAndDisableComponent(CONST?.routes?.privacyStatementRoute)?.currentUrl ? `<h1>Privacy Statement</h1>` + privacyStatementFormData?.content : privacyStatementFormData?.content}}>
                </div>
            </StyledPrivacyStatement>
        )
    }
}

export default PrivacyStatement
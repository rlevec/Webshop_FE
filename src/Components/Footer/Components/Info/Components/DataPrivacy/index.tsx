import {FC, ReactElement} from "react";

import {StyledDataPrivacy} from "./styledDataPrivacy";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import ServerError from "../../../../../../Pages/ServerError";
import Loading from "../../../../../../Pages/Loading";

import {handleCurrentUrlAndDisableComponent} from "../../../../../../Utils/helpers";

import {
    useGetDataPrivacyFormDataQuery
} from "../../../../../../Redux/Slices/apiSlice";

import {DataPrivacyTypes} from "./types";

import {CONST} from "../../../../../../Utils/CONST";
import {useAppSelector} from "../../../../../../Redux/Store/store";

const DataPrivacy: FC = ():ReactElement => {
    const {
        data: isFetchedDataPrivacyFormData,
        isFetching: isFetchingDataPrivacyFormData,
        isLoading: isLoadingDataPrivacyFormData,
        isError: isErrorDataPrivacyFormData
    } = useGetDataPrivacyFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const dataPrivacyFormData: DataPrivacyTypes = isFetchedDataPrivacyFormData

    const deviceType = useAppSelector((state) => state?.device?.device)

    if(isFetchingDataPrivacyFormData || isLoadingDataPrivacyFormData) return <Loading/>
    else if(isErrorDataPrivacyFormData || !isFetchedDataPrivacyFormData) return <ServerError/>
    else {
        return (
            <StyledDataPrivacy>
                {!handleCurrentUrlAndDisableComponent(CONST?.routes?.dataPrivacyRoute)?.disableComponent && <BasicNavLinks />}
                <div className="data-privacy-wrapper"
                     style={{width: handleCurrentUrlAndDisableComponent(CONST?.routes?.dataPrivacyRoute)?.currentUrl ? `${deviceType === "desktop" ? 50 : 100}%` : undefined, padding: handleCurrentUrlAndDisableComponent(CONST?.routes?.dataPrivacyRoute)?.currentUrl ? "20px" : undefined}}
                     dangerouslySetInnerHTML={{__html: handleCurrentUrlAndDisableComponent(CONST?.routes?.dataPrivacyRoute)?.currentUrl ? `<h1>Data Privacy</h1>` + dataPrivacyFormData?.content : dataPrivacyFormData?.content}}>
                </div>
            </StyledDataPrivacy>
        )
    }
}

export default DataPrivacy

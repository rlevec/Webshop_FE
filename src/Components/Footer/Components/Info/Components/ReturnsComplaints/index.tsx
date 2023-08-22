import {FC, ReactElement} from "react";

import {StyledReturnsComplaints} from "./styledReturnsComplaints";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";

import {handleCurrentUrlAndDisableComponent} from "../../../../../../Utils/helpers";

import {
    useGetReturnsComplaintsFormDataQuery
} from "../../../../../../Redux/Slices/apiSlice";

import {ReturnsComplaintsTypes} from "./types";

import {CONST} from "../../../../../../Utils/CONST";

import {useAppSelector} from "../../../../../../Redux/Store/store";

const ReturnsComplaints: FC = ():ReactElement => {
    const {
        data: isFetchedReturnsComplaintsFormData,
        isFetching: isFetchingReturnsComplaintsFormData,
        isLoading: isLoadingReturnsComplaintsFormData,
        isError: isErrorReturnsComplaintsFormData
    } = useGetReturnsComplaintsFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const returnsComplaintsFormData: ReturnsComplaintsTypes = isFetchedReturnsComplaintsFormData

    const deviceType = useAppSelector((state) => state?.device?.device)

    if(isFetchingReturnsComplaintsFormData || isLoadingReturnsComplaintsFormData) return <Loading/>
    else if(isErrorReturnsComplaintsFormData || !isFetchedReturnsComplaintsFormData) return <ServerError/>
    return (
        <StyledReturnsComplaints>
            {!handleCurrentUrlAndDisableComponent(CONST?.routes?.returnsComplaintsRoute)?.disableComponent && <BasicNavLinks />}
            <div className="returns-complaints-wrapper"
                 style={{width: handleCurrentUrlAndDisableComponent(CONST?.routes?.returnsComplaintsRoute)?.currentUrl ? `${deviceType === "desktop" ? 50 : 100}%` : undefined, padding: handleCurrentUrlAndDisableComponent(CONST?.routes?.returnsComplaintsRoute)?.currentUrl ? "20px" : undefined}}
                 dangerouslySetInnerHTML={{__html: handleCurrentUrlAndDisableComponent(CONST?.routes?.returnsComplaintsRoute)?.currentUrl ? `<h1>Returns and Complaints</h1>` + returnsComplaintsFormData?.content : returnsComplaintsFormData?.content}}>
            </div>
        </StyledReturnsComplaints>
    )
}

export default ReturnsComplaints
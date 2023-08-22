import {FC, ReactElement} from "react";

import {StyledGeneralInfo} from "./styledGeneralInfo";

import {handleRoutes} from "./helpers";

import {Link} from "react-router-dom";

import {GeneralInfoFormDataTypes} from "./types";

import {useGetGeneralInfoFormDataQuery} from "../../../../Redux/Slices/apiSlice";

import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";



const GeneralInfo: FC = (): ReactElement => {
    const {
        data: isFetchedGeneralInfoFormData,
        isFetching: isFetchingGeneralInfoFormData,
        isLoading: isLoadingGeneralInfoFormData,
        isError: isErrorGeneralInfoFormData
    } = useGetGeneralInfoFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })

    const generalInfoFormDataData: GeneralInfoFormDataTypes[] = isFetchedGeneralInfoFormData


    if (isFetchingGeneralInfoFormData || isLoadingGeneralInfoFormData) return <Loading/>
    else if (isErrorGeneralInfoFormData || !isFetchedGeneralInfoFormData) return <ServerError/>
    else {
        return (
            <StyledGeneralInfo className="styledComponent-GeneralInfo">
                <div className="info_wrapper">
                    {generalInfoFormDataData?.map((el: GeneralInfoFormDataTypes) => {
                        const {id, frontendSlug, title} = el
                        return (
                            <div key={id} className="info_container">
                                <Link to={handleRoutes(frontendSlug)} onClick={() => window.scrollTo(0, 0)}
                                      className="info_content">
                                    {title}
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </StyledGeneralInfo>
        )
    }
}
export default GeneralInfo
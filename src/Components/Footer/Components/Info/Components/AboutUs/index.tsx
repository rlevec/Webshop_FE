import {FC, ReactElement} from "react";

import {StyledAboutUs} from "./styledAboutUs";

import {AboutUsTypes} from "./types";

import {useGetAboutUsFormDataQuery} from "../../../../../../Redux/Slices/apiSlice";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import ServerError from "../../../../../../Pages/ServerError";
import Loading from "../../../../../../Pages/Loading";

const AboutUs: FC = ():ReactElement => {
    const {
        data: isFetchedAboutUsFormData,
        isFetching: isFetchingAboutUsFormData,
        isLoading: isLoadingAboutUsFormData,
        isError: isErrorAboutUsFormData
    } = useGetAboutUsFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const aboutUsFormData: AboutUsTypes = isFetchedAboutUsFormData

    if(isFetchingAboutUsFormData || isLoadingAboutUsFormData) return <Loading/>
    else if(isErrorAboutUsFormData || !isFetchedAboutUsFormData) return <ServerError/>
    else {
        return (
            <StyledAboutUs className="styledComponent-AboutUs">
                <BasicNavLinks/>
                <div className="about_us-wrapper" dangerouslySetInnerHTML={{__html: aboutUsFormData?.content}}>
                </div>
            </StyledAboutUs>
        )
    }
}

export default AboutUs
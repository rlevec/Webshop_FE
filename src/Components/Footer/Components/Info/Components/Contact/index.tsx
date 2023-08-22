import {FC, ReactElement} from "react";

import {StyledContact} from "./styledContact";

import Help from "../../../../../../Modals/Help";
import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import ServerError from "../../../../../../Pages/ServerError";
import Loading from "../../../../../../Pages/Loading";

import {useGetContactFormDataQuery} from "../../../../../../Redux/Slices/apiSlice";

import {ContactTypes} from "./types";

const Contact:FC = ():ReactElement => {
    const {
        data: isFetchedContactFormData,
        isFetching: isFetchingContactFormData,
        isLoading: isLoadingContactFormData,
        isError: isErrorContactFormData
    } = useGetContactFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const contactFormData: ContactTypes = isFetchedContactFormData

    if(isFetchingContactFormData || isLoadingContactFormData) return <Loading/>
    else if(isErrorContactFormData || !isFetchedContactFormData) return <ServerError/>
    else {
        return (
            <StyledContact>
                <BasicNavLinks />
                <div className="contact_wrapper">
                    <div className="contact_container">
                        <div className="contact_help-container">
                            <Help />
                        </div>
                        <div className="contact_about-container" dangerouslySetInnerHTML={{__html: contactFormData?.content}}>
                        </div>
                    </div>
                </div>
            </StyledContact>
        )
    }
}

export default Contact
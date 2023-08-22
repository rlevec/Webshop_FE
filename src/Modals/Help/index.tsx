import {FC, ReactElement} from "react";

import {StyledHelp} from "./styledHelp";

import Question from "../../Assets/question.svg"
import Envelope from "../../Assets/envelope.svg"
import Clock from "../../Assets/clock.svg"
import Facebook from "../../Assets/facebook.svg"
import Instagram from "../../Assets/instagram.svg"
import Linkedin from "../../Assets/linkedin.svg"

import {HelpModalPropTypes, HelpFormDataTypes} from "./types";

import {Link} from "react-router-dom";

import {useGetHelpFormDataQuery} from "../../Redux/Slices/apiSlice";

import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";


export const Help: FC<HelpModalPropTypes> = (props): ReactElement => {
    const {modalActive, setModalActive} = props

    const {
        data: isFetchedHelpFormData,
        isFetching: isFetchingHelpFormData,
        isLoading: isLoadingHelpFormData,
        isError: isErrorHelpFormData
    } = useGetHelpFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})


    const helpFormData: HelpFormDataTypes = isFetchedHelpFormData


    if (isFetchingHelpFormData || isLoadingHelpFormData) return <Loading/>
    else if (isErrorHelpFormData || !isFetchedHelpFormData) return <ServerError/>
    else {
        return (
            <StyledHelp className="styledComponent-Help"
                        onMouseEnter={() => setModalActive?.({...modalActive, help: true})}
                        onMouseLeave={() => setModalActive?.({...modalActive, help: false})}>
                <div className="help_container">
                    <div className="help_title-container">
                        <div className="help_title">{helpFormData?.header}</div>
                    </div>
                    <div className="help_content-container">
                        <div className="help_content">
                            <Link to={"/faq"} onClick={() => window.scrollTo(0, 0)}>
                                <Question/>
                                <div>{helpFormData?.faq}</div>
                            </Link>
                        </div>
                        <a className="help_content" href={helpFormData?.mailRedirect}>
                            <Envelope/>
                            <div>{helpFormData?.mail}</div>
                        </a>
                        <div className="help_content">
                            <Clock/>
                            <div>{helpFormData?.time}</div>
                        </div>
                    </div>
                    <a className="help_phone-container" href={`tel: ${helpFormData?.phone}`}>
                        <div className="help_phone">{helpFormData?.phone}</div>
                    </a>
                    <div className="help_social-media-container">
                        <a className="help_social-content" href={helpFormData?.links?.facebook}>
                            <Facebook/>
                        </a>
                        <a className="help_social-content" href={helpFormData?.links?.instagram}>
                            <Instagram/>
                        </a>
                        <a className="help_social-content" href={helpFormData?.links?.linkedIn}>
                            <Linkedin/>
                        </a>
                    </div>
                </div>
            </StyledHelp>
        )
    }
}

export default Help
import {FC, ReactElement, useState} from "react";
import * as React from "react";

import {StyledNewsletter} from "./styledNewsletter";

import {Link} from "react-router-dom";

import {CONST} from "../../../../Utils/CONST";

import {useAppDispatch, useAppSelector} from "../../../../Redux/Store/store";
import {useGetFooterNewsletterFormDataQuery} from "../../../../Redux/Slices/apiSlice";
import {Dispatch} from "@reduxjs/toolkit";


import {
    handleSubmit,
    handleAlreadySubscribed
} from "./helpers";
import {handleIcons, handleChangeAndValidation, handleInputValue, handleFieldErrors} from "../../../../Utils/helpers";

import {isButtonDisabled} from "../../../../Utils/helpers";

import {
    NewsletterTypes,
    NewsletterStateQueryTypes,
    NewsletterStateFieldErrorTypes,
    NewsletterSelectorTypes
} from "./types";

import ServerError from "../../../../Pages/ServerError";
import Loading from "../../../../Pages/Loading";


const Newsletter: FC = (): ReactElement => {
    const {
        data: isFetchedFooterNewsletterFormData,
        isFetching: isFetchingFooterNewsletterFormData,
        isLoading: isLoadingFooterNewsletterFormData,
        isError: isErrorFooterNewsletterFormData
    } = useGetFooterNewsletterFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })


    const [query, setQuery] = useState<NewsletterStateQueryTypes>({email: "", gdpr: false})
    const [fieldError, setFieldError] = useState<NewsletterStateFieldErrorTypes>({email: false, gdpr: true})

    const footerNewsletterFormData: NewsletterTypes = isFetchedFooterNewsletterFormData

    const dispatch: Dispatch = useAppDispatch()

    const newsletterSelectorData: NewsletterSelectorTypes = useAppSelector((state) => state?.newsletter)



    if (isFetchingFooterNewsletterFormData || isLoadingFooterNewsletterFormData) return <Loading/>
    else if (isErrorFooterNewsletterFormData || !isFetchedFooterNewsletterFormData) return <ServerError/>
    else {
        return (
                <StyledNewsletter className="styledComponent-Newsletter">
                    <div className="newsletter_wrapper">
                        <div className="newsletter_container">
                            <div className="newsletter_container-left">
                                <div className="newsletter_icon-container">
                                    {handleIcons(footerNewsletterFormData?.frontendSlug)}
                                </div>
                                <div className="newsletter_title-desc-container">
                                    <div className="newsletter_title-container">
                                        <div className="newsletter_title">
                                            {footerNewsletterFormData?.title}
                                        </div>
                                    </div>
                                    <div className="newsletter-desc-container">
                                        <div className="newsletter_desc">
                                            {footerNewsletterFormData?.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="newsletter_container-right">
                                {handleAlreadySubscribed(query, newsletterSelectorData?.email) &&
                                  <div className="newsletter_existing-email-error">{footerNewsletterFormData?.error}</div>}
                                <div className="newsletter_input-button-container">
                                    <div className="newsletter_input-container">
                                        <input className="newsletter_input-regular"
                                               placeholder={footerNewsletterFormData?.input?.placeholder}
                                               name={footerNewsletterFormData?.input?.name}
                                               type={footerNewsletterFormData?.input?.type}
                                               value={handleInputValue(footerNewsletterFormData?.input?.frontendSlug, query)}
                                               onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeAndValidation(e?.target?.value, footerNewsletterFormData?.input?.frontendSlug, query, setQuery, fieldError, setFieldError, footerNewsletterFormData?.input?.validation)}
                                        />
                                        <div
                                            className="newsletter_field-error-container">{handleFieldErrors(footerNewsletterFormData?.input?.frontendSlug, footerNewsletterFormData?.input?.error, fieldError)}</div>
                                        <div>{handleIcons(footerNewsletterFormData?.input?.frontendSlug)}</div>
                                    </div>
                                    <div className="newsletter_button-container">
                                        <button disabled={isButtonDisabled(fieldError, query, handleAlreadySubscribed(query, newsletterSelectorData?.email))}
                                                onClick={() => handleSubmit(query, setQuery, fieldError, setFieldError, dispatch)}>
                                            {footerNewsletterFormData?.button?.title}
                                        </button>
                                    </div>
                                </div>
                                <div className="newsletter_checkbox-gdpr-container">
                                    <div className="newsletter_checkbox-container">
                                        <input className="newsletter_input-regular"
                                               type={footerNewsletterFormData?.checkbox?.type}
                                               checked={query?.gdpr}
                                               onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                                   const newCheckedValue: boolean = e.target.checked;
                                                   setQuery({...query, gdpr: newCheckedValue});
                                                   setFieldError({...fieldError, gdpr: newCheckedValue});
                                               }}
                                        />
                                        {fieldError?.gdpr && <div
                                          className="newsletter_gdpr-error-container">{footerNewsletterFormData?.checkbox?.error}</div>}
                                    </div>
                                    <div className="newsletter_gdpr-container">
                                        <div
                                            className="newsletter_gdpr-paragraph-one">{footerNewsletterFormData?.checkbox?.titleOne}</div>
                                        <Link to={CONST?.routes?.privacyStatementRoute} onClick={() => window.scrollTo(0, 0)}
                                              className="newsletter_gdpr-paragraph-two">{footerNewsletterFormData?.checkbox?.titleTwo}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </StyledNewsletter>
        )
    }
}

export default Newsletter
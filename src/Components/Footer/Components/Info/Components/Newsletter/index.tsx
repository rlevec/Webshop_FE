import {FC, ReactElement, useState} from "react";

import {StyledNewsletter} from "./styledNewsletter";

import LogoOne from "../../../../../../Assets/logo1.png"
import LogoTwo from "../../../../../../Assets/logo2.png"
import Marketing from "../../../../../../Assets/marketing.png"

import {
    handleNewsletterFormSubmit,
    isNewsletterFormButtonDisabled,
    useHandleEmailErrorScroll,
    useHandleSuccessTimeout,
    useHandleErrorTimeout
} from "./helpers";
import {
    handleChangeAndValidation,
    handleIcons,
    handleInputValue,
    handleFieldErrors
} from "../../../../../../Utils/helpers";

import {useAppSelector, useAppDispatch} from "../../../../../../Redux/Store/store";

import {
    NewsletterInteractiveFormDataFormInputsTypes,
    NewsletterInteractiveFormDataStateQueryTypes,
    NewsletterInteractiveFormDataFormDataTypes,
    NewsletterInteractiveFormDataStateFieldErrorTypes
} from "./types";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";

import {
    useGetNewsletterInteractiveFormDataQuery
} from "../../../../../../Redux/Slices/apiSlice";
import {Dispatch} from "@reduxjs/toolkit";

const Newsletter: FC = (): ReactElement => {
    const {
        data: isFetchedNewsletterInteractiveFormData,
        isFetching: isFetchingNewsletterInteractiveFormData,
        isLoading: isLoadingNewsletterInteractiveFormData,
        isError: isErrorNewsletterInteractiveFormData
    } = useGetNewsletterInteractiveFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })


    const [query, setQuery] = useState<NewsletterInteractiveFormDataStateQueryTypes>({
        email: "",
        firstName: "",
        lastName: "",
        checked: false
    })
    const [fieldError, setFieldError] = useState<NewsletterInteractiveFormDataStateFieldErrorTypes>({
        email: false,
        firstName: false,
        lastName: false,
        checked: false
    })
    const [submittedSuccesfully, setSubmittedSuccesfully] = useState<boolean>(false)
    const [submittedError, setSubmitError] = useState<boolean>(false)

    const newsletterSelectorEmail: string = useAppSelector((state) => state?.newsletter?.email)

    const newsletterInteractiveFormData: NewsletterInteractiveFormDataFormDataTypes = isFetchedNewsletterInteractiveFormData

    const dispatch: Dispatch = useAppDispatch()

    useHandleEmailErrorScroll(newsletterSelectorEmail, query, setSubmitError)

    useHandleSuccessTimeout(submittedSuccesfully, setSubmittedSuccesfully)

    useHandleErrorTimeout(submittedError, setSubmitError)

    if (isFetchingNewsletterInteractiveFormData || isLoadingNewsletterInteractiveFormData) return <Loading/>
    else if (isErrorNewsletterInteractiveFormData || !isFetchedNewsletterInteractiveFormData) return <ServerError/>
    else {
        return (
            <StyledNewsletter>
                <BasicNavLinks/>
                <div className="newsletter_wrapper">
                    {submittedError && <div
                      className="newsletter_form-error">Email has
                      already been submitted for the newsletter</div>}
                    {submittedSuccesfully && <div
                      className="newsletter_success-message">Email has been succesfully submitted for the
                      newsletter</div>}
                    <div className="newsletter_logo-container">
                        <img src={LogoOne} alt="logo-one"/>
                        <img src={LogoTwo} alt="logo-one"/>
                    </div>
                    <div className="newsletter_content-container"
                         dangerouslySetInnerHTML={{__html: newsletterInteractiveFormData?.content}}>
                    </div>
                    <div className="newsletter_mandatory-container">
                        <div className="newsletter_mandatory-apendix">*</div>
                        <div className="newsletter_mandatory-text">mandatory field</div>
                    </div>
                    <div className="newsletter_marketing-container">
                        {newsletterInteractiveFormData?.inputs.map((el: NewsletterInteractiveFormDataFormInputsTypes) => {
                            const {id, placeholder, name, type, validation, error, frontendSlug} = el
                            return (
                                <div className="newsletter_marketing-input-error-container" key={id}>
                                    <input
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeAndValidation(e?.target?.value, frontendSlug, query, setQuery, fieldError, setFieldError, validation)}
                                        value={handleInputValue(frontendSlug, query)}
                                        name={name}
                                        type={type}
                                        placeholder={placeholder}
                                    />
                                    <div
                                        className="inputs_field-icons">{handleIcons(frontendSlug)}</div>
                                    <div
                                        className="inputs_field-error">{handleFieldErrors(frontendSlug, error, fieldError)}</div>
                                    {frontendSlug === "email" && query?.email === "" &&
                                      <div className="newsletter_mandatory-apendix">*</div>}
                                </div>
                            )
                        })}
                        <div className="newsletter_marketing-allowance-container">
                            <div className="newsletter_marketing-allowance-title-container">
                                <div
                                    className="newsletter_marketing-allowance_title">{newsletterInteractiveFormData?.marketing?.title}</div>
                                <div className="newsletter_marketing-allowance_mandatory-container">*</div>
                            </div>
                            <div
                                className="newsletter_marketing-allowance_paragraph-container">{newsletterInteractiveFormData?.marketing?.paragraphOne}</div>
                            <div className="newsletter_marketing-allowance_input-container">
                                <input
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                                        const newCheckedValue: boolean = e.target.checked;
                                        setQuery({...query, checked: newCheckedValue});
                                        setFieldError({...fieldError, checked: false});
                                    }}
                                    checked={query?.checked}
                                    type={newsletterInteractiveFormData?.marketing?.input?.type}
                                />
                                <label>{newsletterInteractiveFormData?.marketing?.input?.label}</label>
                                {!query?.checked && <div
                                  className="newsletter_marketing-allowance_mandatory-container">{newsletterInteractiveFormData?.marketing?.input?.error}</div>}
                            </div>
                            <div
                                className="newsletter_marketing-allowance_paragraph-container">{newsletterInteractiveFormData?.marketing?.paragraphTwo}
                            </div>
                            <div className="newsletter_marketing-allowance_mailchimp-container">
                                <img src={Marketing} alt="logo"/>
                                <div
                                    dangerouslySetInnerHTML={{__html: newsletterInteractiveFormData?.marketing?.mailchimp?.paragraph}}/>
                            </div>
                            <div className="newsletter_marketing-allowance_button-container">
                                <button
                                    disabled={isNewsletterFormButtonDisabled(fieldError, query, newsletterSelectorEmail)}
                                    onClick={() => handleNewsletterFormSubmit(fieldError, query, setQuery, dispatch, setSubmittedSuccesfully)}
                                >
                                    {newsletterInteractiveFormData?.button?.title}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledNewsletter>
        )
    }
}

export default Newsletter
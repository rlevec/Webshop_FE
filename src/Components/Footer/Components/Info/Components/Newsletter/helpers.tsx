import {Dispatch} from "@reduxjs/toolkit";
import {
    setNewsletterMail,
    setNewsletterGdpr,
    setNewsletterLastName,
    setNewsletterFirstName
} from "../../../../../../Redux/Slices/newsletterSlice";

import { useCallback, useEffect} from "react";
import * as React from "react";


import {NewsletterInteractiveFormDataStateFieldErrorTypes, NewsletterInteractiveFormDataStateQueryTypes} from "./types";



//dispatch data to redux store on submit and set field values to "" to reset inputs
export const handleNewsletterFormSubmit = (fieldError: NewsletterInteractiveFormDataStateFieldErrorTypes, query: NewsletterInteractiveFormDataStateQueryTypes, setQuery: Function, dispatch: Dispatch, setSubmittedSuccesfully: Function): void | null => {
    dispatch(setNewsletterLastName({lastName: query?.lastName}))
    dispatch(setNewsletterFirstName({firstName: query?.firstName}))
    dispatch(setNewsletterMail({email: query?.email}))
    dispatch(setNewsletterGdpr({gdpr: query?.checked}))
    setQuery({...query, email: "", fname: "", lname: "", checked: false})
    setSubmittedSuccesfully(true)
    window.scrollTo(0, 0)
}



//disable input based on fieldError/query state values
export const isNewsletterFormButtonDisabled = (fieldError: NewsletterInteractiveFormDataStateFieldErrorTypes, query: NewsletterInteractiveFormDataStateQueryTypes, newsletterSelectorEmail: string): boolean => {
    if (fieldError?.email === true || query?.email === "" || query?.checked === false || query?.email === newsletterSelectorEmail) return true
    else return false
}


//if email already subscribed to newsletter scroll to top of the form to present the form error
export const useHandleEmailErrorScroll = (newsletterSelectorEmail: string, query: NewsletterInteractiveFormDataStateQueryTypes, setSubmitError: Function): void => {
   let emailsMatch: boolean = newsletterSelectorEmail === query?.email && query?.email !== ""

    const handleEmailErrorScrollCallback = useCallback((): void => {
        if(emailsMatch) {
            window.scrollTo(0, 0)
            setSubmitError(true)
        }
    }, [emailsMatch])

    useEffect((): void => {
        handleEmailErrorScrollCallback()
    }, [handleEmailErrorScrollCallback])
}


export const useHandleErrorTimeout = (submittedError: boolean, setSubmitError: Function): void => {
    const handleErrorTimeout = useCallback(() => {
        if (submittedError) {
            let timeout: ReturnType<typeof setTimeout> = setTimeout((): void => {
                setSubmitError(false)
            }, 2000)

            return () => clearTimeout(timeout)
        }
    }, [submittedError])

    useEffect((): void => {
        handleErrorTimeout()
    }, [handleErrorTimeout])
}

export const useHandleSuccessTimeout = (submittedSuccesfully: boolean, setSubmittedSuccesfully: Function): void => {
    const handleSuccessTimeout = useCallback(() => {
        if (submittedSuccesfully) {
            let timeout: ReturnType<typeof setTimeout> = setTimeout((): void => {
                setSubmittedSuccesfully(false)
            }, 2000)

            return () => clearTimeout(timeout)
        }
    }, [submittedSuccesfully])

    useEffect(() => {
        handleSuccessTimeout()
    }, [handleSuccessTimeout])
}
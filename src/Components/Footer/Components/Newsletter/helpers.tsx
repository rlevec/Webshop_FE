import {
    NewsletterStateQueryTypes,
    NewsletterStateFieldErrorTypes
} from "./types";

import * as React from "react";

import {setNewsletterGdpr, setNewsletterMail} from "../../../../Redux/Slices/newsletterSlice";
import {Dispatch} from "@reduxjs/toolkit";



//dispatch newsletter data into redux store
//set appropriate states to clear fields and error
export const handleSubmit = (query: NewsletterStateQueryTypes, setQuery: Function, fieldError: NewsletterStateFieldErrorTypes, setFieldError: Function, dispatch: Dispatch): void | null => {
    dispatch(setNewsletterMail({email: query?.email}))
    dispatch(setNewsletterGdpr({gdpr: query?.gdpr}))
    setQuery({...query, email: "", gdpr: false})
    setFieldError({...query, email: false, gdpr: true})
}

//check in redux store whether user has already been subscribed with provided email
export const handleAlreadySubscribed = (query: NewsletterStateQueryTypes, newsletterSelectorDataEmail: string): boolean => {
    if(query?.email !== "") return query?.email === newsletterSelectorDataEmail;
    else return false
}
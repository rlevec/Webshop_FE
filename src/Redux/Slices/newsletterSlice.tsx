import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {NewsletterStateTypes} from "./types";



const initialState: NewsletterStateTypes = {
    email: "",
    gdpr: null,
    firstName: "",
    lastName: "",
}

export const NewsletterSlice = createSlice({
        name: "newsletter",
        initialState,
        reducers: {
            setNewsletterMail: (state, action: PayloadAction<{ email: string }>) => {
                state.email = action.payload.email
            },
            setNewsletterGdpr: (state, action: PayloadAction<{ gdpr: boolean | null }>) => {
                state.gdpr = action.payload.gdpr
            },
            setNewsletterFirstName: (state, action: PayloadAction<{ firstName: string }>) => {
                state.firstName = action.payload.firstName
            },
            setNewsletterLastName: (state, action: PayloadAction<{ lastName: string }>) => {
                state.lastName = action.payload.lastName
            },
        },
    }
)

export default NewsletterSlice.reducer
export const {setNewsletterMail, setNewsletterGdpr, setNewsletterLastName, setNewsletterFirstName} = NewsletterSlice.actions
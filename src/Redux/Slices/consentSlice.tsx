import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ConsentInitialStateTypes} from "./types";


const initialState: ConsentInitialStateTypes = {
        cookies: true,
        marketingServices: false,
        analytics: false,
}

export const ConsentSlice = createSlice({
    name: "consentData",
    initialState,
    reducers: {
        setConsentDataCookies: (state, action: PayloadAction<{ cookies: boolean }>) => {
            state.cookies = action.payload.cookies
        },
        setConsentDataMarketingServices: (state, action: PayloadAction<{ marketingServices: boolean }>) => {
            state.marketingServices = action.payload.marketingServices
        },
        setConsentDataAnalytics: (state, action: PayloadAction<{ analytics: boolean }>) => {
            state.analytics = action.payload.analytics
        },
    }
})

export default ConsentSlice.reducer

export const {setConsentDataCookies, setConsentDataMarketingServices, setConsentDataAnalytics} = ConsentSlice.actions
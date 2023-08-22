import {useCallback} from "react";
import {setConsentDataAnalytics, setConsentDataMarketingServices} from "../../../../../../Redux/Slices/consentSlice";
import {Dispatch} from "@reduxjs/toolkit";
import {ConsentInitialStateTypes} from "../../../../../../Redux/Slices/types";


//everytime onChange event is triggered, dispatch appropriate data and memoize the function
export const useHandleMarketingServicesChange = (dispatch: Dispatch, consentData: ConsentInitialStateTypes) => useCallback(() => {
    dispatch(
        setConsentDataMarketingServices({
            marketingServices: !consentData?.marketingServices
        })
    );
}, [consentData, dispatch]);


//everytime onChange event is triggered, dispatch appropriate data and memoize the function
export const useHandleAnalyticsChange = (dispatch: Dispatch, consentData: ConsentInitialStateTypes) => useCallback(() => {
    dispatch(
        setConsentDataAnalytics({
            analytics: !consentData?.analytics
        })
    );
}, [consentData, dispatch]);
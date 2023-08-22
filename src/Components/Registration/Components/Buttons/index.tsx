import {StyledButtons} from "./styledButtons";

import {FC} from "react";
import * as React from "react";

import {
    handleRegistrationCurrentStep,
    handleRegistrationDisabledByStep,
    handleRegistrationSubmit,
} from "./helpers";


import {RegistrationButtonsPropTypes} from "./types";

import {useGetRegisteredUsersQuery, usePostRegisteredUserMutation, useGetRegistrationFormDataQuery} from "../../../../Redux/Slices/apiSlice";

import {NavigateFunction, useNavigate} from "react-router-dom";

import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";

const Buttons:FC<RegistrationButtonsPropTypes> = (props) => {
    const {
        currentStep,
        minStep,
        maxStep,
        setCurrentStep,
        previousButtonLabel,
        query,
        nextButtonLabel,
        termsAccepted,
        fieldError,
        setSubmitError,
        submitError,
        setQuery,
        singUpButtonLabel
    } = props

    const navigate:NavigateFunction = useNavigate()

    const {
        data: isFetchedRegistrationFormData,
        isFetching: isFetchingRegistrationFormData,
        isLoading: isLoadingRegistrationFormData,
        isError: isErrorRegistrationFormData
    } = useGetRegistrationFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const {
        data: isFetchedRegisteredUsersData,
        isFetching: isFetchingRegisteredUsersData,
        isLoading: isLoadingRegisteredUsersData,
        isError: isErrorRegisteredUsersData
    } = useGetRegisteredUsersQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const [postRegistrationData, {
        isError: isErrorPostRegistrationData,
        isLoading: isLoadingPostRegistrationData
    }] = usePostRegisteredUserMutation()



    if(isFetchingRegistrationFormData || isFetchingRegisteredUsersData || isLoadingRegistrationFormData || isLoadingRegisteredUsersData || isLoadingPostRegistrationData) return <Loading/>
    else if(isErrorRegisteredUsersData || isErrorRegistrationFormData || isErrorPostRegistrationData || !isFetchedRegisteredUsersData || !isFetchedRegistrationFormData) return <ServerError/>
    else {
        return (
            <StyledButtons className="styledComponent-Buttons">
                {
                    currentStep !== minStep && (
                        <div className="registration_form_prev-button-container">
                            <button disabled={false}
                                    onClick={() => handleRegistrationCurrentStep(currentStep, setCurrentStep, "previous", null)}>{previousButtonLabel}</button>
                        </div>
                    )
                }
                {
                    currentStep !== maxStep && (
                        <div className="registration_form_next-button-container">
                            <button
                                disabled={handleRegistrationDisabledByStep(fieldError, currentStep, query, isFetchedRegistrationFormData)}
                                onClick={() => handleRegistrationCurrentStep(currentStep, setCurrentStep, "next", maxStep as number)}>
                                {nextButtonLabel}
                            </button>
                        </div>
                    )
                }
                {
                    currentStep === maxStep && termsAccepted && (
                        <div className="registration_form_next-button-container">
                            <button
                                onClick={() => handleRegistrationSubmit(isFetchedRegisteredUsersData, query, setSubmitError, submitError, setQuery, setCurrentStep, postRegistrationData, navigate)}>
                                {singUpButtonLabel}
                            </button>
                        </div>
                    )
                }
            </StyledButtons>
        )
    }
}

export default Buttons
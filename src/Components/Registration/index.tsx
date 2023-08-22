import {FC, ReactElement, useState} from "react";
import * as React from 'react'

import {StyledRegistration} from "./styledRegistration";

import {Link} from "react-router-dom";

import Home from "../../Assets/home.svg";

import {useGetRegistrationFormDataQuery} from "../../Redux/Slices/apiSlice";


import CustomTerms from "./Components/Inputs/CustomTerms";
import CustomSelect from "./Components/Inputs/CustomSelect";
import CustomRadio from "./Components/Inputs/CustomRadio";
import Regular from "./Components/Inputs/Regular";
import Buttons from "./Components/Buttons";
import ProgressBar from "./Components/ProgressBar";
import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";

import {
    renderRegistrationSubmitError,
    handleStepValues
} from "./helpers";


import {
    RegistrationFormDataInputTypes,
    RegistrationQueryStateTypes,
    RegistrationSelectDropdownInputStateTypes,
    RegistrationFieldErrorStateTypes,
    RegistrationSubmitErrorTypes,
    RegistrationFormDataTypes
} from "./types";


const Registration: FC = (): ReactElement => {
    const {
        data: isFetchedRegistrationFormData,
        isFetching: isFetchingRegistrationFormData,
        isLoading: isLoadingRegistrationFormData,
        isError: isErrorRegistrationFormData
    } = useGetRegistrationFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })


    const [dropdownActive, setDropdownActive] = useState<RegistrationSelectDropdownInputStateTypes>({
        country: false,
        month: false,
        year: false
    })
    const [currentStep, setCurrentStep] = useState<number>(1)

    const [termsAccepted, setTermsAccepted] = useState<boolean>(false)

    const [query, setQuery] = useState<RegistrationQueryStateTypes>(
        {
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            gender: "",
            dob: "",
            country: "",
            city: "",
            zip: "",
            address: "",
            creditCard: "",
            expireMonth: "",
            expireYear: "",
            ccv: ""
        }
    )
    const [fieldError, setFieldError] = useState<RegistrationFieldErrorStateTypes>(
        {
            email: false,
            username: false,
            password: false,
            confirmPassword: false,
            firstName: false,
            lastName: false,
            gender: false,
            dob: false,
            country: false,
            city: false,
            zip: false,
            address: false,
            creditCard: false,
            expireMonth: false,
            expireYear: false,
            ccv: false
        }
    )

    const [submitError, setSubmitError] = useState<RegistrationSubmitErrorTypes>({
        emailError: false,
    })


    let registrationFormData: RegistrationFormDataTypes = isFetchedRegistrationFormData


    if (isFetchingRegistrationFormData || isLoadingRegistrationFormData) return <Loading />
    else if (isErrorRegistrationFormData || !registrationFormData) return <ServerError/>
    else {
        return (
            <StyledRegistration className="Styled_Component-Registration"
                                terms={handleStepValues(registrationFormData, currentStep)?.inputsByStep?.[0]?.frontendSlug === "terms"} dateSelected={query?.dob !== ""}>
                <div className="registration_wrapper">
                    <div className="registration_form-container">
                        <div className="registration_form_wrapper">
                            <Link to={"/"} className="registration_form_home-link-container">
                                <Home/>
                            </Link>
                            <p className="registration_form_submit-error">{renderRegistrationSubmitError(submitError, isFetchedRegistrationFormData)}</p>
                            <div className="registration_form_title-container">
                                <div className="registration_form_title">
                                    {registrationFormData?.formLabel}
                                </div>
                                <ProgressBar currentStep={currentStep}/>
                            </div>
                            <div className="registration_form_inputs-container">
                                <div className="inputs_inputs-container">
                                    {handleStepValues(registrationFormData, currentStep)?.inputsByStep?.map((el: RegistrationFormDataInputTypes): ReactElement => {
                                        const {
                                            frontendSlug,
                                            name,
                                            placeholder,
                                            type,
                                            validation,
                                            error,
                                            options,
                                            content,
                                            termsAcceptBtnLabel,
                                            termsDeclineBtnLabel,
                                            max,
                                            min,
                                            fieldExampleData
                                        } = el

                                        if (type === "customRadio") {
                                            return (
                                                <CustomRadio frontendSlug={frontendSlug as string}
                                                             query={query}
                                                             setQuery={setQuery}
                                                             error={error as string}
                                                             fieldError={fieldError}
                                                             options={options as string[] | number[]}/>
                                            )
                                        } else if (type === "customSelect") {
                                            return (
                                                <CustomSelect frontendSlug={frontendSlug as string}
                                                              dropdownActive={dropdownActive}
                                                              setDropdownActive={setDropdownActive} query={query}
                                                              placeholder={placeholder as string}
                                                              error={error as string}
                                                              fieldError={fieldError}
                                                              options={options as string[] | number[]}
                                                              setQuery={setQuery}
                                                />
                                            )
                                        } else if (type === "customTerms") {
                                            return (
                                                <CustomTerms
                                                    frontendSlug={frontendSlug as string}
                                                    content={content as string}
                                                    setTermsAccepted={setTermsAccepted}
                                                    termsAcceptBtnLabel={termsAcceptBtnLabel as string}
                                                    termsDeclineBtnLabel={termsDeclineBtnLabel as string}
                                                />
                                            )
                                        } else {
                                            return (
                                                <Regular query={query}
                                                         frontendSlug={frontendSlug as string}
                                                         setQuery={setQuery}
                                                         fieldError={fieldError}
                                                         setFieldError={setFieldError}
                                                         validation={validation as string}
                                                         placeholder={placeholder as string}
                                                         min={min as string}
                                                         max={max as string}
                                                         type={type as string}
                                                         name={name as string}
                                                         error={error as string}
                                                         fieldExampleData={fieldExampleData as string}
                                                />
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <Buttons currentStep={currentStep}
                                     minStep={handleStepValues(registrationFormData, currentStep)?.minStep as number}
                                     maxStep={handleStepValues(registrationFormData, currentStep)?.maxStep as number}
                                     setCurrentStep={setCurrentStep}
                                     previousButtonLabel={registrationFormData?.previousButtonLabel as string}
                                     query={query}
                                     nextButtonLabel={registrationFormData?.nextButtonLabel as string}
                                     termsAccepted={termsAccepted}
                                     fieldError={fieldError}
                                     setSubmitError={setSubmitError}
                                     submitError={submitError} setQuery={setQuery}
                                     singUpButtonLabel={registrationFormData?.singUpButtonLabel as string}/>
                            <Link to={"/login"} className="registration_form_account-exists-container">
                                <div
                                    className="registration_form_account-exists">{registrationFormData?.loginRedirectLabel}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </StyledRegistration>
        )
    }
}
export default Registration;
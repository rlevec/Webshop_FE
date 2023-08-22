import {FC, ReactElement, useState} from "react";
import * as React from 'react'

import {CONST} from "../../Utils/CONST";

import {StyledLogin} from "./styledLogin";

import {Link} from "react-router-dom";

import Home from "../../Assets/home.svg";

import ForgotPassword from "../../Modals/ForgotPassword";
import Inputs from "./Components/Inputs";
import Buttons from "./Components/Buttons";
import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";

import {
    LoginFormDataInputTypes,
    LoginFormDataTypes,
    LoginSubmitErrorStateTypes,
    LoginFieldErrorStateTypes,
    LoginQueryStateTypes
} from "./types";

import {renderSubmitError} from "./helpers";

import {useGetLoginFormDataQuery} from "../../Redux/Slices/apiSlice";
const Login: FC = (): ReactElement | null => {

    const {
        data: isFetchedLoginFormData,
        isFetching: isFetchingLoginFormData,
        isLoading: isLoadingLoginFormData,
        isError: isErrorLoginFormData
    } = useGetLoginFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const [query, setQuery] = useState<LoginQueryStateTypes>({email: "", password: ""})
    const [fieldError, setFieldError] = useState<LoginFieldErrorStateTypes>({email: false, password: false})
    const [forgotPasswordActive, setForgotPasswordActive] = useState<boolean>(false)
    const [submitError, setSubmitError] = useState<LoginSubmitErrorStateTypes>({
        emailError: false,
        passwordError: false,
        nonExistent: false
    })

    let loginFormData: LoginFormDataTypes = isFetchedLoginFormData

    if (isLoadingLoginFormData || isFetchingLoginFormData) return <Loading/>
    else if (isErrorLoginFormData || !isFetchedLoginFormData) return <ServerError />
    else {
        return (
            <StyledLogin className="Styled_Component-Login">
                <div className="login_wrapper">
                    <div className="login_form-wrapper">
                        {forgotPasswordActive && <ForgotPassword setForgotPasswordActive={setForgotPasswordActive}/>}
                        <div className="login_form-wrapper">
                                <Link to={CONST?.routes?.root} className="login_form_home-link-container">
                                    <Home/>
                                </Link>
                            <div
                                className="login_form_submit-error">{renderSubmitError(submitError, loginFormData as LoginFormDataTypes)}</div>
                            <div className="login_form_header-container">
                                <h3 className='login_form_header'>{loginFormData?.formLabel}</h3>
                            </div>
                            <div className="login_form_inputs-container">
                                <div className="inputs_inputs-wrapper">
                                    {loginFormData?.inputs?.map((el: LoginFormDataInputTypes) => {
                                        const {
                                            id,
                                            placeholder,
                                            validation,
                                            frontendSlug,
                                            error,
                                            name,
                                            type
                                        } = el


                                        return (
                                            <div key={id} className="inputs_input-container">
                                                <Inputs
                                                    frontendSlug={frontendSlug}
                                                    type={type}
                                                    placeholder={placeholder}
                                                    query={query}
                                                    fieldError={fieldError}
                                                    validation={validation}
                                                    name={name}
                                                    setQuery={setQuery}
                                                    setFieldError={setFieldError}
                                                    error={error}/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <Buttons setForgotPasswordActive={setForgotPasswordActive}
                                     forgotPasswordLabelOne={loginFormData?.forgotPasswordLabelOne as string}
                                     forgotPasswordLabelTwo={loginFormData?.forgotPasswordLabelTwo as string}
                                     fieldError={fieldError} query={query} setSubmitError={setSubmitError}
                                     submitError={submitError} setQuery={setQuery}
                                     buttonLabel={loginFormData?.buttonLabel as string}/>
                        </div>
                    </div>
                </div>
            </StyledLogin>
        )
    }
}

export default Login
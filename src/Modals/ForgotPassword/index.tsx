import {StyledForgotPassword} from "./styledForgotPassword";

import {FC, ReactElement, useRef, useState} from "react";
import * as React from "react";

import Close from "../../Assets/close.svg"

import {useHandleClickOutside} from "../../Utils/helpers";

import {isButtonDisabled, handleIcons, handleChangeAndValidation, handleInputValue, handleFieldErrors} from "../../Utils/helpers";

import {
    ForgotPasswordFormTypes,
    ForgotPasswordQueryTypes,
    ForgotPasswordFieldErrorTypes,
    ForgotPasswordPropTypes
} from "./types";


import {useGetForgotPasswordFormDataQuery} from "../../Redux/Slices/apiSlice";

import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";



const ForgotPassword: FC<ForgotPasswordPropTypes> = (props): ReactElement => {
    const {
        data: isFecthedForgotPasswordFormData,
        isFetching: isFetchingForgotPasswordFormData,
        isLoading: isLoadingForgotPasswordFormData,
        isError: isErrorForgotPasswordFormData
    } = useGetForgotPasswordFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })


    const {setForgotPasswordActive} = props

    const forgotPasswordModalRef: React.RefObject<HTMLDivElement> = useRef(null)

    const [query, setQuery] = useState<ForgotPasswordQueryTypes>({
        email: ""
    })

    const [fieldError, setFieldError] = useState<ForgotPasswordFieldErrorTypes>({email: false})

    let forgotPasswordFormData: ForgotPasswordFormTypes = isFecthedForgotPasswordFormData

    useHandleClickOutside(setForgotPasswordActive, forgotPasswordModalRef)


    if (isFetchingForgotPasswordFormData || isLoadingForgotPasswordFormData) return <Loading/>
    else if (isErrorForgotPasswordFormData || !isFecthedForgotPasswordFormData) return <ServerError/>
    else {
        return (
            <StyledForgotPassword ref={forgotPasswordModalRef} className="Styled_Component-ForgotPassword">
                <div className="forgot_password_wrapper">
                    <div className="forgot_password_close-icon-container"
                         onClick={() => props?.setForgotPasswordActive(false)}>
                        <Close/>
                    </div>
                    <div className="forgot_password_form-wrapper">
                        <div className="forgot_password_form_header-container">
                            <div className="forgot_password_form_header">{forgotPasswordFormData?.formLabel}</div>
                        </div>
                        <div className="forgot_password_form_inputs-container">
                            <div className="input_wrapper">
                                <input
                                    value={handleInputValue(forgotPasswordFormData?.inputs?.[0]?.placeholder as string, query)}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void | null => handleChangeAndValidation(e?.target?.value, forgotPasswordFormData?.inputs?.[0]?.frontendSlug as string, query, setQuery as Function, fieldError, setFieldError as Function, forgotPasswordFormData?.inputs?.[0]?.validation as string)}
                                    name={forgotPasswordFormData?.inputs?.[0]?.name}
                                    placeholder={forgotPasswordFormData?.inputs?.[0]?.placeholder}
                                    autoComplete="off"
                                    type={forgotPasswordFormData?.inputs?.[0]?.type}
                                />
                                <div
                                    className="inputs_field-icons">{handleIcons(forgotPasswordFormData?.inputs?.[0]?.frontendSlug as string)}</div>
                                <div
                                    className="inputs_field-error">{handleFieldErrors(forgotPasswordFormData?.inputs?.[0]?.frontendSlug as string, forgotPasswordFormData?.inputs?.[0]?.error as string, fieldError)}</div>
                            </div>
                        </div>
                        <div className="forgot_password_form_button-container">
                            <button className="forgot_password_form_button" disabled={isButtonDisabled(fieldError, query)}  onClick={() => setForgotPasswordActive(false)}>
                                {forgotPasswordFormData?.buttonLabel}
                            </button>
                        </div>
                    </div>
                </div>
            </StyledForgotPassword>
        )
    }
}

export default ForgotPassword
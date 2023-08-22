import {StyledButtons} from "./styledButtons";

import {CONST} from "../../../../Utils/CONST";

import {FC, ReactElement} from "react";
import * as React from "react";

import {Link, NavigateFunction} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import SignUp from "../../../../Assets/sing-up.svg";

import {handleSubmit} from "./helpers";

import {isButtonDisabled} from "../../../../Utils/helpers";

import {LoginButtonsProps} from "./types";

import {useAppDispatch} from "../../../../Redux/Store/store";
import {useGetRegisteredUsersQuery, usePostLoggedUserMutation} from "../../../../Redux/Slices/apiSlice";
import {Dispatch} from "@reduxjs/toolkit";

import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";


const Buttons: FC<LoginButtonsProps> = (props): ReactElement => {
    const {
        setForgotPasswordActive,
        setQuery,
        submitError,
        setSubmitError,
        forgotPasswordLabelOne,
        forgotPasswordLabelTwo,
        fieldError,
        query,
        buttonLabel,
    } = props


    const [postLoginData, {
        isError: isErrorPostLoginData,
        isLoading: isLoadingPostLoginData
    }] = usePostLoggedUserMutation()

    const {
        data: isFetchedRegisteredUsersData,
        isFetching: isFetchingRegisteredUsersData,
        isLoading: isLoadingRegisteredUsersData,
        isError: isErrorRegisteredUsersData
    } = useGetRegisteredUsersQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const dispatch: Dispatch = useAppDispatch()

    const navigate: NavigateFunction = useNavigate()


    if (isLoadingRegisteredUsersData || isFetchingRegisteredUsersData || isLoadingPostLoginData) return <Loading/>
    else if (isErrorRegisteredUsersData || isErrorPostLoginData || !isFetchedRegisteredUsersData) return <ServerError/>
    else {
        return (
            <StyledButtons>
                <div className="login_form_sing-up-forgot-password-buttons-container">
                    <div className="login_form_forgot-password-container"
                         onClick={() => setForgotPasswordActive(true)}>
                        <div
                            className="login_form_forgot-password-label-one">{forgotPasswordLabelOne}</div>
                        <div
                            className="login_form_forgot-password-label-two">{forgotPasswordLabelTwo}</div>
                    </div>
                    <Link to={CONST?.routes?.registrationRoute} className="login_form_sing-up-button-container">
                        <button className="login_form_sign-up-button">
                            <div className="login_form_sing-up-button-icon-container">
                                <SignUp/>
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="login_form_login-button-container">
                    <button disabled={isButtonDisabled(fieldError, query)}
                            className="login_form_login-button"
                            onClick={() => handleSubmit(isFetchedRegisteredUsersData, query, setSubmitError, submitError, setQuery, dispatch, postLoginData, navigate)}
                    >
                        {buttonLabel}
                    </button>
                </div>
            </StyledButtons>
        )
    }
}

export default Buttons
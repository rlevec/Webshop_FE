import {StyledButtons} from "./styledButtons";

import {FC} from "react";
import * as React from "react";

import {isButtonDisabled} from "../../../../../../Utils/helpers";

import {removeLoginData} from "../../../../../../Redux/Slices/loginSlice";
import {
    useDeleteLoggedUserMutation, useGetLoggedUsersQuery,
    usePostLoggedUserMutation,
    usePostRegisteredUserMutation
} from "../../../../../../Redux/Slices/apiSlice";
import {IRootState, useAppDispatch, useAppSelector} from "../../../../../../Redux/Store/store";

import {
    LoggedUserDataTypes
} from "../../types";
import {ChangePasswordButtonsPropTypes} from "./types";

import ServerError from "../../../../../../Pages/ServerError";
import Loading from "../../../../../../Pages/Loading";


const Buttons: FC<ChangePasswordButtonsPropTypes> = (props) => {
    const {
        setActiveComponent,
        changePasswordFormData,
        fieldError,
        query,
    } = props

    const {
        data: isFetchedLoggedUsersData,
        isFetching: isFetchingLoggedUsersData,
        isLoading: isLoadingLoggedUsersData,
        isError: isErrorLoggedUsersData
    } = useGetLoggedUsersQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const dispatch = useAppDispatch()

    const userEmail: string = useAppSelector((state: IRootState) => state?.login?.loginData?.email)

    const matchUserObj: LoggedUserDataTypes = isFetchedLoggedUsersData?.find((el: LoggedUserDataTypes) => el?.email === userEmail) || {}

    const [changePasswordRegistration] = usePostRegisteredUserMutation()
    const [changePasswordLogin] = usePostLoggedUserMutation()

    const [logoutUser, {
        isLoading: isLoadingDeleteLoggedUserData,
        isError: isErrorDeleteLoggedUserData
    }] = useDeleteLoggedUserMutation()

    if (isFetchingLoggedUsersData || isLoadingLoggedUsersData || isLoadingDeleteLoggedUserData) return <Loading/>
    else if (isErrorLoggedUsersData || !isFetchedLoggedUsersData || isErrorDeleteLoggedUserData) return <ServerError/>
    return (
        <StyledButtons>
            <button
                className="change_password_back-btn"
                onClick={() => setActiveComponent("profile")}
            >
                {changePasswordFormData?.backButtonLabel}
            </button>
            <button
                disabled={isButtonDisabled(fieldError, query)}
                className="change_password_action-btn"
                onClick={(): void => {
                    {
                        changePasswordRegistration({
                            type: "changePassword",
                            email: matchUserObj?.email,
                            newPassword: query?.newPassword
                        })
                        changePasswordLogin({
                            type: "changePassword",
                            email: matchUserObj?.email,
                            newPassword: query?.newPassword
                        })
                        dispatch(removeLoginData({loginData: {email: ""}}));
                        logoutUser(userEmail);
                    }
                }}
            >
                {changePasswordFormData?.submitButtonLabel}
            </button>
        </StyledButtons>
    )
}

export default Buttons
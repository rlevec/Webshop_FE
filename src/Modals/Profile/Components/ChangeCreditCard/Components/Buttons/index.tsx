import {StyledButtons} from "./styledButtons";

import {FC, ReactElement} from "react";
import * as React from "react";

import {isButtonDisabled} from "../../../../../../Utils/helpers";

import {LoggedUserDataTypes} from "../../../../types";

import {removeLoginData} from "../../../../../../Redux/Slices/loginSlice";
import {
    useDeleteLoggedUserMutation, useGetLoggedUsersQuery,
    usePostLoggedUserMutation,
    usePostRegisteredUserMutation
} from "../../../../../../Redux/Slices/apiSlice";
import {useAppDispatch, useAppSelector} from "../../../../../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import {ChangeCreditCartButtonPropTypes} from "./types";

import ServerError from "../../../../../../Pages/ServerError";
import Loading from "../../../../../../Pages/Loading";


const Buttons: FC<ChangeCreditCartButtonPropTypes> = (props):ReactElement => {

    const {
        setActiveComponent,
        backButtonLabel,
        fieldError,
        query,
        submitButtonLabel
    } = props

    const {
        data: isFetchedLoggedUsersData,
        isFetching: isFetchingLoggedUsersData,
        isLoading: isLoadingLoggedUsersData,
        isError: isErrorLoggedUsersData
    } = useGetLoggedUsersQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const userEmail: string = useAppSelector((state) => state?.login?.loginData?.email)

    const dispatch: Dispatch = useAppDispatch()


    const matchUserObj: LoggedUserDataTypes = isFetchedLoggedUsersData?.find((el: LoggedUserDataTypes) => el?.email === userEmail)


    const [changeCreditCardRegistration] = usePostRegisteredUserMutation()
    const [changeCreditCardLogin] = usePostLoggedUserMutation()


    const [logoutUser, {isLoading: isLoadingDeleteLoggedUserData, isError: isErrorDeleteLoggedUserData}] = useDeleteLoggedUserMutation()


    if (isFetchingLoggedUsersData || isLoadingLoggedUsersData || isLoadingDeleteLoggedUserData) return <Loading/>
    else if (isErrorLoggedUsersData || !isFetchedLoggedUsersData || isErrorDeleteLoggedUserData) return <ServerError/>
    else {
        return (
            <StyledButtons>
                <button
                    className="change_credit_card_back_button"
                    onClick={() => setActiveComponent("profile")}
                >
                    {backButtonLabel}
                </button>
                <button
                    className="change_credit_card_submit_button"
                    disabled={isButtonDisabled(fieldError, query)}
                    onClick={(): void => {
                        {
                            changeCreditCardRegistration({
                                type: "changeCreditCard",
                                email: matchUserObj?.email,
                                newCreditCard: query?.newCreditCard,
                                newCcv: query?.newCcv,
                                newExpireMonth: query?.newExpireMonth,
                                newExpireYear: query?.newExpireYear,
                            })
                            changeCreditCardLogin({
                                type: "changeCreditCard",
                                email: matchUserObj?.email,
                                newCreditCard: query?.newCreditCard,
                                newCcv: query?.newCcv,
                                newExpireMonth: query?.newExpireMonth,
                                newExpireYear: query?.newExpireYear,
                            })
                            dispatch(removeLoginData({loginData: {email: ""}}));
                            logoutUser(userEmail);
                        }
                    }}
                >
                    {submitButtonLabel}
                </button>
            </StyledButtons>
        )
    }
}

export default Buttons
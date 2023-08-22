import {StyledTransaction} from "./styledTransaction";

import {FC, ReactElement} from "react";

import TransactionLoader from "./Loader";

import Close from "../../Assets/close.svg"

import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";
import {
    useGetLoggedUsersQuery,
    usePostTransactionMutation,
    useUseGetTransactionModalFormDataQuery
} from "../../Redux/Slices/apiSlice";

import {
    TransactionPropTypes,
    TransactionModalFormDataTypes,
    TransactionModalFormDataInputTypes,
    TransactionModalQueryStateTypes,
    TransactionModalFieldErrorStateTypes,
    LoggedUserDataTypes
} from "./types";

import {Link, NavigateFunction, useNavigate} from "react-router-dom";

import {useState} from "react";

import {CONST} from "../../Utils/CONST";

import {
    handleSubmit,
    useHandleInitialLoggedUserInputValues,
    useHandleTimeout,
} from "./helpers";

import {
    handleIcons,
    isButtonDisabled,
    handleInputValue,
    handleChangeAndValidation,
    handleFieldErrors
} from "../../Utils/helpers";

import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";
import * as React from "react";

const Transaction: FC<TransactionPropTypes> = (props): ReactElement => {
    const {setTransactionModalActive, totalPrice} = props

    const [activateComponent, setActivateComponent] = useState(false)

    const dispatch: Dispatch = useAppDispatch()

    const navigate: NavigateFunction = useNavigate()

    const reduxStateFractionCartItems = useAppSelector((state) => state?.cartItems?.cartItems)

    const userEmail = useAppSelector((state) => state?.login?.loginData?.email)

    const [postTransaction, {
        isError: isErrorPostTransactionData,
        isLoading: isLoadingPostTransactionData
    }] = usePostTransactionMutation()

    const {
        data: isFetchedTransactionModalFormData,
        isFetching: isFetchingTransactionModalFormData,
        isLoading: isLoadingTransactionModalFormData,
        isError: isErrorTransactionModalFormData
    } = useUseGetTransactionModalFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true
    })

    const {
        data: isFetchedLoggedUsersData,
        isFetching: isFetchingLoggedUsersData,
        isLoading: isLoadingLoggedUsersData,
        isError: isErrorLoggedUsersData
    } = useGetLoggedUsersQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true
    })


    const [query, setQuery] = useState<TransactionModalQueryStateTypes>(
        {
            email: "",
            firstName: "",
            lastName: "",
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
    const [fieldError, setFieldError] = useState<TransactionModalFieldErrorStateTypes>(
        {
            email: false,
            firstName: false,
            lastName: false,
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

    const transactionModalFormData: TransactionModalFormDataTypes = isFetchedTransactionModalFormData

    const loggedUsersData: LoggedUserDataTypes[] = isFetchedLoggedUsersData

    useHandleInitialLoggedUserInputValues(loggedUsersData, userEmail, setQuery, query)

    useHandleTimeout(setActivateComponent)


    if(activateComponent) {
        if (isFetchingTransactionModalFormData || isLoadingTransactionModalFormData || isFetchingLoggedUsersData || isLoadingLoggedUsersData || isLoadingPostTransactionData) return <Loading/>
        else if (isErrorTransactionModalFormData || isErrorLoggedUsersData || !isFetchedTransactionModalFormData || !isFetchedLoggedUsersData || isErrorPostTransactionData) return <ServerError/>
        else {
            return (
                    <StyledTransaction>
                        <div className="transaction_wrapper">
                            <div className="transaction_close-icon-container"
                                 onClick={() => setTransactionModalActive(false)}
                            >
                                <Close/>
                            </div>
                            <div className="transaction_container">
                                <div className="transaction_title-container">{transactionModalFormData?.title}</div>
                                <div className="transaction_warning-container">
                                    <span>{transactionModalFormData?.warningParagraphOne}</span>
                                    <span> </span>
                                    <span className="price">{totalPrice} €</span>
                                    <span> </span>
                                    <span>{transactionModalFormData?.warningParagraphTwo}</span>
                                </div>
                                <div className="transaction_inputs-container">
                                    {transactionModalFormData?.inputs?.map((el: TransactionModalFormDataInputTypes) => {
                                        const {id, frontendSlug, placeholder, type, validation, error, name, min, max} = el

                                        return (
                                            <div className="transaction_input-container" key={id}>
                                                <input
                                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeAndValidation(e?.target?.value, frontendSlug, query, setQuery, fieldError, setFieldError, validation, null, min as number, max as number)}
                                                    placeholder={placeholder}
                                                    name={name}
                                                    type={type}
                                                    value={handleInputValue(frontendSlug, query)}
                                                />
                                                <div
                                                    className="inputs_field-icons">{handleIcons(frontendSlug)}</div>
                                                <div
                                                    className="inputs_field-error">{handleFieldErrors(frontendSlug, error, fieldError)}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="transaction_delivery-container">
                                    <span>{transactionModalFormData?.deliveryParagraphOne}</span>
                                    <span> </span>
                                    <span className="delivery">{transactionModalFormData?.deliveryParagraphTwo}</span>
                                    <span> </span>
                                    <span>{transactionModalFormData?.deliveryParagraphThree}</span>
                                </div>
                                <div className="transaction_account-container">
                                    <Link to={CONST?.routes?.registrationRoute}><span
                                        className="link">{transactionModalFormData?.registerAndLoginParagraphOne}</span></Link>
                                    <span> </span>
                                    <span>{transactionModalFormData?.registerAndLoginParagraphTwo}</span>
                                    <span> </span>
                                    <span>{transactionModalFormData?.registerAndLoginParagraphThree}</span>
                                    <span> </span>
                                    <Link to={CONST?.routes?.loginRoute}><span
                                        className="link">{transactionModalFormData?.registerAndLoginParagraphFour}</span></Link>
                                    <span> </span>
                                    <span>{transactionModalFormData?.registerAndLoginParagraphFive}</span>
                                    <span> </span>
                                    <span className="account">{transactionModalFormData?.registerAndLoginParagraphSix}</span>
                                    <span> </span>
                                    <span>{transactionModalFormData?.registerAndLoginParagraphSeven}</span>
                                </div>
                                <button
                                    onClick={() => handleSubmit(reduxStateFractionCartItems, query, totalPrice, postTransaction, dispatch, navigate)}
                                    disabled={isButtonDisabled(fieldError, query)}>{transactionModalFormData?.transactionButtonLabel}</button>
                            </div>
                        </div>
                    </StyledTransaction>
            )
        }
    }
    else {
        return (
            <StyledTransaction>
                <div className="transaction_wrapper">
                    <TransactionLoader/>
                </div>
            </StyledTransaction>
        )
    }
}

export default Transaction
import {StyledInputs} from "./styledInputs";
import {FC, useState} from "react";
import * as React from "react";

import {handleIcons, handlePasswordIconByType, handleChangeAndValidation, handlePasswordFieldsTypes, handleFieldErrors, handleInputValue} from "../../../../../../Utils/helpers";

import {useGetLoggedUsersQuery} from "../../../../../../Redux/Slices/apiSlice";
import {IRootState, useAppSelector} from "../../../../../../Redux/Store/store";

import {LoggedUserDataTypes} from "../../types";
import {
    ChangePasswordFormShowPasswordTypeStateTypes
} from "../../types";
import {ChangePasswordInputsPropTypes} from "./types";

import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";

const Inputs:FC<ChangePasswordInputsPropTypes> = (props) => {
    const [showPasswordType, setShowPasswordType] = useState<ChangePasswordFormShowPasswordTypeStateTypes>({
        oldPassword: "password",
        newPassword: "password",
        confirmNewPassword: "password"
    })

    const {
        placeholder,
        frontendSlug,
        query,
        fieldError,
        setFieldError,
        setQuery,
        validation,
        type,
        name,
        error,
    } = props

    const {
        data: isFetchedLoggedUsersData,
        isFetching: isFetchingLoggedUsersData,
        isLoading: isLoadingLoggedUsersData,
        isError: isErrorLoggedUsersData
    } = useGetLoggedUsersQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})


    const userEmail: string = useAppSelector((state: IRootState) => state?.login?.loginData?.email)

    const matchUserObj: LoggedUserDataTypes = isFetchedLoggedUsersData?.find((el: LoggedUserDataTypes) => el?.email === userEmail)

    const userPassword: string = matchUserObj?.password


    if(isFetchingLoggedUsersData || isLoadingLoggedUsersData) return <Loading/>
    else if(isErrorLoggedUsersData || !isFetchedLoggedUsersData) return <ServerError/>
    else {
        return (
            <StyledInputs>
                <input
                    placeholder={placeholder}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeAndValidation(e?.target?.value, frontendSlug, query, setQuery, fieldError, setFieldError, validation, userPassword)}
                    value={handleInputValue(frontendSlug, query)}
                    name={name}
                    type={handlePasswordFieldsTypes(frontendSlug,type, showPasswordType)}
                />
                <div className="inputs_input-field-icons">{handleIcons(frontendSlug)}</div>
                <div
                    className="inputs_field-sub-icons">{handlePasswordIconByType(props?.frontendSlug as string, setShowPasswordType, showPasswordType)}</div>
                <div
                    className="inputs_input-field-error">{handleFieldErrors(frontendSlug, error, fieldError)}</div>
            </StyledInputs>
        )
    }
}

export default Inputs
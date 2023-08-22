import {FC, useState} from "react";
import * as React from "react";

import {StyledChangePassword} from "./styledChangePassword";

import {
    ChangePasswordFormDataTypes,
    ChangePasswordFormDataInputTypes,
    ChangePasswordFormFieldErrorStateTypes,
    ChangePasswordFormQueryStateTypes,
    ChangePasswordFormDataPropTypes,
} from "./types";

import {
    useGetChangePasswordFormDataQuery
} from "../../../../Redux/Slices/apiSlice";

import Inputs from "./Components/Inputs";
import Buttons from "./Components/Buttons";
import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";

const ChangePassword: FC<ChangePasswordFormDataPropTypes> = (props) => {
    const {setActiveComponent} = props

    const {
        data: isFetchedChangedPasswordFormData,
        isFetching: isFetchingChangedPasswordFormData,
        isLoading: isLoadingChangedPasswordFormData,
        isError: isErrorChangedPasswordFormData
    } = useGetChangePasswordFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })


    const [query, setQuery] = useState<ChangePasswordFormQueryStateTypes>({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    })
    const [fieldError, setFieldError] = useState<ChangePasswordFormFieldErrorStateTypes>({
        oldPassword: false,
        newPassword: false,
        confirmNewPassword: false
    })


    let changePasswordFormData: ChangePasswordFormDataTypes = isFetchedChangedPasswordFormData

    if (isFetchingChangedPasswordFormData || isLoadingChangedPasswordFormData) return <Loading/>
    else if (isErrorChangedPasswordFormData || !isFetchedChangedPasswordFormData) return <ServerError/>
    else {
        return (
            <StyledChangePassword>
                <div className="change_password_container">
                    <div className="change_password_label">{changePasswordFormData?.formLabel}</div>
                    <div className="change_password_input-container">
                        {changePasswordFormData?.inputs?.map((el: ChangePasswordFormDataInputTypes) => {
                            const {
                                id,
                                frontendSlug,
                                name,
                                type,
                                placeholder,
                                validation,
                                error,
                            } = el
                            return (
                                <Inputs
                                    placeholder={placeholder}
                                    frontendSlug={frontendSlug}
                                    query={query}
                                    fieldError={fieldError}
                                    setFieldError={setFieldError}
                                    setQuery={setQuery}
                                    validation={validation}
                                    type={type}
                                    name={name}
                                    error={error}
                                />
                            )
                        })}
                    </div>
                    <Buttons setActiveComponent={setActiveComponent} changePasswordFormData={changePasswordFormData}
                             fieldError={fieldError} query={query}/>
                </div>
            </StyledChangePassword>
        )
    }
}

export default ChangePassword
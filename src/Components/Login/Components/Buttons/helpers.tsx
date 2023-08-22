import {
    LoginRegisteredUsersTypes,
    LoginQueryStateTypes,
    LoginSubmitErrorStateTypes,
} from "../../types";

import {CONST} from "../../../../Utils/CONST";

import {Dispatch} from "@reduxjs/toolkit";

import {NavigateFunction} from "react-router-dom";

import {setLoginData} from "../../../../Redux/Slices/loginSlice";

import * as React from "react";

import {setCookie} from "../../../../Utils/helpers";


//handle submit login data to BE
export const handleSubmit = (isFetchedRegisteredUsersData: LoginRegisteredUsersTypes[], query: LoginQueryStateTypes, setSubmitError: Function, submitError: LoginSubmitErrorStateTypes, setQuery: Function, dispatch: Dispatch, postLoginData: Function, navigate: NavigateFunction): void | null => {
    let registeredUserObj: LoginRegisteredUsersTypes | undefined = isFetchedRegisteredUsersData?.find((el: LoginRegisteredUsersTypes) => el?.email === query?.email)

    let userRegistered: boolean = Boolean(registeredUserObj)

    let userPasswordMatches: boolean = registeredUserObj?.password === query?.password

    //if user does not exist on the BE registeredUsers endpoint return null
    //else if user exists but password does not match return null
    //else post data to BE on loggedUsers endpoint
    if (!userRegistered) {
        setSubmitError({...submitError, nonExistent: true, emailError: true, passwordError: false})
        setQuery({...query, email: "", password: ""})
        return null
    } else if (!userPasswordMatches) {
        setSubmitError({...submitError, nonExistent: false, emailError: false, passwordError: true})
        setQuery({...query, password: ""})
        return null
    } else {
        setSubmitError({...submitError, nonExistent: false, emailError: false, passwordError: false})
        let loginSubmitData: LoginQueryStateTypes = {email: query?.email, password: query?.password}
        dispatch(setLoginData({loginData: {email: loginSubmitData?.email}}))
        let findRegisteredUser: LoginRegisteredUsersTypes | undefined = isFetchedRegisteredUsersData?.find((el: LoginRegisteredUsersTypes) => el?.email === loginSubmitData?.email)
        setCookie('user', JSON.stringify(query?.email),7);
        postLoginData(findRegisteredUser)
        navigate(CONST?.routes?.root, {replace: true}) //navigate and clear history stack to prevent user from going back to login page
    }
}
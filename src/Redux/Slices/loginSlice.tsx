import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";

import {InitialLoginStateTypes, InitialLoginStateSubTypes} from "./types";

const initialState: InitialLoginStateTypes = {
    loginData: {
        email: "",
    }
}

export const LoginSlice:Slice<InitialLoginStateTypes> = createSlice({
    name: "loginData",
    initialState,
    reducers: {
        setLoginData: (state, action: PayloadAction<{ loginData: InitialLoginStateSubTypes }>): void => {
            state.loginData = action.payload.loginData
        },
        removeLoginData: (state, action: PayloadAction<{ loginData: InitialLoginStateSubTypes }>): void => {
            state.loginData = action.payload.loginData
        },
    },
})

export default LoginSlice.reducer

export const {setLoginData, removeLoginData} = LoginSlice.actions
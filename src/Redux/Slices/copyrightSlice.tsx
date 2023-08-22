import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {CopyrightSliceInitialSlice} from "./types";


const initialState: CopyrightSliceInitialSlice = {
    copyright: false
}

export const CopyrightSlice = createSlice({
    name: "copyright",
    initialState,
    reducers: {
        setCopyright: (state, action: PayloadAction<{ copyright: boolean }>): void => {
            state.copyright = action.payload.copyright
        }
    }
})

export default CopyrightSlice.reducer

export const {setCopyright} = CopyrightSlice.actions
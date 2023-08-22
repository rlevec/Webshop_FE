import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {DeviceSliceInitialState} from "./types";


const initialState: DeviceSliceInitialState = {
    device: null
}

export const DeviceSlice = createSlice({
    name: "device",
    initialState,
    reducers: {
        setDevice: (state, action: PayloadAction<{ device: string | null }>): void => {
            state.device = action.payload.device
        }
    }
})

export default DeviceSlice.reducer

export const {setDevice} = DeviceSlice.actions
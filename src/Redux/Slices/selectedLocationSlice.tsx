import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {SelectedLocationInitialStateTypes} from "./types";


const initialState: SelectedLocationInitialStateTypes = {
    locationSelected: null
}

export const SelectedLocationSlice:Slice<SelectedLocationInitialStateTypes> = createSlice({
    name: "selectedLocation",
    initialState,
    reducers: {
        setSelectedLocation: (state, action: PayloadAction<{ locationSelected: string | null }>): void => {
            state.locationSelected = action.payload.locationSelected
        },
    },
})

export default SelectedLocationSlice.reducer

export const {setSelectedLocation} = SelectedLocationSlice.actions


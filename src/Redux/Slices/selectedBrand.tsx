import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {SelectedBrandInitiatlStateTypes} from "./types";


const initialState: SelectedBrandInitiatlStateTypes = {
    brandSelected: null
}

export const SelectedBrandSlice:Slice<SelectedBrandInitiatlStateTypes> = createSlice({
    name: "selectedBrand",
    initialState,
    reducers: {
        setSelectedBrand: (state, action: PayloadAction<{ brandSelected: string | null }>): void => {
            state.brandSelected = action.payload.brandSelected
        },
    },
})


export default SelectedBrandSlice.reducer

export const {setSelectedBrand} = SelectedBrandSlice.actions

import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {SelectedSubCategoryInitialStateTypes} from "./types";

const initialState: SelectedSubCategoryInitialStateTypes = {
    subCategorySelected: null
}

export const SelectedSubCategorySlice:Slice<SelectedSubCategoryInitialStateTypes> = createSlice({
    name: "selectedCategory",
    initialState,
    reducers: {
        setSelectedSubCategory: (state, action: PayloadAction<{ subCategorySelected: string | null }>): void => {
            state.subCategorySelected = action.payload.subCategorySelected
        },
    },
})

export default SelectedSubCategorySlice.reducer

export const {setSelectedSubCategory} = SelectedSubCategorySlice.actions


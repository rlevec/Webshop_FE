import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {SelectedCategoryInitialStateTypes} from "./types";

const initialState: SelectedCategoryInitialStateTypes = {
    categorySelected: null
}

export const SelectedCategorySlice:Slice<SelectedCategoryInitialStateTypes> = createSlice({
    name: "selectedCategory",
    initialState,
    reducers: {
        setSelectedCategory: (state, action: PayloadAction<{ categorySelected: string | null }>): void => {
            state.categorySelected = action.payload.categorySelected
        },
    },
})


export default SelectedCategorySlice.reducer

export const {setSelectedCategory} = SelectedCategorySlice.actions

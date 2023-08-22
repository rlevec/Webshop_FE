import {createSlice, Draft, PayloadAction, Slice} from "@reduxjs/toolkit";
import {WishlistUniversalTypes, WishlistItemsTypes} from "./types";

const initialState: WishlistItemsTypes = {
    wishlistItem: {},
    wishlistItems: [],
};

export const WishlistSlice: Slice<WishlistItemsTypes> = createSlice({
    name: "wishlistItems",
    initialState,
    reducers: {
        addItemToWishlist: (
            state,
            action: PayloadAction<{ wishlistItem: WishlistUniversalTypes; wishlistItems: WishlistUniversalTypes[] }>
        ): void => {
            const newItem: WishlistUniversalTypes = action.payload.wishlistItem;


            const isItemInWishList: boolean = state.wishlistItems.some((item): boolean => item?.frontendSlug === newItem?.frontendSlug);

            if (isItemInWishList) {
                let findIndex: number = state.wishlistItems.findIndex((el): boolean => el?.frontendSlug === newItem?.frontendSlug);

                const newWishlistItems: WishlistUniversalTypes[] = state.wishlistItems.map((el, idx: number) => {
                    if (idx === findIndex) return {...el, inWishlist: true};
                    else return el;
                });
                state.wishlistItems = newWishlistItems;
            } else {
                let newItemAltered: WishlistUniversalTypes = {...newItem, inWishlist: true};
                state.wishlistItems.push(newItemAltered);
            }
        },
        removeWishlistItem: (
            state,
            action: PayloadAction<{ wishlistItem: WishlistUniversalTypes; wishlistItems: WishlistUniversalTypes[] }>
        ): void => {
            const newItem: WishlistUniversalTypes = action.payload.wishlistItem;

            let newWishlistItems = state.wishlistItems.filter((el): boolean => el?.frontendSlug !== newItem?.frontendSlug);
            state.wishlistItems = newWishlistItems;
        },
        removeWishlistItems: (
            state,
            action: PayloadAction<{ wishlistItems: [] }>
        ): void => {
            const newWishlistItems: [] = action.payload.wishlistItems;
            state.wishlistItems = newWishlistItems;
        },
    },
});

export default WishlistSlice.reducer;

export const {addItemToWishlist, removeWishlistItem, removeWishlistItems} = WishlistSlice.actions;

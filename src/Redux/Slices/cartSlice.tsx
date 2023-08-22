import {createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {CartItemsUniversalTypes, CartItemsTypes} from "./types";

const initialState: CartItemsTypes = {
    cartItem: {},
    cartItems: [],
};

export const CartSlice: Slice<CartItemsTypes> = createSlice({
    name: "cartItems",
    initialState,
    reducers: {
        setCartItemsAdd: (
            state,
            action: PayloadAction<{ cartItem: CartItemsUniversalTypes; cartItems: CartItemsUniversalTypes[] }>
        ): void => {
            const newItem: CartItemsUniversalTypes = action.payload.cartItem;

            // Check if the newItem already exists in cartItems
            const isItemInCart: boolean = state.cartItems.some((item): boolean => item.frontendSlug === newItem.frontendSlug);

            //if item exists in cart
            if (isItemInCart) {
                let index: number = state.cartItems.findIndex((el): boolean => el.frontendSlug === newItem.frontendSlug);

                const newStateCartItems: CartItemsUniversalTypes[] = state.cartItems.map((el, idx: number) => {
                    if (idx === index) {
                        if (isNaN(el.quantity as number)) return {...el, quantity: 1};
                        else return {...el, quantity: el.quantity as number + 1};
                    } else return el;
                });

                state.cartItems = newStateCartItems;
            } else {
                let newItemAltered: CartItemsUniversalTypes = {...newItem, quantity: 2};
                state.cartItems.push(newItemAltered);
            }
        },
        setCartItemsSubtract: (
            state,
            action: PayloadAction<{ cartItem: CartItemsUniversalTypes; cartItems: CartItemsUniversalTypes[] }>
        ): void => {
            const newItem: CartItemsUniversalTypes = action.payload.cartItem;

            // Check if the newItem already exists in cartItems
            const isItemInCart: boolean = state.cartItems.some((item): boolean => item.frontendSlug === newItem.frontendSlug);

            //if item exists in cart
            if (isItemInCart) {
                let findIndex = state.cartItems.findIndex((el): boolean => el.frontendSlug === newItem.frontendSlug);

                const newStateCartItems: CartItemsUniversalTypes[] = state.cartItems.map((el, idx: number) => {
                    if (idx === findIndex) {
                        if (el.quantity === 1) return el;
                        return {...el, quantity: el.quantity as number - 1};
                    } else return el;
                });

                state.cartItems = newStateCartItems;
            } else {
                let newItemAltered: CartItemsUniversalTypes = {...newItem, quantity: 2};
                state.cartItems.push(newItemAltered);
            }
        },
        addItemToCart: (
            state,
            action: PayloadAction<{ cartItem: CartItemsUniversalTypes; cartItems: CartItemsUniversalTypes[] }>
        ): void => {
            const newItem: CartItemsUniversalTypes = action.payload.cartItem;

            const isItemInCart: boolean = state.cartItems.some((item) => item.frontendSlug === newItem.frontendSlug);

            if (isItemInCart) {
                let findIndex = state.cartItems.findIndex((el) => el.frontendSlug === newItem.frontendSlug);

                const newStateCartItems: CartItemsUniversalTypes[] = state.cartItems.map((el, idx) => {
                    if (idx === findIndex) return {...el, inCart: true};
                    else return el;
                });
                state.cartItems = newStateCartItems;
            } else {
                let newItemAltered: CartItemsUniversalTypes = {...newItem, inCart: true};
                state.cartItems.push(newItemAltered);
            }
        },
        removeCartItem: (
            state,
            action: PayloadAction<{ cartItem: CartItemsUniversalTypes; cartItems: CartItemsUniversalTypes[] }>
        ): void => {
            const newItem: CartItemsUniversalTypes = action.payload.cartItem;
            let newCartItems = state.cartItems.map((el) => {
                if (el.frontendSlug === newItem.frontendSlug) return {...el, inCart: false};
                else return el;
            });
            state.cartItems = newCartItems;
        },
        removeCartItems: (
            state,
            action: PayloadAction<{ cartItems: [] }>
        ): void => {
            const newCartItems: [] = action.payload.cartItems;
            state.cartItems = newCartItems;
        },
    },
});

export default CartSlice.reducer;

export const {setCartItemsAdd, setCartItemsSubtract, addItemToCart, removeCartItem, removeCartItems} = CartSlice.actions;

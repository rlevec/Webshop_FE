
import {configureStore, Reducer} from "@reduxjs/toolkit";
import {combineReducers} from "@reduxjs/toolkit";

import {LoginSlice} from "../Slices/loginSlice";
import {NewsletterSlice} from "../Slices/newsletterSlice";
import {ConsentSlice} from "../Slices/consentSlice";
import {SelectedCategorySlice} from "../Slices/selectedCategorySlice";
import {SelectedSubCategorySlice} from "../Slices/selectedSubCategorySlice";
import {SelectedBrandSlice} from "../Slices/selectedBrand";
import {SelectedLocationSlice} from "../Slices/selectedLocationSlice";
import {CartSlice} from "../Slices/cartSlice";
import {WishlistSlice} from "../Slices/wishlistSlice";
import {DeviceSlice} from "../Slices/device";
import {CopyrightSlice} from "../Slices/copyrightSlice";

import storage from "redux-persist/lib/storage"

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


import {setupListeners} from "@reduxjs/toolkit/query";


import {useDispatch, TypedUseSelectorHook, useSelector} from "react-redux";
import {apiSlice} from "../Slices/apiSlice";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
import {CurriedGetDefaultMiddleware} from "@reduxjs/toolkit/dist/getDefaultMiddleware";


const persistConfig = {
    key: 'root',
    storage: storage,
}
export const rootReducers = combineReducers({
    login: LoginSlice.reducer,
    newsletter: NewsletterSlice.reducer,
    consent: ConsentSlice.reducer,
    selectedCategory: SelectedCategorySlice.reducer,
    selectedSubCategory:SelectedSubCategorySlice.reducer,
    selectedBrand: SelectedBrandSlice.reducer,
    selectedLocations: SelectedLocationSlice.reducer,
    cartItems: CartSlice.reducer,
    wishlistItems: WishlistSlice.reducer,
    device: DeviceSlice.reducer,
    copyright: CopyrightSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
})


const persistedReducer:Reducer = persistReducer(persistConfig, rootReducers)

const store:ToolkitStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware:CurriedGetDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiSlice.middleware),
})

setupListeners(store.dispatch)


export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;

export type IRootState = ReturnType<typeof rootReducers>


export default store
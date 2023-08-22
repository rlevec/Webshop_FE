import {useEffect} from "react";

import {setCookie} from "../../Utils/helpers";

import * as React from "react";

import {
    CartItemsTypes,
    TransactionModalQueryStateTypes,
    CartItemsToPostTypes,
    TransactionDataToPostTypes,
    LoggedUserDataTypes
} from "./types";

import {removeCartItems} from "../../Redux/Slices/cartSlice";
import {removeWishlistItems} from "../../Redux/Slices/wishlistSlice";
import {Dispatch} from "@reduxjs/toolkit";

import {CONST} from "../../Utils/CONST";

import {NavigateFunction} from "react-router-dom";



//generate new object for each cartItem product and post transaction to BE
export const handleSubmit = (reduxStateFractionCartItems: CartItemsTypes[], query: TransactionModalQueryStateTypes, totalPrice: string, postTransaction: Function, dispatch: Dispatch, navigate: NavigateFunction) => {
    const cartItems: CartItemsTypes[] = reduxStateFractionCartItems?.filter((el: CartItemsTypes) => el?.inCart)

    const cartItemsToPost: CartItemsToPostTypes[] = []

    cartItems?.forEach((el: CartItemsTypes) => cartItemsToPost?.push({
        productTitle: el?.title,
        productQuantity: el?.quantity
    }))

    const transactionDataToPost: TransactionDataToPostTypes = {
        ...query,
        purchase: {products: cartItemsToPost, totalPrice: totalPrice}
    }

    postTransaction(transactionDataToPost)

    setCookie("products", JSON.stringify({products: cartItemsToPost}), 7)

    dispatch(removeCartItems({cartItems: []}))
    dispatch(removeWishlistItems({wishlistItems: []}))

    navigate(CONST?.routes?.root)
}


export const useHandleInitialLoggedUserInputValues = (loggedUsersData: LoggedUserDataTypes[], userEmail: string, setQuery: Function, query: TransactionModalQueryStateTypes) => {
    const matchLoggedUserObj: LoggedUserDataTypes | undefined = loggedUsersData?.find((el: LoggedUserDataTypes): boolean => el?.email === userEmail)

    useEffect((): void => {
        if (matchLoggedUserObj) {
            setQuery(
                {
                    ...query,
                    email: matchLoggedUserObj?.email,
                    firstName: matchLoggedUserObj?.firstName,
                    lastName: matchLoggedUserObj?.lastName,
                    city: matchLoggedUserObj?.city,
                    zip: matchLoggedUserObj?.zip,
                    address: matchLoggedUserObj?.address,
                    creditCard: matchLoggedUserObj?.creditCard,
                    ccv: matchLoggedUserObj?.ccv,
                    country: matchLoggedUserObj?.country,
                    expireYear: matchLoggedUserObj?.expireYear.toString(),
                    expireMonth: matchLoggedUserObj?.expireMonth.toString()
                }
            )
        }
    }, [])
}


//timeout setter to ensure that matchLoggedUserObj variable initializes properly in useHandleInitialLoggedUserInputValues
export const useHandleTimeout = (setActivateComponent: Function): void => {
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> = setTimeout((): void => {
            setActivateComponent(true)
        }, 3000)

        return () => clearTimeout(timeout)
    }, [])
}

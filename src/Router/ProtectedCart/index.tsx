import {FC} from "react";

import { Navigate} from "react-router-dom";

import {useAppSelector} from "../../Redux/Store/store.js";

import {CartItemsTypes ,Props} from "./types";

const ProtectedCart: FC<Props> = ({children}): JSX.Element => {

    const cartItems = useAppSelector((state) => state?.cartItems?.cartItems)

    let isCartItemSelected: boolean
    if(cartItems?.some((el: CartItemsTypes) => el?.inCart)) isCartItemSelected = false
    else isCartItemSelected = true

    return isCartItemSelected ? <Navigate to={"/"} replace={true}/> : children
}

export default ProtectedCart
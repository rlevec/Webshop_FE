import {WishlistTypes} from "./types";

import {removeWishlistItem} from "../../Redux/Slices/wishlistSlice";
import {addItemToCart} from "../../Redux/Slices/cartSlice";
import {Dispatch} from "@reduxjs/toolkit";


//move wishlist item from redux store to cart redux store
export const handleMoveFromWishlistToCart = (wishlistObj: WishlistTypes, dispatch: Dispatch): void => {
    dispatch(removeWishlistItem({
        wishlistItem: {
            frontendSlug: wishlistObj?.frontendSlug,
            title: wishlistObj?.title,
            image: wishlistObj?.image
        }
    }))
    dispatch(addItemToCart({
        cartItem: {
            frontendSlug: wishlistObj?.frontendSlug,
            title: wishlistObj?.title,
            image: wishlistObj?.image,
        }
    }))
}
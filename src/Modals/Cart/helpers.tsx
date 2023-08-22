import {CartItemsTypes} from "./types";

//track whether the user attempted to add product to cart to enable Cart component to render
export const handleIsPurchaseActive = (reduxStateFractionCartItems: CartItemsTypes[]): boolean => reduxStateFractionCartItems?.some((el:CartItemsTypes): boolean => el?.inCart === true)

//render only products that are added to cart by the user
export const handlePurchaseProductsToRender = (reduxStateFractionCartItems:CartItemsTypes[]): CartItemsTypes[] => reduxStateFractionCartItems?.filter((el:CartItemsTypes) => el?.inCart)
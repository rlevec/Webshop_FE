import {CartItemsTypes, ProductsTypes} from "./types";

import {Location, NavigateFunction} from "react-router-dom";

import {useCallback, useEffect} from "react";

import {CONST} from "../../Utils/CONST";


//render purchase quantity from redux store triggered on each product by the user
export const handleQuantity = (frontendSlug: string, reduxStateCartItems: CartItemsTypes[]): number => reduxStateCartItems?.find((el: CartItemsTypes): boolean => el?.frontendSlug === frontendSlug)?.quantity || 1


//handle 404 error if product dynamic route is not included in extractedAllRoutes array
export const useHandleProductRouteParamError = (paramRoute: string, productsArray: ProductsTypes[], navigate: NavigateFunction): void => {
    const handleProductRouteParamErrorCallback = useCallback((): void => {
        if (paramRoute) {
            let extractedAllRoutes: string[] = []

            if (productsArray?.length) {
                productsArray.forEach((el: ProductsTypes): void => {
                    const {route} = el
                    extractedAllRoutes?.push(route)
                })
            }

            if (extractedAllRoutes?.length && !extractedAllRoutes?.includes(paramRoute)) navigate(CONST?.routes?.invalidRoute, { replace: true })
        }
    }, [paramRoute])

    useEffect((): void => {
        handleProductRouteParamErrorCallback()
    }, [handleProductRouteParamErrorCallback])
}



export const extractExactPathAndMatchProductObject = (location: Location, productsData: ProductsTypes[]): ProductsTypes | undefined => {
    const splitPath: string[] = location?.pathname?.split("/")

    const extractExactPath: string = splitPath[splitPath?.length - 1]

    const matchObject: ProductsTypes | undefined = productsData?.find((el: ProductsTypes): boolean => el?.route === extractExactPath)

    return matchObject as ProductsTypes
}
import {NavigateFunction} from "react-router-dom";
import {useCallback, useEffect} from "react";

import {CONST} from "../../../../../../../Utils/CONST";

import {BlogFormDataCategoriesTypes, BlogFormDataTypes} from "../../../types";


//extract appropriate content from the route params and return it for render
export const useHandleBlogCategoryRouteParamError = (paramRoute: string, blogFormData: BlogFormDataTypes[], navigate: NavigateFunction): void => {
    const handleBlogCategoryRouteParamError = useCallback((): void => {
        if (paramRoute) {
            let extractedAllRoutes: string[] = []

            if(blogFormData?.length) {
                blogFormData.forEach((el: BlogFormDataTypes): void => {
                    const {categories} = el

                    categories?.forEach((el:BlogFormDataCategoriesTypes): void => {
                        const {route} = el

                        extractedAllRoutes?.push(route)
                    })
                })

                if (extractedAllRoutes?.length && !extractedAllRoutes?.includes(paramRoute)) navigate(CONST?.routes?.invalidRoute, { replace: true })
            }
        }
    }, [paramRoute])

    useEffect((): void => {
        handleBlogCategoryRouteParamError()
    }, [handleBlogCategoryRouteParamError])
}
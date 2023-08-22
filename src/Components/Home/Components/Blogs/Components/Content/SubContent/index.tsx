import React, {FC, ReactElement} from "react";

import {BlogFormDataTypes} from "../../../types";

import {StyledSubContent} from "./styledSubContent";

import {useLocation, Location, useParams, useNavigate, NavigateFunction} from "react-router-dom";

import {handleBlogContentByRoute} from "../../../../../../../Utils/helpers";

import {useHandleBlogCategoryRouteParamError} from "./helpers";

import {useGetBlogFormDataQuery} from "../../../../../../../Redux/Slices/apiSlice";

import Loading from "../../../../../../../Pages/Loading";
import ServerError from "../../../../../../../Pages/ServerError";


const SubContent: FC = (): ReactElement => {
    const {
        data: isFetchedBlogFormData,
        isFetching: isFetchingBlogFormData,
        isLoading: isLoadingBlogFormData,
        isError: isErrorBlogFormData
    } = useGetBlogFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})

    const location: Location = useLocation()

    const navigate: NavigateFunction = useNavigate()

    const paramRoute: string | undefined = useParams()?.route

    const blogFormData: BlogFormDataTypes[] = isFetchedBlogFormData

    useHandleBlogCategoryRouteParamError(paramRoute as string, blogFormData, navigate)

    if (isFetchingBlogFormData || isLoadingBlogFormData) return <Loading/>
    else if (isErrorBlogFormData || !isFetchedBlogFormData) return <ServerError/>
    else return <StyledSubContent dangerouslySetInnerHTML={{__html: handleBlogContentByRoute(blogFormData, location)}}></StyledSubContent>
}

export default SubContent
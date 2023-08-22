import {FC, ReactElement, useState} from "react";

import {StyledBlogs} from "./styledBlogs";

import Buttons from "./Components/Buttons";
import Content from "./Components/Content";
import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";
import Dropdown from "./Components/Dropdown";

import {BasicNavLinks} from "../../../../Shared/BasicNavLinks";

import {useAppSelector} from "../../../../Redux/Store/store";

import {useGetBlogFormDataQuery} from "../../../../Redux/Slices/apiSlice";

import {BlogFormDataTypes} from "./types";

import {CONST} from "../../../../Utils/CONST";

const Blogs: FC = (): ReactElement => {
    const {
        data: isFetchedBlogFormData,
        isFetching: isFetchingBlogFormData,
        isLoading: isLoadingBlogFormData,
        isError: isErrorBlogFormData
    } = useGetBlogFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})


    const [activeCategory, setActiveCategory] = useState<string>("showAll")

    const blogFormData: BlogFormDataTypes[] = isFetchedBlogFormData

    const deviceType = useAppSelector((state) => state?.device?.device)


    if (isFetchingBlogFormData || isLoadingBlogFormData) return <Loading/>
    else if (isErrorBlogFormData || !isFetchedBlogFormData) return <ServerError/>
    else {
        return (
            <StyledBlogs className="styledComponent-Blogs">
                {location?.pathname === `/${CONST?.routes?.blogNewsRoute}` && <BasicNavLinks/>}
                <div className="blogs_wrapper">
                    {deviceType === "desktop" ? (
                        <Buttons activeCategory={activeCategory} setActiveCategory={setActiveCategory}
                                 blogFormData={blogFormData}/>
                    ) : (
                        <Dropdown activeCategory={activeCategory} setActiveCategory={setActiveCategory}
                                  blogFormData={blogFormData}/>
                    )}
                    <Content activeCategory={activeCategory} setActiveCategory={setActiveCategory}
                             blogFormData={blogFormData}/>
                </div>
            </StyledBlogs>
        )
    }
}

export default Blogs
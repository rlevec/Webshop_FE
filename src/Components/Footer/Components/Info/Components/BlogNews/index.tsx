import {FC, ReactElement} from "react";
import {StyledBlogs} from "./styledBlogs";

import BlogsNews from "../../../../../Home/Components/Blogs";

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";

import {useAppSelector} from "../../../../../../Redux/Store/store";

const Blogs: FC = (): ReactElement => {
    const deviceType = useAppSelector((state) => state?.device?.device)

    return <StyledBlogs isNotDesktop={deviceType !== "desktop"}><BlogsNews/><BasicNavLinks/></StyledBlogs>
}

export default Blogs
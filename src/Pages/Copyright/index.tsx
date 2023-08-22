import {StyledCopyright} from "./styledCopyright";
import {FC} from "react";

import {setCopyright} from "../../Redux/Slices/copyrightSlice";

import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

const Copyright:FC = () => {
    const deviceType = useAppSelector((state) => state?.device?.device)
    const dispatch: Dispatch = useAppDispatch()

    return (
        <StyledCopyright isNonDesktop={deviceType !== "desktop"}>
            <div className="copyright_wrapper">
                <div className="copyright_title">Copyright Disclaimer</div>
                <div className="copyright_content">
                    <div>Most of the BE data that is being fetched on FE belongs to their respective owners <a href={"https://mandispharmljekarne.hr/"}>Mandis Pharm Ljekarne</a> and I as the owner of this website do not claim any right over them.</div>
                    <div>Data consists mostly of images, textual data on products, blogs and footer has been translated to english.</div>
                    <div>"Copyright Disclaimer under section 107 of the Copyright Act of 1976, allowance is made for <i>“fair use”</i> for purposes such as criticism, comment, news reporting, teaching, scholarship, education and research. Fair use is a use permitted by copyright statute that might otherwise be infringing.”</div>
                    <div><span>*</span>Site will never be deployed for the production use and was only made for educational / self-learning purposes.</div>
                </div>
                <div>
                    <button onClick={() => dispatch(setCopyright({copyright: true}))}>Proceed to the Website</button>
                </div>
            </div>
        </StyledCopyright>
    )
}

export default Copyright
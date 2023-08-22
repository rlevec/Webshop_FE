import {FC} from "react";

import {StyledBasicNavLinks} from "./styledBasicNavLinks";

import Home from "../../Assets/home.svg"
import TopScroll from "../../Assets/carret-up.svg"
import BottomScroll from "../../Assets/carret-down.svg"

import {Link} from "react-router-dom";

import {locationRouteDispatcher} from "../../Utils/helpers";

import {useAppDispatch} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import {CONST} from "../../Utils/CONST";

export const BasicNavLinks: FC = () => {
    const dispatch:Dispatch = useAppDispatch()

    return <StyledBasicNavLinks className="styledComponent-basicNavLinks">
        <div className="svg-top-container">
            <div onClick={() => window.scrollTo(0, document.body.scrollHeight)}
                 className="svg-top-scroll-container"><BottomScroll/></div>
            <Link to={CONST?.routes?.root} onClick={() => locationRouteDispatcher(null, dispatch)} className="svg-top-home-container"><Home/></Link>
        </div>
        <div className="svg-bottom-container">
            <div onClick={() => window.scrollTo(0, 0)} className="svg-bottom-scroll-container"><TopScroll/>
            </div>
            <Link to={CONST?.routes?.root} onClick={() => locationRouteDispatcher(null, dispatch)} className="svg-bottom-home-container"><Home/></Link>
        </div>
    </StyledBasicNavLinks>
}
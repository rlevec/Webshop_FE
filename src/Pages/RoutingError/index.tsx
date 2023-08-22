import {StyledRoutingError} from "./styledRoutingError";

import {FC, ReactElement} from "react";

import RoutingErrorImage from "../../Assets/images/404.jpg"
import Home from "../../Assets/home.svg"

import {Link} from "react-router-dom";

import {CONST} from "../../Utils/CONST";

const RoutingError:FC = ():ReactElement => {

    return (
        <StyledRoutingError>
            <div className="routing_error-wrapper">
                <img src={RoutingErrorImage} alt="routing_error_image_404"/>
                <Link to={CONST?.routes?.root} className="home_icon-container">
                    <Home/>
                </Link>
            </div>
        </StyledRoutingError>
    )
}

export default RoutingError
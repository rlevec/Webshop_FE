import {StyledServerError} from "./styledServerError";

import {FC, ReactElement} from "react";

import ServerErrorImage from "../../Assets/images/internal_server_error.png"
import Home from "../../Assets/home.svg"

import {Link} from "react-router-dom";

import {CONST} from "../../Utils/CONST";

const ServerError:FC = (): ReactElement => {
    return (
        <StyledServerError>
            <div className="server_error-wrapper">
                <img src={ServerErrorImage} alt="server_error_image_500"/>
                <Link to={CONST?.routes?.root} className="home_icon-container">
                    <Home/>
                </Link>
            </div>
        </StyledServerError>
    )
}

export default ServerError
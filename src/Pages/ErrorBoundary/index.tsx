import {FC, ReactElement} from "react";

import {StyledErrorBoundary} from "./styledErrorBoundary";

import ErrorBoundaryImage from "../../Assets/images/error.jpg"

const ErrorBoundary:FC = ():ReactElement => {

    return (
        <StyledErrorBoundary>
            <div className="error_boundary-wrapper">
                <img src={ErrorBoundaryImage} alt="error_boundary_image"/>
            </div>
        </StyledErrorBoundary>
    )
}

export default ErrorBoundary
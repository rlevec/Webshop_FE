import {StyledLoading} from "./styledLoading";

import {FC, ReactElement} from "react";

const Loading:FC = (): ReactElement => {

    return (
        <StyledLoading>
            <div className="spinner-container">
                <div className="spinner">
                </div>
                <div className="spinner-text-content">Loading</div>
            </div>
        </StyledLoading>
    )
}

export default Loading
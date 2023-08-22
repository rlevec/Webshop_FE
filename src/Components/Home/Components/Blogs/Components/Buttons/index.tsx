import {FC, ReactElement} from "react";

import {StyledButtons} from "./styledButtons";

import {BlogFormDataTypes} from "../../types";

import {BlogFormDataButtonsPropTypes} from "./types";

const Buttons: FC<BlogFormDataButtonsPropTypes> = (props): ReactElement => {
    const {setActiveCategory, activeCategory, blogFormData} = props

    return (
        <StyledButtons className="styledComponent-Buttons">
            <div className="buttons_wrapper">
                {blogFormData?.map((el: BlogFormDataTypes) => {
                    const {title, frontendSlug, id} = el

                    return (
                        <div key={id} className="buttons_button-container">
                            <button className={frontendSlug === activeCategory ? `active` : undefined} onClick={():void => setActiveCategory(frontendSlug)}>{title}</button>
                        </div>
                    )
                })}
            </div>
        </StyledButtons>
    )
}

export default Buttons
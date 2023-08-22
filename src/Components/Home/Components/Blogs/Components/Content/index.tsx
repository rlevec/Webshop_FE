import {FC} from "react";

import {StyledContent} from "./styledContent";

import {BlogFormDataContentPropTypes} from "./types";

import {handleSliderCategories, handleCardsObjectByCategory} from "../../../../../../Utils/helpers";

import Slider from "./Slider";
import Cards from "./Cards";

const Content: FC<BlogFormDataContentPropTypes> = (props) => {

    const {activeCategory, blogFormData} = props


    return (
        <StyledContent className="styledComponent-Content">
            <div className="content_wrapper">
                {props?.activeCategory === "showAll" ? <Slider data={handleSliderCategories(blogFormData)}/> :
                    <Cards data={handleCardsObjectByCategory(blogFormData, activeCategory)}/>}
            </div>
        </StyledContent>
    )
}

export default Content
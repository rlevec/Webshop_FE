import {FC, useState} from "react";
import {StyledSlider} from "./styledSlider";

import {BlogFormDataCategoriesTypes} from "../../../types";
import {BlogFormDataSliderPropTypes} from "./types";

import Previous from "../../../../../../../Assets/angle-left.svg"
import Next from "../../../../../../../Assets/angle-right.svg"

import {handleBlogSlideChange} from "../../../../../../../Utils/helpers";

import {Link} from "react-router-dom";

import {CONST} from "../../../../../../../Utils/CONST";


const Slider: FC<BlogFormDataSliderPropTypes> = (props) => {
    const {data} = props

    const [currentSlide, setCurrentSlide] = useState<number>(1)


    return (
        <StyledSlider>
            <div className="slider_wrapper">
                <div className="slider_arrow-container"
                     onClick={() => handleBlogSlideChange(data, currentSlide, setCurrentSlide, "previous")}>
                    <Previous/>
                </div>
                <div className="slider_content-container">
                    {data?.map((el: BlogFormDataCategoriesTypes, idx: number) => {
                        const {title, image, alt, description, route} = el

                        if (currentSlide === idx) {
                            return (
                                <Link to={`${CONST?.routes?.blogNewsRoute}/${route}`} onClick={() => window.scrollTo(0, 0)} className="slider_container"
                                      key={idx}>
                                    <div className="slider_img-container">
                                        <img src={image} alt={alt}/>
                                    </div>
                                    <div className="slider_title-container">
                                        <div className="slider_title">{title}</div>
                                    </div>
                                    <div className="slider_description-container">
                                        <div className="slider_description">{description}</div>
                                    </div>
                                </Link>
                            )
                        }
                    })}
                </div>
                <div className="slider_arrow-container"
                     onClick={() => handleBlogSlideChange(data, currentSlide, setCurrentSlide, "next")}>
                    <Next/>
                </div>
            </div>
        </StyledSlider>
    )
}

export default Slider
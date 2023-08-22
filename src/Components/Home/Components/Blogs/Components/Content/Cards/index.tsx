import {FC} from "react";

import {StyledCards} from "./styledCards";

import {BlogFormDataCategoriesTypes} from "../../../types";
import {BlogFormDataCardsPropTypes} from "./types";

import {Link} from "react-router-dom"

import {CONST} from "../../../../../../../Utils/CONST";

const Cards: FC<BlogFormDataCardsPropTypes> = (props) => {

    const {data} = props


    return (
        <StyledCards className="styledComponent-Cards" singleContent={data?.categories?.length === 1}>
            <div className="cards_wrapper">
                <div className="cards_container">
                    {data?.categories?.map((el: BlogFormDataCategoriesTypes) => {
                        const {frontendSlug, image, alt, title, description, route} = el
                        return (
                            <Link to={`${CONST?.routes?.blogNewsRoute}/${route}`} onClick={() => window.scrollTo(0, 0)} className="card_container">
                                <div className="cards_image-container">
                                    <img src={image} alt={alt}/>
                                </div>
                                <div className="cards_title_container">
                                    <div className="cards_title">{title}</div>
                                </div>
                                <div className="cards_description-container">
                                    <div className="cards_description">{description}</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </StyledCards>
    )
}

export default Cards
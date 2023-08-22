import {StyledButtons} from "./styledButtons";
import {FC} from "react";

import {ProductsCategorizedButtonsFormDataFilterButtonTypes, SliceValueStateTypes} from "../../types";
import {handleClassname, handleIndexReset} from "./helpers";

type ButtonsPropTypes = {
    data: ProductsCategorizedButtonsFormDataFilterButtonTypes[]
    activeCategory: string,
    setActiveCategory: Function,
    sliceValue: SliceValueStateTypes,
    setSliceValue: Function,
    sliceStepArgument: number
}

const Buttons: FC<ButtonsPropTypes> = (props) => {
    const {
        data,
        activeCategory,
        setActiveCategory,
        sliceValue,
        setSliceValue,
        sliceStepArgument
    } = props

    return (
        <StyledButtons>
            <div className="buttons_container">
                {data?.map((el: ProductsCategorizedButtonsFormDataFilterButtonTypes) => {
                    const {id, title, frontendSlug} = el

                    return (
                        <div className="buttons_single-container" key={id}>
                            <button className={handleClassname(frontendSlug, activeCategory)}
                                    onClick={() => handleIndexReset(frontendSlug, setActiveCategory, setSliceValue, sliceValue, sliceStepArgument)}>{title}</button>
                        </div>
                    )
                })}
            </div>
        </StyledButtons>
    )
}

export default Buttons
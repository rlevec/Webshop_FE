import {StyledDropdown} from "./styledDropdown";

import React, {FC, ReactElement, useState} from "react";

import {BlogFormDataTypes} from "../../types";
import {BlogFormDataDropdownPropTypes} from "./types";


import CarretUp from "../../../../../../Assets/carret-up.svg"
import CarretDown from "../../../../../../Assets/carret-down.svg"

const Dropdown: FC<BlogFormDataDropdownPropTypes> = (props): ReactElement => {
    const [dropdownActive, setDropdownActive] = useState<boolean>(false)

    const {activeCategory, setActiveCategory, blogFormData} = props


    return (
        <StyledDropdown className="styledComponent-Dropdown" dropdownActive={dropdownActive}>
            <div className="dropdown_container">
                <div className="dropdown_selector-container" onClick={(): void => setDropdownActive(!dropdownActive)}>
                    <div className="dropdown_selector-selected-container">
                        {blogFormData?.find((el: BlogFormDataTypes) => el?.frontendSlug === activeCategory)?.title}
                    </div>
                    <div className="dropdown_selector-icon-container">
                        {dropdownActive ? <CarretUp/> : <CarretDown/>}
                    </div>
                </div>
                <div className="dropdown_active-container">
                    {dropdownActive && blogFormData?.filter((el: BlogFormDataTypes) => el?.frontendSlug !== activeCategory)?.map((el: BlogFormDataTypes) => {
                        const {title, frontendSlug} = el

                        return (
                            <div className="dropdown_active-single-content" onClick={(): void => {
                                setActiveCategory(frontendSlug);
                                setDropdownActive(false);
                            }}>{title}</div>
                        )
                    })}
                </div>
            </div>
        </StyledDropdown>
    )
}

export default Dropdown
import {StyledDropdown} from "./styledDropdown";
import React, {FC, useState} from "react";

import {ProductsCategorizedButtonsFormDataFilterButtonTypes} from "../../types"
import {DrodpdownPropTypes} from "./types";


import CarretUp from "../../../../../../Assets/carret-up.svg";
import CarretDown from "../../../../../../Assets/carret-down.svg";
import {useAppSelector} from "../../../../../../Redux/Store/store";
import {handleIndexReset} from "./helpers";


const Dropdown: FC<DrodpdownPropTypes> = (props) => {
    const {
        data,
        activeCategory,
        setActiveCategory,
        setPhoneSliceValue,
        phoneSliceValue,
        setTabletSliceValue,
        tabletSliceValue,
        tabletSliceStepArgument,
        phoneSliceStepArgument
    } = props

    const [dropdownActive, setDropdownActive] = useState<boolean>(false)

    const deviceType = useAppSelector((state) => state?.device?.device)

    return (
        <StyledDropdown dropdownActive={dropdownActive}>
            <div className="dropdown_container">
                <div className="dropdown_selector-container" onClick={(): void => setDropdownActive(!dropdownActive)}>
                    <div className="dropdown_selector-selected-container">
                        {data?.find((el: ProductsCategorizedButtonsFormDataFilterButtonTypes): boolean => el?.frontendSlug === activeCategory)?.title}
                    </div>
                    <div className="dropdown_selector-icon-container">
                        {dropdownActive ? <CarretUp/> : <CarretDown/>}
                    </div>
                </div>
                <div className="dropdown_active-container">
                    {dropdownActive && data?.filter((el: ProductsCategorizedButtonsFormDataFilterButtonTypes): boolean => el?.frontendSlug !== activeCategory)?.map((el: ProductsCategorizedButtonsFormDataFilterButtonTypes) => {
                        const {title, frontendSlug} = el

                        return (
                            <div className="dropdown_active-single-content" onClick={(): void => {
                                setActiveCategory(frontendSlug);
                                setDropdownActive(false);
                                handleIndexReset(deviceType, frontendSlug, setActiveCategory, setPhoneSliceValue, phoneSliceValue, setTabletSliceValue, tabletSliceValue, phoneSliceStepArgument, tabletSliceStepArgument)
                            }}>{title}</div>
                        )
                    })}
                </div>
            </div>
        </StyledDropdown>
    )
}

export default Dropdown
import {StyledCustomSelect} from "./styledCustomSelect";

import {FC, ReactElement} from "react";
import * as React from "react";

import {
    handleRegistrationCustomSelectClassname,
    handleRegistrationCustomSelectActiveDropdownOptions,
    handleRegistrationCustomSelectCurrentDropdownActive,
    handleRegistrationCustomSelectSelectedValue, handleRegistrationCustomSelectInputFieldError
} from "./helpers";

import {CustomSelectPropTypes} from "./types";
import {handleIcons} from "../../../../../Utils/helpers";


const CustomSelect: FC<CustomSelectPropTypes> = (props): ReactElement => {
    const {
        frontendSlug,
        dropdownActive,
        setDropdownActive,
        fieldError,
        placeholder,
        options,
        error,
        query,
        setQuery
    } = props

    return (
        <StyledCustomSelect key={frontendSlug} className="styledComponent-CustomSelect"
                            onClick={(): void | null => handleRegistrationCustomSelectCurrentDropdownActive(frontendSlug as string, dropdownActive, setDropdownActive)}>
            <div className="select_input_wrapper">
                <div className="select_input_value-container">
                    <div
                        className={handleRegistrationCustomSelectClassname(frontendSlug as string, query)}>{handleRegistrationCustomSelectSelectedValue(placeholder as string, query, frontendSlug as string)}</div>
                </div>
                <div className="select_input_dropdown-container">
                    {handleRegistrationCustomSelectActiveDropdownOptions(frontendSlug as string, dropdownActive, options as string[] | number[], query, setQuery)}
                </div>
                <div
                    className="inputs_field-icons">{handleIcons(frontendSlug)}</div>
                <div
                    className="inputs_field-error">{handleRegistrationCustomSelectInputFieldError(frontendSlug, error, fieldError)}</div>
            </div>
        </StyledCustomSelect>
    )
}

export default CustomSelect
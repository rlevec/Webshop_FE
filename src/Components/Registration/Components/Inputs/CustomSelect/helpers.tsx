import {
    RegistrationFieldErrorStateTypes,
    RegistrationQueryStateTypes,
    RegistrationSelectDropdownInputStateTypes,
} from "../../../types";

import {ReactElement} from "react";
import * as React from "react";



//handle current dropdown active
export const handleRegistrationCustomSelectCurrentDropdownActive = (frontendSlug: string, dropdownActive: RegistrationSelectDropdownInputStateTypes, setDropdownActive: Function): void | null => {
    if (frontendSlug === "country") setDropdownActive({
        ...dropdownActive,
        country: !dropdownActive?.country,
        month: false,
        year: false
    })
    else if (frontendSlug === "expireMonth") setDropdownActive({
        ...dropdownActive,
        month: !dropdownActive?.month,
        year: false,
        country: false
    })
    else if (frontendSlug === "expireYear") setDropdownActive({
        ...dropdownActive,
        year: !dropdownActive?.year,
        month: false,
        country: false
    })
    else return null
}

//handle styling based on whether value has / has not been selected
export const handleRegistrationCustomSelectClassname = (frontendSlug: string, query: RegistrationQueryStateTypes): string | undefined => {
    if (frontendSlug === "country") {
        if (query?.country !== "") return "select_input_placeholder-value-container active"
        else return "select_input_placeholder-value-container"
    } else if (frontendSlug === "expireMonth") {
        if (query?.expireMonth !== "") return "select_input_placeholder-value-container active"
        else return "select_input_placeholder-value-container"
    } else if (frontendSlug === "expireYear") {
        if (query?.expireYear !== "") return "select_input_placeholder-value-container active"
        else return "select_input_placeholder-value-container"
    } else return undefined
}


//set selected value to state, else return placeholder as value
export const handleRegistrationCustomSelectSelectedValue = (placeholder: string, query: RegistrationQueryStateTypes, frontendSlug: string): string | undefined => {
    if (frontendSlug === "country") {
        if (query?.country !== "") return query?.country
        else return placeholder
    } else if (frontendSlug === "expireMonth") {
        if (query?.expireMonth !== "") return query?.expireMonth
        else return placeholder
    } else if (frontendSlug === "expireYear") {
        if (query?.expireYear !== "") return query?.expireYear
        else return placeholder
    } else return undefined
}


//render dropdown content based on the frontendSlug property value
const renderRegistrationCustomSelectDropdown = (options: number[] | string[], frontendSlug: string, setQuery: Function, query: RegistrationQueryStateTypes): ReactElement => {
    return (
        <div className="dropdown_wrapper">
            {options?.map((el: number | string) => {
                return <div onClick={(): void => {
                    if (frontendSlug === "country") setQuery({...query, country: el})
                    else if (frontendSlug === "expireMonth") setQuery({...query, expireMonth: el})
                    else if (frontendSlug === "expireYear") setQuery({...query, expireYear: el})
                }} className="dropdown_element">{el}</div>
            })}
        </div>
    )
}


//render active dropdown options value
export const handleRegistrationCustomSelectActiveDropdownOptions = (slug: string, dropdownActive: RegistrationSelectDropdownInputStateTypes, options: string[] | number[], query: RegistrationQueryStateTypes, setQuery: Function): ReactElement | null => {
    if (slug === "country" && dropdownActive?.country) return renderRegistrationCustomSelectDropdown(options, slug, setQuery, query)
    else if (slug === "expireMonth" && dropdownActive?.month) return renderRegistrationCustomSelectDropdown(options, slug, setQuery, query)
    else if (slug === "expireYear" && dropdownActive?.year) return renderRegistrationCustomSelectDropdown(options, slug, setQuery, query)
    return null
}


//handle input field error
export function handleRegistrationCustomSelectInputFieldError(frontendSlug: string, error: string, fieldError: RegistrationFieldErrorStateTypes): string | null {
    if (frontendSlug === "expireMonth" && fieldError?.expireMonth) return error
    else if (frontendSlug === "expireYear" && fieldError?.expireYear) return error
    else return null
}


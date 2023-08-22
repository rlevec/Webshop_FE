import {StyledRegular} from "./styledRegular";

import Question from "../../../../../Assets/question.svg"

import {FC, ReactElement, useState} from "react";
import * as React from "react";

import {
    RegistrationShowPasswordTypeStateTypes
} from "../../../types";
import {RegularPropTypes} from "./types";

import {handleFieldInfoPopUp} from "./helpers";
import {
    handleIcons,
    handlePasswordIconByType,
    handleChangeAndValidation,
    handlePasswordFieldsTypes,
    handleInputValue,
    handleFieldErrors
} from "../../../../../Utils/helpers";


const Regular: FC<RegularPropTypes> = (props) => {

    const [showPasswordType, setShowPasswordType] = useState<RegistrationShowPasswordTypeStateTypes>({
        password: "password",
        confirmPassword: "password"
    })

    const [dateFocused, setDateFocused] = useState<boolean>(false)

    const [fieldInfoPopUpActive, setFieldInfoPopUpActive] = useState<string | null>(null)


    const {
        frontendSlug,
        query,
        setQuery,
        fieldError,
        setFieldError,
        validation,
        placeholder,
        min,
        max,
        type,
        name,
        error,
        fieldExampleData
    } = props


    return (
        <StyledRegular dateSelected={query?.dob !== ""} key={frontendSlug} className="styledComponent-Regular">
            <input
                value={handleInputValue(frontendSlug as string, query)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void | null => handleChangeAndValidation(e?.target?.value, frontendSlug as string, query, setQuery, fieldError, setFieldError, validation as string)}
                name={name}
                placeholder={placeholder}
                autoComplete="off"
                type={handlePasswordFieldsTypes(frontendSlug as string, type as string, showPasswordType)}
                min={min}
                max={max}
                onFocus={() => frontendSlug === "dob" && setDateFocused?.(true)}
                onBlur={() => frontendSlug === "dob" && setDateFocused?.(false)}
            />
            {fieldInfoPopUpActive === frontendSlug && handleFieldInfoPopUp(frontendSlug, fieldExampleData, fieldInfoPopUpActive)}
            {fieldExampleData && <div className="field_example-data" onClick={(): void => {
                if (fieldInfoPopUpActive === frontendSlug) setFieldInfoPopUpActive(null)
                else setFieldInfoPopUpActive(frontendSlug)
            }}><Question/></div>}
            <div
                className="inputs_field-icons">{handleIcons(frontendSlug, dateFocused)}</div>
            <div
                className="inputs_field-sub-icons">{handlePasswordIconByType(frontendSlug, setShowPasswordType, showPasswordType)}</div>
            <div
                className="inputs_field-error">{handleFieldErrors(frontendSlug, error, fieldError)}</div>
        </StyledRegular>
    )
}

export default Regular
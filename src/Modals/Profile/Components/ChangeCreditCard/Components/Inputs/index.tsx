import {StyledInputs} from "./styledInputs";

import React, {FC} from "react";

import {ChangeCreditCardInputPropTypes} from "./types";

import {handleIcons, handleChangeAndValidation, handleInputValue, handleFieldErrors} from "../../../../../../Utils/helpers";


const Inputs: FC<ChangeCreditCardInputPropTypes> = (props) => {
    const {
        placeholder,
        frontendSlug,
        validation,
        error,
        type,
        name,
        label,
        min,
        max,
        query,
        fieldError,
        setFieldError,
        setQuery
    } = props

    return (
        <StyledInputs>
            <input
                placeholder={placeholder}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChangeAndValidation(e?.target?.value, frontendSlug, query, setQuery, fieldError, setFieldError, validation, null, min, max)}
                value={handleInputValue(frontendSlug, query)}
                name={name}
                type={type}
            />
            <div className="inputs_input-field-icons">{handleIcons(frontendSlug)}</div>
            <div
                className="inputs_input-field-error">{handleFieldErrors(frontendSlug, error, fieldError)}</div>
        </StyledInputs>
    )
}

export default Inputs
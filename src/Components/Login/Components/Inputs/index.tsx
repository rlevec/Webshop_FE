import {StyledInputs} from "./styledInputs";

import {FC, ReactElement, useState} from "react";

import {handleIcons, handlePasswordIconByType, handleChangeAndValidation, handlePasswordFieldsTypes, handleInputValue, handleFieldErrors} from "../../../../Utils/helpers";


import {LoginShowPasswordTypeStateTypes, LoginInputsProps} from "./types";


const Inputs:FC<LoginInputsProps> = (props): ReactElement => {
    const {
        frontendSlug,
        type,
        placeholder,
        query,
        fieldError,
        validation,
        setFieldError,
        setQuery,
        name,
        error
    } = props

    const [showPasswordType, setShowPasswordType] = useState<LoginShowPasswordTypeStateTypes>({
        password: "password",
    })


    return (
        <StyledInputs>
            <div key={frontendSlug} className="inputs_input-container">
                <input
                    name={name}
                    type={handlePasswordFieldsTypes(frontendSlug, type, showPasswordType)}
                    placeholder={placeholder}
                    value={handleInputValue(frontendSlug, query)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>): void | null => handleChangeAndValidation(e?.target?.value, frontendSlug, query, setQuery, fieldError, setFieldError, validation)}
                />
                <div
                    className="inputs_input-field-error">{handleFieldErrors(frontendSlug, error, fieldError)}</div>
                <div
                    className="inputs_input-field-sub-icons">{handlePasswordIconByType(frontendSlug, setShowPasswordType, showPasswordType)}</div>
                <div
                    className="inputs_input-field-icons">{handleIcons(frontendSlug)}</div>
            </div>
        </StyledInputs>
    )
}

export default Inputs
import {StyledCustomRadio} from "./styledCustomRadio";

import {FC, ReactElement} from "react";
import * as React from "react";

import {CustomRadioPropTypes} from "./types";
import {handleIcons, handleFieldErrors} from "../../../../../Utils/helpers";

const CustomRadio:FC<CustomRadioPropTypes> = (props): ReactElement => {
    const {
        frontendSlug,
        query,
        setQuery,
        error,
        fieldError,
        options
    } = props

    return (
        <StyledCustomRadio key={frontendSlug} className="styledComponent-CustomRadio">
            <div className="radio_wrapper">
                <button
                    className={query?.gender !== options?.[0] as string ? "gender_male-button" : "gender_male-button male-active"}
                    onClick={(): void => setQuery?.({
                        ...query,
                        gender: options?.[0] as string
                    })}>{options?.[0] as string}</button>
                <button
                    className={query?.gender as string !== options?.[1] ? "gender_female-button" : "gender_female-button female-active"}
                    onClick={(): void => setQuery?.({
                        ...query,
                        gender: options?.[1] as string
                    })}>{options?.[1] as string}</button>
                <div
                    className="inputs_field-icons">{handleIcons(frontendSlug)}</div>
                <div
                    className="inputs_field-error">{handleFieldErrors(frontendSlug, error, fieldError)}</div>
            </div>
        </StyledCustomRadio>
    )
}

export default CustomRadio
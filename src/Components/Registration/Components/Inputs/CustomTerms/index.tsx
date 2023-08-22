import {StyledCustomTerms} from "./styledCustomTerms";

import {FC, ReactElement} from "react";
import * as React from "react";

import {CustomTermsProps} from "./types";

const CustomTerms:FC<CustomTermsProps> = (props): ReactElement => {
    const {
        frontendSlug,
        content,
        setTermsAccepted,
        termsAcceptBtnLabel,
        termsDeclineBtnLabel
    } = props

    return (
        <StyledCustomTerms key={frontendSlug} className="styledComponent-CustomTerms">
            <div className="terms_wrapper">
                <div className="terms_content-container">
                    <div
                        dangerouslySetInnerHTML={{__html: content as string}}></div>
                </div>
                <div className="terms_button-container">
                    <button className="terms_button-decline"
                            onClick={() => setTermsAccepted(false)}>
                        {termsDeclineBtnLabel}
                    </button>
                    <button className="terms_button-accept"
                            onClick={() => setTermsAccepted(true)}>
                        {termsAcceptBtnLabel}
                    </button>
                </div>
            </div>
        </StyledCustomTerms>
    )
}

export default CustomTerms
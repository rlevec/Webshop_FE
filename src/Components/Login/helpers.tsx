import {ReactElement} from "react";
import * as React from "react";

import {
    LoginFormDataTypes,
    LoginSubmitErrorStateTypes,
} from "./types";


//render error based on the BE response
export const renderSubmitError = (submitError: LoginSubmitErrorStateTypes, loginFormData: LoginFormDataTypes): ReactElement | null => {
    if (submitError?.emailError) return <div
        className="submit-error">{loginFormData?.submitEmailError}</div>
    else if (submitError?.nonExistent) return <div
        className="submit-error">{loginFormData?.submitUnregisteredError}</div>
    else if (submitError?.passwordError) return <div
        className="submit-error">{loginFormData?.submitPasswordError}</div>
    else return null
}

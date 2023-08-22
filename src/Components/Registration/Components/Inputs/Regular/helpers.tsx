import {ReactElement} from "react";
import * as React from "react";
import {RegistrationFieldErrorStateTypes} from "../../../types";

export const handleFieldInfoPopUp = (frontendSlug: string, fieldExampleData: string, fieldInfoPopUpActive:string): ReactElement | null => {
    if (frontendSlug === fieldInfoPopUpActive) return <div
        className="example_field_rendered">{fieldExampleData}</div>
    else return null
}

import {ReactElement} from "react";
import * as React from "react";

import Email from "../../Assets/email.svg";
import Password from "../../Assets/password.svg";
import User from "../../Assets/user.svg";
import Signature from "../../Assets/signature.svg";
import Globe from "../../Assets/country.svg";
import City from "../../Assets/city.svg";
import Postal from "../../Assets/postal.svg";
import Address from "../../Assets/address.svg";
import CreditCard from "../../Assets/credit-card.svg";
import Calendar from "../../Assets/calendar.svg";
import Security from "../../Assets/ccv.svg";
import Genders from "../../Assets/gender.svg";
import DatePicker from "../../Assets/datePicker.svg";

import {RegistrationFormDataInputTypes, RegistrationFormDataTypes} from "../../Components/Registration/types";
import {LoggedUserDataTypes} from "./types";


//handle basic icons for each rendered field based on the frontendSlug property value
export const handleProfileFieldIcons = (frontendSlug: string): ReactElement | null => {
    if (frontendSlug === "email") return <Email/>
    else if (frontendSlug === "password") return <Password/>
    else if (frontendSlug === "username") return <User/>
    else if (frontendSlug === "firstName" || frontendSlug === "lastName") return <Signature/>
    else if (frontendSlug === "country") return <Globe/>
    else if (frontendSlug === "city") return <City/>
    else if (frontendSlug === "zip") return <Postal/>
    else if (frontendSlug === "address") return <Address/>
    else if (frontendSlug === "creditCard") return <CreditCard/>
    else if (frontendSlug === "expireMonth" || frontendSlug === "expireYear") return <Calendar/>
    else if (frontendSlug === "ccv") return <Security/>
    else if (frontendSlug === "gender") return <Genders/>
    else if (frontendSlug === "dob") return <DatePicker/>
    else return null
}

//get label from registrationFormData
export const transformStringToReadableLabel = (slug: string, registrationFormData: RegistrationFormDataTypes): string | undefined => registrationFormData?.inputs.find((el: RegistrationFormDataInputTypes) => el?.frontendSlug === slug)?.label



//handle all possible user status states
export const handleUserState = (userEmail: string | undefined, loggedUsersData: LoggedUserDataTypes[]): {isUserLogged: boolean, userObjectExits: boolean, matchUserDataObj: LoggedUserDataTypes | undefined} => {

    let isUserLogged: boolean = userEmail === "" || userEmail === undefined ? false : true

    let matchUserDataObj: LoggedUserDataTypes | undefined = loggedUsersData?.find((el: LoggedUserDataTypes): boolean => el?.email === userEmail)

    let userObjectExits: boolean = matchUserDataObj !== undefined ? true : false

    return {isUserLogged , userObjectExits, matchUserDataObj}
}
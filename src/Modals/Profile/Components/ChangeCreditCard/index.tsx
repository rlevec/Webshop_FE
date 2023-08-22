import {StyledChangeCreditCard} from "./styledChangeCreditCard";

import {FC, useState} from "react";
import * as React from "react";

import {ChangeCreditCardFormDataTypes, ChangeCreditCardInputFormDataTypes, ChangeCreditCardPropTypes, ChangeCreditCardQueryStateTypes, ChangeCreditCardFieldErrorStateTypes} from "./types";

import {
    useGetChangeCreditCardFormDataQuery
} from "../../../../Redux/Slices/apiSlice";

import Inputs from "./Components/Inputs"
import Buttons from "./Components/Buttons";
import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";


const ChangeCreditCard: FC<ChangeCreditCardPropTypes> = (props) => {
    const {setActiveComponent} = props

    const {
        data: isFetchedChangeCreditCardFormData,
        isFetching: isFetchingChangeCreditCardFormData,
        isLoading: isLoadingChangeCreditCardFormData,
        isError: isErrorChangeCreditCardFormData
    } = useGetChangeCreditCardFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })



    const [query, setQuery] = useState<ChangeCreditCardQueryStateTypes>({
        newCreditCard: "",
        newCcv: "",
        newExpireMonth: "",
        newExpireYear: ""
    })
    const [fieldError, setFieldError] = useState<ChangeCreditCardFieldErrorStateTypes>({
        newCreditCard: false, newCcv: false, newExpireMonth: false, newExpireYear: false
    })


    const changeCreditCardFormData: ChangeCreditCardFormDataTypes = isFetchedChangeCreditCardFormData



    if (isFetchingChangeCreditCardFormData || isLoadingChangeCreditCardFormData) return <Loading/>
    else if (isErrorChangeCreditCardFormData || !isFetchedChangeCreditCardFormData) return <ServerError/>
    else {
        return (
            <StyledChangeCreditCard>
                <div className="change_credit_card_form-wrapper">
                    <label>{changeCreditCardFormData?.formLabel}</label>
                    <div className="change_credit_card_inputs-container">
                        {changeCreditCardFormData?.inputs?.map((el: ChangeCreditCardInputFormDataTypes) => {
                            const {
                                frontendSlug,
                                placeholder,
                                validation,
                                error,
                                type,
                                name,
                                label,
                                min,
                                max
                            } = el

                            return (
                                <Inputs
                                    query={query}
                                    fieldError={fieldError}
                                    setQuery={setQuery}
                                    setFieldError={setFieldError}
                                    frontendSlug={frontendSlug}
                                    placeholder={placeholder}
                                    validation={validation}
                                    error={error}
                                    type={type}
                                    name={name}
                                    label={label}
                                    min={min as number}
                                    max={max as number}/>
                            )
                        })}
                    </div>
                    <Buttons
                        setActiveComponent={setActiveComponent}
                        backButtonLabel={changeCreditCardFormData?.backButtonLabel}
                        fieldError={fieldError} query={query}
                        submitButtonLabel={changeCreditCardFormData?.submitButtonLabel}
                    />
                </div>
            </StyledChangeCreditCard>
        )
    }
}

export default ChangeCreditCard
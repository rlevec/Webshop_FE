import {StyledWarningModal} from "./styledWarningModal";

import {FC, useRef} from "react";
import * as React from "react";

import {useHandleClickOutside} from "../../Utils/helpers";

import {WarningModalPropTypes, WarningModalFormDataTypes} from "./types";

import {useUseGetWarningModalFormDataQuery} from "../../Redux/Slices/apiSlice";
import {useAppSelector, useAppDispatch} from "../../Redux/Store/store";
import {
    useDeleteLoggedUserMutation,
    useDeleteRegisteredUserMutation
} from "../../Redux/Slices/apiSlice";
import {removeLoginData} from "../../Redux/Slices/loginSlice";
import {Dispatch} from "@reduxjs/toolkit";

import {NavigateFunction, useNavigate} from "react-router-dom";

import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";
import {CONST} from "../../Utils/CONST";

const Warning: FC<WarningModalPropTypes> = (props) => {
    const {
        data: isFetchedWarningModalFormData,
        isFetching: isFetchingWarningModalFormData,
        isLoading: isLoadingWarningModaFormData,
        isError: isErrorWarningModalFormData
    } = useUseGetWarningModalFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true
    })


    const warningModalRef: React.RefObject<HTMLDivElement> = useRef(null)

    const {setWarningModalActive} = props

    const dispatch: Dispatch = useAppDispatch()

    const navigate: NavigateFunction = useNavigate()

    const userEmail = useAppSelector((state) => state?.login?.loginData?.email)

    const [deleteLoggedUser, {isError, isLoading}] = useDeleteLoggedUserMutation()
    const [deleteRegisteredUser] = useDeleteRegisteredUserMutation()

    const warningModalFormData: WarningModalFormDataTypes = isFetchedWarningModalFormData || {}

    useHandleClickOutside(setWarningModalActive, warningModalRef)

    if (isFetchingWarningModalFormData || isLoadingWarningModaFormData) return <Loading/>
    else if (isErrorWarningModalFormData || !isFetchedWarningModalFormData) return <ServerError/>
    else {
        return (
            <StyledWarningModal ref={warningModalRef}>
                <div className="warning_modal-wrapper">
                    <div className="warning_modal-title">{warningModalFormData?.title}</div>
                    <div className="warning_modal-desc">
                        <div className="warning_modal-desc-dynamic">{warningModalFormData?.descriptionOne}</div>
                        <div className="warning_modal-desc-static">{warningModalFormData?.descriptionTwo}</div>
                    </div>
                    <div className="warning_modal-buttons">
                        <button className="warning_modal-close-button"
                                onClick={(): void => setWarningModalActive(false)}>
                            {warningModalFormData?.buttonCloseTitle}
                        </button>
                        <button className="warning_modal-action-button"
                                onClick={(): void => {
                                    dispatch(removeLoginData({loginData: {email: ""}}));
                                    deleteLoggedUser(userEmail);
                                    deleteRegisteredUser(userEmail)
                                    navigate(CONST?.routes?.root)
                                }}
                        >
                            {warningModalFormData?.buttonActionTitle}
                        </button>
                    </div>
                </div>
            </StyledWarningModal>
        )
    }
}

export default Warning
import {FC, ReactElement, useState} from "react";

import {StyledProfile} from "./styledProfile";

import {CONST} from "../../Utils/CONST";

import {handleProfileFieldIcons, transformStringToReadableLabel, handleUserState} from "./helpers";
import {locationRouteDispatcher, productsRouteDispatcher} from "../../Utils/helpers";

import MaleAvatar from "../../Assets/maleAvatar.png"
import FemaleAvatar from "../../Assets/femaleAvatar.png"
import Logout from "../../Assets/logout.svg"
import CloseIcon from "../../Assets/close.svg"


import {
    useDeleteLoggedUserMutation,
    useGetProfileFormDataQuery,
    useGetLoggedUsersQuery,
    useGetRegistrationFormDataQuery,
} from "../../Redux/Slices/apiSlice";
import {useAppSelector, useAppDispatch} from "../../Redux/Store/store";
import {removeLoginData} from "../../Redux/Slices/loginSlice";
import {Dispatch} from "@reduxjs/toolkit";

import {Link, NavigateFunction, useNavigate} from "react-router-dom";

import {ProfileModalPropTypes, LoggedUserDataTypes, ProfileButtonsFormDataTypes, ProfileFormDataTypes, RegistrationFormDataTypes} from "./types";

import ChangeCreditCard from "./Components/ChangeCreditCard";
import ChangePassword from "./Components/ChangePassword";
import Warning from "../Warning";
import ServerError from "../../Pages/ServerError";
import Loading from "../../Pages/Loading";
import Close from "../../Assets/close.svg";


export const Profile: FC<ProfileModalPropTypes> = (props): ReactElement | null => {
    const {
        data: isFetchedProfileFormData,
        isFetching: isFetchingProfileFormData,
        isLoading: isLoadingProfileFormData,
        isError: isErrorProfileFormData
    } = useGetProfileFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})

    const {
        data: isFetchedRegistrationFormData,
        isFetching: isFetchingRegistrationFormData,
        isLoading: isLoadingRegistrationFormData,
        isError: isErrorRegistrationFormData
    } = useGetRegistrationFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true
    })


    const {
        data: isFetchedLoggedUsersData,
        isFetching: isFetchingLoggedUsersData,
        isLoading: isLoadingLoggedUsersData,
        isError: isErrorLoggedUsersData
    } = useGetLoggedUsersQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})

    const navigate: NavigateFunction = useNavigate()

    const {modalActive, setModalActive} = props

    const [warningModalActive, setWarningModalActive] = useState<boolean>(false)

    const dispatch: Dispatch = useAppDispatch()

    const userEmail = useAppSelector((state) => state?.login?.loginData?.email)


    const [
        logoutUser,
        {isLoading: isDeleteLoggedUserMutationLoading}
    ] = useDeleteLoggedUserMutation()

    const [activeComponent, setActiveComponent] = useState<string>("profile")


    const profileFormData: ProfileFormDataTypes = isFetchedProfileFormData

    const registrationFormData: RegistrationFormDataTypes = isFetchedRegistrationFormData

    const loggedUsersData: LoggedUserDataTypes[] = isFetchedLoggedUsersData

    const deviceType = useAppSelector((state) => state?.device?.device)


    if (isFetchingProfileFormData || isLoadingProfileFormData || isFetchingLoggedUsersData || isLoadingLoggedUsersData || isFetchingRegistrationFormData || isLoadingRegistrationFormData || isDeleteLoggedUserMutationLoading) return <Loading/>
    else if (isErrorProfileFormData || isErrorLoggedUsersData || isErrorRegistrationFormData || !isFetchedProfileFormData || !isFetchedLoggedUsersData || !isFetchedRegistrationFormData) return <ServerError/>
    else {
        if (!handleUserState(userEmail, loggedUsersData)?.userObjectExits && !handleUserState(userEmail, loggedUsersData)?.isUserLogged) {
            return (
                <StyledProfile onMouseEnter={(): void => setModalActive({...modalActive, profile: true})}
                               onMouseLeave={(): void => setModalActive({...modalActive, profile: false})}>
                    <div className="profile_wrapper">
                        {deviceType !== "desktop" && <div className="close-icon-container" onClick={() => setModalActive({...modalActive, profile: false})}><Close/></div>}
                        <div className="profile_anauth-content-container">
                            <div
                                className="profile_anauth_title">{profileFormData?.profileUnauthenticatedFormData?.title}</div>
                            <div
                                className="profile_anauth_paragraph_one">{profileFormData?.profileUnauthenticatedFormData?.paragraphOne}</div>
                            <div
                                className="profile_anauth_paragraph_two"> {profileFormData?.profileUnauthenticatedFormData?.paragraphTwo}
                                <Link
                                    to={CONST?.routes?.loginRoute}
                                    onClick={() => {
                                        productsRouteDispatcher(null, null, null, dispatch)
                                        locationRouteDispatcher(null ,dispatch)
                                    }}> {profileFormData?.profileUnauthenticatedFormData?.link}</Link> {profileFormData?.profileUnauthenticatedFormData?.paragraphThree}.
                            </div>
                        </div>
                    </div>
                </StyledProfile>
            )
        } else {
            if (activeComponent === "profile") {
                return (
                    <StyledProfile onMouseEnter={(): void => setModalActive({...modalActive, profile: true})}
                                   onMouseLeave={(): void => setModalActive({...modalActive, profile: false})}>
                        <div className="profile_wrapper">
                            {deviceType !== "desktop" && <div className="close-icon-container" onClick={() => setModalActive({...modalActive, profile: false})}><Close/></div>}
                            <div className="profile_container">
                                {warningModalActive && <div className="profile_warning-modal-container"><Warning
                                  setWarningModalActive={setWarningModalActive}/></div>}
                                <div className="profile_content-container">
                                    {Object?.entries?.(handleUserState(userEmail, loggedUsersData)?.matchUserDataObj as LoggedUserDataTypes | {} || {})?.map(([key, val]) => {
                                        return (
                                            <div className="profile_content">
                                                <div className="profile_field-icon">{handleProfileFieldIcons(key)}</div>
                                                <div
                                                    className="profile_field-label">{transformStringToReadableLabel(key, registrationFormData)}:
                                                </div>
                                                <div className="profile_field-value">{val as string}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="profile_buttons-icon-container">
                                    <div className="profile_icon-container">
                                        <div className="profile_delete-account-modal-icon-trigger"
                                             onClick={(): void => setWarningModalActive(true)}><CloseIcon/></div>
                                        {handleUserState(userEmail, loggedUsersData)?.matchUserDataObj?.gender === "Male" ?
                                            <img src={MaleAvatar} alt="male-avatar"/> :
                                            <img src={FemaleAvatar} alt="female-avatar"/>
                                        }
                                    </div>
                                    <div className="profile_component-activate-buttons-container">
                                        {profileFormData?.profileButtonsFormData?.map((el: ProfileButtonsFormDataTypes) => {
                                            const {id, frontendSlug, label} = el

                                            return (
                                                <div className="profile_component-activate-button-container" key={id} onClick={(): void => setActiveComponent(`${frontendSlug}`)}>
                                                    <button>
                                                        {label}
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="logout_icon-container" onClick={(): void => {
                                        dispatch(removeLoginData({loginData: {email: ""}}));
                                        logoutUser(userEmail);
                                        navigate(CONST?.routes?.root);
                                    }}>
                                        <Logout/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </StyledProfile>
                )
            } else if (activeComponent === "changeCreditCard") {
                return (
                    <StyledProfile onMouseEnter={(): void => setModalActive({...modalActive, profile: true})}
                                   onMouseLeave={(): void => setModalActive({...modalActive, profile: false})}>
                        <div className="profile_wrapper">
                            <ChangeCreditCard setActiveComponent={setActiveComponent}/>
                        </div>
                    </StyledProfile>
                )
            } else if (activeComponent === "changePassword") {
                return (
                    <StyledProfile onMouseEnter={(): void => setModalActive({...modalActive, profile: true})}
                                   onMouseLeave={(): void => setModalActive({...modalActive, profile: false})}>
                        <div className="profile_wrapper">
                            <ChangePassword setActiveComponent={setActiveComponent}/>
                        </div>
                    </StyledProfile>
                )
            } else return null
        }
    }
}

export default Profile
import React, { FC, ReactElement } from "react";

import { StyledEditConsent } from "./styledEditConsent";

import { Link } from "react-router-dom";

import { EditConsentTypes, ConsentInitialStateTypes } from "./types";

import { useAppSelector, useAppDispatch } from "../../../../../../Redux/Store/store";
import { Dispatch } from "@reduxjs/toolkit";
import { useGetEditConsentFormDataQuery } from "../../../../../../Redux/Slices/apiSlice";

import { BasicNavLinks } from "../../../../../../Shared/BasicNavLinks";
import ServerError from "../../../../../../Pages/ServerError";
import Loading from "../../../../../../Pages/Loading";

import { CONST } from "../../../../../../Utils/CONST";

import {useHandleMarketingServicesChange, useHandleAnalyticsChange} from "./helpers";

const EditConsent: FC = (): ReactElement => {
    const {
        data: isFetchedEditConsentFormData,
        isFetching: isFetchingEditConsentFormData,
        isLoading: isLoadingEditConsentFormData,
        isError: isErrorEditConsentFormData
    } = useGetEditConsentFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    });

    const editConsentFormData: EditConsentTypes = isFetchedEditConsentFormData;

    const consentData: ConsentInitialStateTypes = useAppSelector((state) => state?.consent);

    const dispatch: Dispatch = useAppDispatch();


    if (isFetchingEditConsentFormData || isLoadingEditConsentFormData)
        return <Loading />;
    else if (isErrorEditConsentFormData || !isFetchedEditConsentFormData)
        return <ServerError />;
    else {
        return (
            <StyledEditConsent>
                <BasicNavLinks />
                <div className="edit_consent-wrapper">
                    <div className="edit_consent-container">
                        <div className="edit_consent_perma_label-input-container">
                            <input
                                onChange={() => null}
                                type={editConsentFormData?.necessaryCookies?.inputType}
                                checked={consentData?.cookies}
                            />
                            <label>{editConsentFormData?.necessaryCookies?.label}</label>
                        </div>
                        <ul>
                            <li>
                                {editConsentFormData?.necessaryCookies?.descriptionOne}{" "}
                                <span>
                  <Link to={CONST?.routes?.termsRoute}>
                    {editConsentFormData?.necessaryCookies?.linkOne}
                  </Link>
                </span>
                                .
                            </li>
                            <li>{editConsentFormData?.necessaryCookies?.descriptionTwo}</li>
                            <li>
                                {editConsentFormData?.necessaryCookies?.descriptionThree}{" "}
                                <span>
                  <Link to={CONST?.routes?.privacyStatementRoute}>
                    {editConsentFormData?.necessaryCookies?.linkThree}
                  </Link>
                </span>
                                .
                            </li>
                            <li>
                                {editConsentFormData?.necessaryCookies?.descriptionFour}{" "}
                                <span>
                  <Link to={CONST?.routes?.dataPrivacyRoute}>
                    {editConsentFormData?.necessaryCookies?.linkFour}
                  </Link>
                </span>
                                .
                            </li>
                        </ul>
                    </div>
                    <div className="edit_consent-container">
                        <div className="edit_consent_label-input-container">
                            <input
                                type={editConsentFormData?.marketingServices?.inputType}
                                checked={consentData?.marketingServices}
                                onChange={useHandleMarketingServicesChange(dispatch, consentData)}
                            />
                            <label>{editConsentFormData?.marketingServices?.label}</label>
                        </div>
                        <ul>
                            {editConsentFormData?.marketingServices?.listContent?.map(
                                (el: string) => <li key={el}>{el}</li>
                            )}
                        </ul>
                    </div>
                    <div className="edit_consent-container">
                        <div className="edit_consent_label-input-container">
                            <input
                                type={editConsentFormData?.analytics?.inputType}
                                checked={consentData?.analytics}
                                onChange={useHandleAnalyticsChange(dispatch, consentData)}
                            />
                            <label>{editConsentFormData?.analytics?.label}</label>
                        </div>
                        <ul>
                            {editConsentFormData?.analytics?.listContent?.map(
                                (el: string) => <li key={el}>{el}</li>
                            )}
                        </ul>
                    </div>
                </div>
            </StyledEditConsent>
        );
    }
};

export default EditConsent;

import {FC, ReactElement} from "react";

import {StyledInfo} from "./styledInfo";

import Help from "../../../../Modals/Help";

import {Link} from "react-router-dom";

import {handleRoutes} from "./helpers";
import {handleIcons} from "../../../../Utils/helpers";

import {locationRouteDispatcher, productsRouteDispatcher} from "../../../../Utils/helpers";

import {
    CydexPharmContentTypes,
    TermsOfUseContentTypes,
    SupportedPaymentMethodsIconsTypes,
    DescriptionContentTypes,
    FooterInfoFormDataTypes
} from "./types";


import {useAppDispatch} from "../../../../Redux/Store/store";
import {useGetFooterInfoFormDataQuery} from "../../../../Redux/Slices/apiSlice";
import {Dispatch} from "@reduxjs/toolkit";

import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";

import {CONST} from "../../../../Utils/CONST";

const Info: FC = ():ReactElement => {
    const dispatch: Dispatch = useAppDispatch()

    const {
        data: isFetchedFooterInfoFormData,
        isFetching: isFetchingFooterInfoFormData,
        isLoading: isLoadingFooterInfoFormData,
        isError: isErrorFooterInfoFormData
    } = useGetFooterInfoFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })


    const footerInfoFormData: FooterInfoFormDataTypes = isFetchedFooterInfoFormData

    if (isFetchingFooterInfoFormData || isLoadingFooterInfoFormData) return <Loading/>
    else if (isErrorFooterInfoFormData || !isFetchedFooterInfoFormData) return <ServerError/>
    else {
        return (
            <StyledInfo className="styledComponent-Info">
                <div className="info_wrapper">
                    <Help/>
                    <div className="list_content-wrapper">
                        <div className="list_content_container">
                            <div className="list_content_cydexPharm-container">
                                <div className="list_content_cydexPharm-title-container">
                                    <div className="list_content_cydexPharm-title">{footerInfoFormData?.cydexPharm?.title}</div>
                                </div>
                                <ul>
                                    {footerInfoFormData?.cydexPharm?.content?.map((el: CydexPharmContentTypes) => {
                                        const {id, title, frontendSlug} = el

                                        return  (
                                            <Link key={frontendSlug} to={handleRoutes(frontendSlug)} onClick={() => {
                                                productsRouteDispatcher(null, null, null, dispatch)
                                                locationRouteDispatcher(null, dispatch);
                                            }}>
                                                <li>{title}</li>
                                            </Link>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                            <div className="list_content_terms-container">
                                <div className="list_content_terms-title-container">
                                    <div className="list_content-terms-title">{footerInfoFormData?.termsOfUse?.title}</div>
                                </div>
                                <ul>
                                    {footerInfoFormData?.termsOfUse?.content?.map((el: TermsOfUseContentTypes) => {
                                        const { title, frontendSlug} = el

                                        return <Link key={frontendSlug} to={handleRoutes(frontendSlug)} onClick={() => {
                                            productsRouteDispatcher(null, null, null, dispatch);
                                            locationRouteDispatcher(null, dispatch);
                                        }}>
                                            <li>{title}</li>
                                        </Link>
                                    })}
                                </ul>
                            </div>
                            <div className="list_content_payment-methods-container">
                                <div className="list_content_payment-methods-title-container">
                                    <div
                                        className="list_content_payment-methods-title">{footerInfoFormData?.supportedPaymentMethods?.title}</div>
                                </div>
                                <div className="list_content_payment-methods-description-container">
                                    <div className="list_content_payment-methods-description-title-container">
                                        <div
                                            className="list_content_payment-methods-description-title">{footerInfoFormData?.supportedPaymentMethods?.description?.title}</div>
                                    </div>
                                    <ul>
                                        {footerInfoFormData?.supportedPaymentMethods?.description?.content?.map((el: DescriptionContentTypes) => {
                                            const {title, id, link} = el

                                            return (
                                                <a
                                                    key={id}
                                                    href={link}
                                                    onClick={() => {
                                                        productsRouteDispatcher(null, null, null, dispatch);
                                                        locationRouteDispatcher(null, dispatch);
                                                    }}
                                                >
                                                    <li>{title}</li>
                                                </a>
                                            )
                                        })}
                                    </ul>
                                    <div className="list_content_payment_methods-paragraph-container">
                                        <Link
                                            to={CONST?.routes?.paymentMethodsRoute}
                                            onClick={():void => window.scrollTo(0,0)}
                                            className="list_content_payment_methods-paragraph-one-container">
                                            <div
                                                className="list_content_payment_methods-paragraph-one">{footerInfoFormData?.supportedPaymentMethods?.paragraph?.descriptionOne}</div>
                                        </Link>
                                        <div className="list_content_payment_methods-paragraph-two-container">
                                            <div
                                                className="list_content_payment_methods-paragraph-two">{footerInfoFormData?.supportedPaymentMethods?.paragraph?.descriptionTwo}</div>
                                        </div>
                                    </div>
                                    <div className="list_content_payment_methods-icons-container">
                                        <div className="list_content_payment_methods-icons-content-container">
                                            {footerInfoFormData?.supportedPaymentMethods?.icons?.map((el: SupportedPaymentMethodsIconsTypes) => {
                                                const {id, link, frontendSlug} = el

                                                return (
                                                    <a key={id}
                                                       className="list_content_payment_methods-icons-image-container"
                                                       href={link}
                                                       onClick={() => {
                                                           productsRouteDispatcher(null, null, null, dispatch);
                                                           locationRouteDispatcher(null, dispatch);
                                                       }}
                                                    >{handleIcons(link)}</a>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledInfo>
        )
    }
}

export default Info
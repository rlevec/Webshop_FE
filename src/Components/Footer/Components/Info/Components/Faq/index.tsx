import {FC, useState, ReactElement} from "react";

import {StyledFaq} from "./styledFaq";

import CaretRight from "../../../../../../Assets/caret-right.svg"

import {BasicNavLinks} from "../../../../../../Shared/BasicNavLinks";
import Loading from "../../../../../../Pages/Loading";
import ServerError from "../../../../../../Pages/ServerError";
import Help from "../../../../../../Modals/Help";

import {useAppSelector} from "../../../../../../Redux/Store/store";

import {
    handleAnswerTrigger,
    useHandleActiveFaq,
    useHandleContentDivHeight,
    renderAccordionWrapper
} from "./helpers";


import {useGetFaqFormDataQuery} from "../../../../../../Redux/Slices/apiSlice";

import {FaqDataTypes, FaqDataContentTypes, FaqHoveredStateTypes} from "./types";

const Faq: FC = (): ReactElement => {
    const {
        data: isFetchedFaqFormData,
        isFetching: isFetchingFaqFormData,
        isLoading: isLoadingFaqFormData,
        isError: isErrorFaqFormData
    } = useGetFaqFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: false, refetchOnReconnect: true})

    const [activeAccordion, setActiveAccordion] = useState<string>("orders")
    const [activeQuestion, setActiveQuestion] = useState<string>("")
    const [hovered, setHovered] = useState<FaqHoveredStateTypes>({
        orders: false,
        delivery: false,
        payment: false,
        return: false,
        other: false
    })
    const [contentDivHeight, setContentDivHeight] = useState<number>(0)

    const deviceType: string | null = useAppSelector((state) => state?.device?.device)

    useHandleContentDivHeight(setContentDivHeight)

    useHandleActiveFaq(setContentDivHeight, activeQuestion, activeAccordion)


    const faqFormData: FaqDataTypes = isFetchedFaqFormData

    if (isFetchingFaqFormData || isLoadingFaqFormData) return <Loading/>
    else if (isErrorFaqFormData || !isFetchedFaqFormData) return <ServerError/>
    else {
        return (
            <StyledFaq contentDivHeight={contentDivHeight} desktop={deviceType === "desktop"}>
                <BasicNavLinks/>
                <div className="faq_wrapper">
                    {deviceType === "desktop" && renderAccordionWrapper(faqFormData, activeAccordion, setActiveAccordion, hovered, setHovered, setActiveQuestion)}
                    <div className="faq_accordion-content-container" id="#content">
                        <div className="faq_accordion-content-title">{faqFormData?.globalTitle}</div>
                        {deviceType !== "desktop" && renderAccordionWrapper(faqFormData, activeAccordion, setActiveAccordion, hovered, setHovered, setActiveQuestion)}
                        <div className="faq_accordion-content-wrapper">
                            {faqFormData?.content?.map((el: FaqDataContentTypes): ReactElement | null => {
                                const {id, question, answer, subCategories, frontendSlug} = el

                                let questionToRender

                                if (subCategories?.includes(activeAccordion)) questionToRender = question

                                return (
                                    (subCategories?.includes(activeAccordion)) ? (
                                        <div key={id} className="faq_accordion-single-content-container">
                                            {handleAnswerTrigger(subCategories, frontendSlug, activeAccordion, activeQuestion, setActiveQuestion)}
                                            <div className="faq_accordion-single-QA-container">
                                                <div
                                                    className="faq_accordion-sidebar-single-content-question">{questionToRender}</div>
                                                {frontendSlug === activeQuestion &&
                                                  <div
                                                    className="faq_accordion-sidebar-single-content-answer">{answer}</div>}
                                            </div>
                                        </div>
                                    ) : null
                                )
                            })}
                        </div>
                    </div>
                    {deviceType === "desktop" && (
                        <div className="faq_help_wrapper">
                            <div className="faq_help_container">
                                <Help/>
                            </div>
                        </div>
                    )}
                </div>
            </StyledFaq>
        )
    }
}

export default Faq
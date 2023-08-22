import {FaqDataTitleTypes, FaqDataTypes, FaqHoveredStateTypes} from "./types";

import {handleIcons} from "../../../../../../Utils/helpers";

import {ReactElement, useCallback, useEffect} from "react";

import Minus from "../../../../../../Assets/minus.svg";
import Plus from "../../../../../../Assets/plus.svg";
import CaretRight from "../../../../../../Assets/caret-right.svg";

//handle faq category mouseEnter to handle css styles
export const handleHoveredAccordion = (frontendSlug: string, hovered: FaqHoveredStateTypes, setHovered: Function): void | null => {
    if (frontendSlug === "orders") setHovered({
        ...hovered,
        orders: true,
        delivery: false,
        payment: false,
        return: false,
        other: false
    })
    else if (frontendSlug === "delivery") setHovered({
        ...hovered,
        orders: false,
        delivery: true,
        payment: false,
        return: false,
        other: false
    })
    else if (frontendSlug === "payment") setHovered({
        ...hovered,
        orders: false,
        delivery: false,
        payment: true,
        return: false,
        other: false
    })
    else if (frontendSlug === "return") setHovered({
        ...hovered,
        orders: false,
        delivery: false,
        payment: false,
        return: true,
        other: false
    })
    else if (frontendSlug === "other") setHovered({
        ...hovered,
        orders: false,
        delivery: false,
        payment: false,
        return: false,
        other: true
    })
    else return null
}


//handle faq category mouseLeave to handle css styles
export const handleLeftAccordion = (frontendSlug: string, hovered: FaqHoveredStateTypes, setHovered: Function): void | null => {
    if (frontendSlug === "orders") setHovered({
        ...hovered,
        orders: false,
        delivery: false,
        payment: false,
        return: false,
        other: false
    })
    else if (frontendSlug === "delivery") setHovered({
        ...hovered,
        orders: false,
        delivery: false,
        payment: false,
        return: false,
        other: false
    })
    else if (frontendSlug === "payment") setHovered({
        ...hovered,
        orders: false,
        delivery: false,
        payment: false,
        return: false,
        other: false
    })
    else if (frontendSlug === "return") setHovered({
        ...hovered,
        orders: false,
        delivery: false,
        payment: false,
        return: false,
        other: false
    })
    else if (frontendSlug === "other") setHovered({
        ...hovered,
        orders: false,
        delivery: false,
        payment: false,
        return: false,
        other: false
    })
    else return null
}


//handle svg active/hover css classnames
export const handleSvgClassnames = (frontendSlug: string, activeAccordion: string, hovered: FaqHoveredStateTypes): string | undefined => {
    if (frontendSlug === "orders") {
        if (frontendSlug === activeAccordion) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (hovered?.orders) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (!hovered?.orders) return "faq_accordion-sidebar-image"
        else return undefined
    } else if (frontendSlug === "delivery") {
        if (frontendSlug === activeAccordion) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (hovered?.delivery) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (!hovered?.delivery) return "faq_accordion-sidebar-image"
        else return undefined
    } else if (frontendSlug === "payment") {
        if (frontendSlug === activeAccordion) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (hovered?.payment) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (!hovered?.payment) return "faq_accordion-sidebar-image"
        else return undefined
    } else if (frontendSlug === "return") {
        if (frontendSlug === activeAccordion) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (hovered?.return) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (!hovered?.return) return "faq_accordion-sidebar-image"
        else return undefined
    } else if (frontendSlug === "other") {
        if (frontendSlug === activeAccordion) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (hovered?.other) return `faq_accordion-sidebar-image-${frontendSlug}`
        else if (!hovered?.other) return "faq_accordion-sidebar-image"
        else return undefined
    } else return undefined
}


//handle css styles for active category
export const handleActiveContainer = (frontendSlug: string, activeAccordion: string): string => {
    if (frontendSlug !== activeAccordion) return "faq_accordion-sidebar-single-title-container"
    else return "faq_accordion-sidebar-single-title-container active"
}



//set activeAccordion frontendSlug to state
export const handleQuestionClick = (frontendSlug: string, activeQuestion: string, setActiveQuestion: Function): void => {
    if (activeQuestion === "") setActiveQuestion(frontendSlug)
    else setActiveQuestion("")
}


//handle active accordion trigger
export const handleAnswerTrigger = (subCategories: string[], frontendSlug: string, activeAccordion: string, activeQuestion: string, setActiveQuestion: Function): ReactElement | undefined => {
    if (subCategories?.includes(activeAccordion)) {
        if (activeQuestion === frontendSlug) return <div className="faq_accordion-sidebar-single-content-icon"
                                                 onClick={() => handleQuestionClick(frontendSlug, activeQuestion, setActiveQuestion)}>
            <Minus/></div>
        else return <div className="faq_accordion-sidebar-single-content-icon"
                         onClick={() => handleQuestionClick(frontendSlug, activeQuestion, setActiveQuestion)}>
            <Plus/></div>
    } else return undefined
}


//match div categories height based on the accordion height
export const useHandleContentDivHeight = (setContentDivHeight: Function): void => {
    useEffect((): void => {
        const contentDiv:HTMLElement | null = document.getElementById("#content")
        if (contentDiv) setContentDivHeight(contentDiv.offsetHeight)
    }, [])
}

//match div categories height based on the accordion height
export const useHandleActiveFaq = (setContentDivHeight: Function, activeQuestion: string, activeAccordion: string): void => {

    const handleActiveFaqCallback = useCallback((): void => {
        const contentDiv:HTMLElement | null = document.getElementById("#content")
        if (contentDiv) setContentDivHeight(contentDiv.offsetHeight)
    }, [activeQuestion, activeAccordion])

    useEffect((): void => {
        handleActiveFaqCallback()
    }, [handleActiveFaqCallback])
}



//sperate component fraction to render on different parent div elements based on the device
export const renderAccordionWrapper = (faqFormData: FaqDataTypes, activeAccordion: string, setActiveAccordion: Function, hovered: FaqHoveredStateTypes, setHovered: Function, setActiveQuestion: Function): ReactElement => {
    return (
        <div className="faq_accordion-sidebar-wrapper">
            <div className="faq_accordion-sidebar-container">
                {faqFormData?.titles?.map((el: FaqDataTitleTypes) => {
                    const {id, frontendSlug, title} = el

                    return (
                        <div key={id} className={handleActiveContainer(frontendSlug, activeAccordion)}
                             onMouseEnter={() => handleHoveredAccordion(frontendSlug, hovered, setHovered)}
                             onMouseLeave={() => handleLeftAccordion(frontendSlug, hovered, setHovered)}
                             onClick={(): void => {
                                 setActiveAccordion(frontendSlug);
                                 setActiveQuestion("")
                             }}>
                            <div
                                className={handleSvgClassnames(frontendSlug, activeAccordion, hovered)}>{handleIcons(frontendSlug)}</div>
                            <div className="faq_accordion-sidebar-title">{title}</div>
                            {frontendSlug === activeAccordion ?
                                <div className="faq_accordion-sidebar-active-pointer"><CaretRight/>
                                </div> : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

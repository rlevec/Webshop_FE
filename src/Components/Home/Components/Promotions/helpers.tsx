import {useEffect} from "react";
import * as React from "react";

import {PromotionsFormDataTypes} from "./types";

//handle step based on the user action
export function handleSlideChange(currentStep: number, setCurrentStep: Function, maxStep: number, type: string): void | null {
    if(type === "previous") {
        if(currentStep === 1) return null
        else setCurrentStep(currentStep - 1)
    }
    else if(type === "next") {
        if(currentStep === maxStep) return null
        else setCurrentStep(currentStep + 1)
    }
    else return null
}


//automatically switch slides every 5 seconds
export function useHandleSlideTimeout(currentSlide: number, setCurrentSlide: Function, maxValue: number): void {
    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> = setTimeout((): void => {
            if (currentSlide === maxValue) setCurrentSlide(1)
            else setCurrentSlide(currentSlide + 1)
        }, 5000)
        return () => clearTimeout(timeout)
    }, [currentSlide])
}


//handle max slide value
export const handleMaxOrderValue = (promotionsFormData: PromotionsFormDataTypes[]): number | null => {
    const orderValues: number[] = promotionsFormData?.map((el: PromotionsFormDataTypes) => el?.order) || []
    return Math.max(...orderValues) || null
}


//filter slide based on the currently active step
export const handleFilteredSlide = (promotionsFormData: PromotionsFormDataTypes[], currentSlide: number): PromotionsFormDataTypes[] => promotionsFormData?.filter((el: PromotionsFormDataTypes): boolean => el?.order === currentSlide)  || []
import {ProductsInfoFormDataTypes} from "./types";


//handle slide change on user action trigger
export const handleSlideChange = (currentStep: number, setCurrentStep: Function, maxStep: number, type: string): void | null => {
    if (type === "previous") {
        if (currentStep === 1) return null
        else setCurrentStep(currentStep - 1)
    } else if (type === "next") {
        if (currentStep === maxStep) return null
        else setCurrentStep(currentStep + 1)
    } else return null
}


//handle max slide value
export const handleMaxStep = (productsInfoFormData: ProductsInfoFormDataTypes[]): number | null => {
    const stepArray: number[] = productsInfoFormData?.map((el: ProductsInfoFormDataTypes) => el?.step) || []

    return  Math.max(...stepArray) || null
}


//filter products by currentStep state
export const handleFilteredProductsByStep = (productsInfoFormData: ProductsInfoFormDataTypes[], currentStep: number) => productsInfoFormData?.filter((el: ProductsInfoFormDataTypes): boolean => el?.step === currentStep) || []
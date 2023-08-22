//render progress bar fraction based on the current step value

export function handleRegistrationProgressBarPercent(currentStep: number): string | null {
    if (currentStep === 1) return "20%"
    else if (currentStep === 2) return "40%"
    else if (currentStep === 3) return "60%"
    else if (currentStep === 4) return "80%"
    else if (currentStep === 5) return "100%"
    else return null
}

import {CategoriesModalFormDataTypes, CategoriesModalHoveredStateTypes} from "./types";


//return category object that has been triggered by onMouseEnter user action
export const handleActiveCategory = (hovered: CategoriesModalHoveredStateTypes, categoriesModalFormData: CategoriesModalFormDataTypes[]) => {
    const handleHovered = (): string | null => {
        let active = null

        Object.entries(hovered)?.forEach(([key, val]): void => {
            if (val) active = key
        })

        return active
    }

    const matchCategoryObject: CategoriesModalFormDataTypes | undefined = categoriesModalFormData?.find((el: CategoriesModalFormDataTypes): boolean => el?.categorySlug as string === handleHovered() as string)

    return matchCategoryObject
}


//handle onMouseEnter user action for each category
export function handleModalMouseEnter(hovered: CategoriesModalHoveredStateTypes, setHovered: Function): void | null {
    if (hovered?.cosmetics) return setHovered({
        ...hovered,
        cosmetics: true,
        selfHealing: false,
        foodSupplements: false,
        covid: false,
        momKids: false,
        medicalAids: false,
        benefits: false,
        brands: false
    })
    else if (hovered?.selfHealing) return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: true,
        foodSupplements: false,
        covid: false,
        momKids: false,
        medicalAids: false,
        benefits: false,
        brands: false
    })
    else if (hovered?.foodSupplements) return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: true,
        covid: false,
        momKids: false,
        medicalAids: false,
        benefits: false,
        brands: false
    })
    else if (hovered?.covid) return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: false,
        covid: true,
        momKids: false,
        medicalAids: false,
        benefits: false,
        brands: false
    })
    else if (hovered?.momKids) return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: false,
        covid: false,
        momKids: true,
        medicalAids: false,
        benefits: false,
        brands: false
    })
    else if (hovered?.medicalAids) return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: false,
        covid: false,
        momKids: false,
        medicalAids: true,
        benefits: false,
        brands: false
    })
    else if (hovered?.brands) return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: false,
        covid: false,
        momKids: false,
        medicalAids: false,
        benefits: false,
        brands: true
    })
    else return null
}


//handle onMouseLeave user action for each category
export function handleModalMouseLeave(hovered: CategoriesModalHoveredStateTypes, setHovered: Function): void | null {
    if (hovered?.cosmetics) return setHovered({...hovered, cosmetics: false})
    else if (hovered?.selfHealing) return setHovered({...hovered, selfHealing: false})
    else if (hovered?.foodSupplements) return setHovered({...hovered, foodSupplements: false})
    else if (hovered?.covid) return setHovered({...hovered, covid: false})
    else if (hovered?.momKids) return setHovered({...hovered, momKids: false})
    else if (hovered?.medicalAids) return setHovered({...hovered, medicalAids: false})
    else if (hovered?.brands) return setHovered({...hovered, brands: false})
    else return null
}
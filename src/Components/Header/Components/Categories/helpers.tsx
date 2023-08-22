import {ReactElement} from "react";

import {CategoriesHoveredStateTypes, ProductsCategoriesTypes, ProductsTypes} from "./types";




//form the categories array with appropriate data from products array and add brands data as the last element
export const handleArrayToRender = (productsData: ProductsTypes[]):ProductsCategoriesTypes[]  => {

    const productsCategories: ProductsCategoriesTypes[] = []

    productsData?.forEach((el: ProductsTypes) => productsCategories?.push({categorySlug: el?.categorySlug, categoryTitle: el?.categoryTitle}))
    productsCategories?.push({categorySlug: "brands", categoryTitle: "Brands"})

    const uniqueProductsCategories: ProductsCategoriesTypes[] = [...new Set(productsCategories?.map((el: ProductsCategoriesTypes) => JSON.stringify(el)))].map((el: string) => JSON.parse(el))

    return uniqueProductsCategories
}


//check if cursor has entered modal and set appropriate state
export function handleMouseEnter(categorySlug: string, hovered: CategoriesHoveredStateTypes, setHovered: Function): void | null {
    if (categorySlug === "cosmetics") return setHovered({
        ...hovered,
        cosmetics: true,
        selfHealing: false,
        foodSupplements: false,
        covid: false,
        momKids: false,
        medicalAids: false,
        brands: false
    })
    else if (categorySlug === "selfHealing") return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: true,
        foodSupplements: false,
        covid: false,
        momKids: false,
        medicalAids: false,
        brands: false
    })
    else if (categorySlug === "foodSupplements") return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: true,
        covid: false,
        momKids: false,
        medicalAids: false,
        brands: false
    })
    else if (categorySlug === "covid") return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: false,
        covid: true,
        momKids: false,
        medicalAids: false,
        brands: false
    })
    else if (categorySlug === "momKids") return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: false,
        covid: false,
        momKids: true,
        medicalAids: false,
        brands: false
    })
    else if (categorySlug === "medicalAids") return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: false,
        covid: false,
        momKids: false,
        medicalAids: true,
        brands: false
    })
    else if (categorySlug === "brands") return setHovered({
        ...hovered,
        cosmetics: false,
        selfHealing: false,
        foodSupplements: false,
        covid: false,
        momKids: false,
        medicalAids: false,
        brands: true
    })
    else return null
}


//check if cursor has left modal and set appropriate state
export function handleMouseLeave(categorySlug: string, hovered: CategoriesHoveredStateTypes, setHovered: Function): void | null {
    if (categorySlug === "cosmetics") return setHovered({...hovered, cosmetics: false})
    else if (categorySlug === "selfHealing") return setHovered({...hovered, selfHealing: false})
    else if (categorySlug === "foodSupplements") return setHovered({...hovered, foodSupplements: false})
    else if (categorySlug === "covid") return setHovered({...hovered, covid: false})
    else if (categorySlug === "momKids") return setHovered({...hovered, momKids: false})
    else if (categorySlug === "medicalAids") return setHovered({...hovered, medicalAids: false})
    else if (categorySlug === "brands") return setHovered({...hovered, brands: false})
    else return null
}


//render underline under active category header
export function renderUnderline(categorySlug: string, hovered: CategoriesHoveredStateTypes): ReactElement | null {
    if (categorySlug === "cosmetics" && hovered?.cosmetics) return <div
        className="categories_single-category-underline"></div>
    else if (categorySlug === "selfHealing" && hovered?.selfHealing) return <div
        className="categories_single-category-underline"></div>
    else if (categorySlug === "foodSupplements" && hovered?.foodSupplements) return <div
        className="categories_single-category-underline"></div>
    else if (categorySlug === "covid" && hovered?.covid) return <div
        className="categories_single-category-underline"></div>
    else if (categorySlug === "momKids" && hovered?.momKids) return <div
        className="categories_single-category-underline"></div>
    else if (categorySlug === "medicalAids" && hovered?.medicalAids) return <div
        className="categories_single-category-underline"></div>
    else if (categorySlug === "brands" && hovered?.brands) return <div
        className="categories_single-category-underline"></div>
    return null
}
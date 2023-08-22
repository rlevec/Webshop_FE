import {ProductsDataBrandTypes, ProductsTypes, FunctionReturnTypes, BrandsFormInteractiveTypes} from "./types";

import {ReactElement} from "react";

import Vichy from "../../../../../../Assets/images/vichy.webp"
import Eucerin from "../../../../../../Assets/images/eucerin.webp";
import Avene from "../../../../../../Assets/images/avene.webp";
import LaRochePosay from "../../../../../../Assets/images/laRoche.webp";
import Nuxe from "../../../../../../Assets/images/nuxe.webp";



//scroll to appropriate elements ref/id by clicking on the any of the alphabet letters
export const scrollToElement = (elementId: string): void | null => {
    const element:HTMLElement | null = document.getElementById(elementId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    else return null
};

//handle product quantity of each brand
export const handleProductQuantity = (brandSlug: string, productsData: ProductsTypes[]): ReactElement => {
    let global: number = 0
    productsData.forEach((el: ProductsTypes): void => {
        const {brand} = el
        if (brandSlug === brand) global++
    })
    return <div className="quantity">{global}</div>
}


//extract first letter of each brand and return unique set of the first letters

export const handleArraysToRender = (productsData: ProductsTypes[]):FunctionReturnTypes=> {

    const productBrands: ProductsDataBrandTypes[] = []

    productsData.forEach((el: ProductsTypes) => productBrands?.push({brandSlug: el?.brand, brandTitle: el?.brandTitle}))

    const uniqueBrands: ProductsDataBrandTypes[] = [...new Set(productBrands?.map((el: ProductsDataBrandTypes) => JSON.stringify(el)))].map((el: string) => JSON.parse(el))

    const ascSortedUniqueBrands: ProductsDataBrandTypes[] = uniqueBrands?.sort((a:ProductsDataBrandTypes, b:ProductsDataBrandTypes) => a.brandTitle?.localeCompare(b?.brandTitle))

    const lettersArr: string[] = []

    ascSortedUniqueBrands.forEach((el:ProductsDataBrandTypes) => lettersArr?.push(el?.brandTitle?.split("")[0]?.toString()))

    const uniqueLettersSet:Set<string> = new Set(lettersArr)
    const uniqueLettersArr: string[] = [...uniqueLettersSet]

    return {ascSortedUniqueBrands, uniqueLettersArr}
}



export const renderBrandsClickableImages = (): BrandsFormInteractiveTypes[]  => {
    return [
        {id: 1, frontendSlug: "vichy", src: Vichy, alt: "vichy", order: 1},
        {id: 2, frontendSlug: "eucerin", src: Eucerin, alt: "eucerin",  order: 2},
        {id: 3, frontendSlug: "avene", src: Avene, alt: "avene", order: 3},
        {id: 4, frontendSlug: "laRochePosay", src: LaRochePosay, alt: "laRochePosay", order: 4},
        {id: 5, frontendSlug: "nuxe", src: Nuxe, alt: "nuxe", order: 5},
    ]
}
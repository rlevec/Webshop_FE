import {
    CategoriesArrayTypes,
    ProductsTypes,
    BrandArrayTypes,
    PriceRangeReturnTypes,
    SubCategoryArrayTypes,
    CartItemsTypes
} from "./types";

import React, {useEffect, useCallback} from "react";

//handle parent categories from productsData array for mapping to render
export const handleUniqueCategoriesArray = (productsData: ProductsTypes []) => {
    const categoriesArr: CategoriesArrayTypes[] = productsData?.flatMap((el: ProductsTypes) => [{
        frontendSlug: el?.categorySlug,
        title: el?.categoryTitle,
    }])
    let uniqueCategoriesArray: CategoriesArrayTypes[] = [...new Set(categoriesArr?.map((el: CategoriesArrayTypes) => JSON.stringify(el)))].map((el: string) => JSON.parse(el))
    return uniqueCategoriesArray
}



//if frontendSlug parameter (cosmetics...) matches activeCategory
//for each iteration of products data array, if category slug property value is equal to activeCategory state value, populate new array with subCategorySlug and subCategoryTitle as they are
//necessary values for rendering subCategories aka children of categories
//create unique values with set so there are no repeats of the categories
export const handleSubCategories = (frontendSlug: string, activeCategory: string, productsData: ProductsTypes[]): SubCategoryArrayTypes[] | null => {
    if (frontendSlug === activeCategory) {
        let newArr: SubCategoryArrayTypes[] = []
        productsData.forEach((el: ProductsTypes): void => {
            if (el?.categorySlug === activeCategory) newArr.push({
                subCategorySlug: el?.subCategorySlug,
                subCategoryTitle: el?.subCategoryTitle
            })
        })
        let uniqueCategoriesArray: SubCategoryArrayTypes[] = [...new Set(newArr?.map((el:SubCategoryArrayTypes) => JSON.stringify(el)))].map((el: string) => JSON.parse(el))
        return uniqueCategoriesArray
    } else return null
}



export const handleProductsToRender = (activeCategory: string, activeSubCategory: string, checkedBrands: string[], activePrice: number | null, productsData: ProductsTypes[]): ProductsTypes[] | null => {
    //If neither active category and activeSubCategory are active
    //If checkedBrands has zero length aka zero brand filters were selected
    //Return all products due zero filter methods
    //If checkedBrands array has length it means that some brand/brands was/were checked
    //Check if checkedBrands array includes brand object property in each iteration of the products data array

    //same logic for each conditional statement

    //In the 2nd one filter by activeCategory state value if equal to categorySlug in each iteration of the products data array
    //If checkedBrands length is zero return whole array, if not, check for each iteration if checkedBrands includes brand

    //In the 3rd one filter by activeSubCategory state value if equal to subCategorySlug in each iteration of the products data array
    //If checkedBrands length is zero return whole array, if not, check for each iteration if checkedBrands includes brand

    //handle filter products by price in each iteration and conditional statement

    if (activeCategory === "" && activeSubCategory === "") {
        if (checkedBrands?.length === 0) {
            if(!activePrice) return productsData
            else if(activePrice) {
                let newProductsData: ProductsTypes[] = []

                productsData.forEach((el: ProductsTypes) => {
                    const {amount} = el
                    if(activePrice) {
                        if(amount <= activePrice) {
                            newProductsData.push(el)
                        }
                    }
                })

                return newProductsData
            }
            else return null
        }
        else {
            let newProductsData: ProductsTypes[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {brand, amount} = el
                if (checkedBrands?.includes(brand)) {
                    if(activePrice) {
                        if(amount <= activePrice) {
                            newProductsData.push(el)
                        }
                    }
                    else newProductsData.push(el)
                }
            })

            return newProductsData
        }
    } else if (activeCategory !== "" && activeSubCategory === "") {
        if (checkedBrands?.length === 0) {

            let newProductsData: ProductsTypes[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {categorySlug, amount} = el
                if (categorySlug === activeCategory) {
                    if(activePrice) {
                        if(amount <= activePrice) {
                            newProductsData.push(el)
                        }
                    }
                    else newProductsData.push(el)
                }
            })

            return newProductsData
        } else {
            let newProductsData: ProductsTypes[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {categorySlug, brand, amount} = el
                if (categorySlug === activeCategory && checkedBrands?.includes(brand)) {
                    if(activePrice) {
                        if(amount <= activePrice) {
                            newProductsData.push(el)
                        }
                    }
                    else newProductsData.push(el)
                }
            })

            return newProductsData
        }
    } else if (activeCategory !== "" && activeSubCategory !== "") {
        if (checkedBrands?.length === 0) {

            let newProductsData: ProductsTypes[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {subCategorySlug, amount} = el
                if (subCategorySlug === activeSubCategory) {
                    if(activePrice) {
                        if(amount <= activePrice) {
                            newProductsData.push(el)
                        }
                    }
                    else  newProductsData.push(el)
                }
            })

            return newProductsData
        } else {
            let newProductsData: ProductsTypes[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {subCategorySlug, brand, amount} = el
                if (subCategorySlug === activeSubCategory && checkedBrands?.includes(brand)) {
                    if(activePrice) {
                        if(amount <= activePrice) {
                            newProductsData.push(el)
                        }
                    }
                    else newProductsData.push(el)
                }
            })

            return newProductsData
        }
    } else {
        if (checkedBrands?.length === 0) {
            if(!activePrice) return productsData
            else if(activePrice) {
                let newProductsData: ProductsTypes[] = []

                productsData.forEach((el: ProductsTypes) => {
                    const {amount} = el
                    if(activePrice) {
                        if(amount <= activePrice) {
                            newProductsData.push(el)
                        }
                    }
                })

                return newProductsData
            }
            else return null
        }
        else {
            let newProductsData: ProductsTypes[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {brand, amount} = el
                if (checkedBrands?.includes(brand)) {
                    if(activePrice) {
                        if(amount <= activePrice) {
                            newProductsData.push(el)
                        }
                    }
                    else newProductsData.push(el)
                }
            })

            return newProductsData
        }
    }
}





//if activeCategory and activeSubCategory state values are "" nothing has been selected
//filter unique brands from allProductsData
//else if activeCategory is state value is !== "" and activeSubCategory state value is "" category has been selected but sub category has not
//filter unique products from by comparing categorySlug property value with activeCategory state value in each iteration
//filter unique brands from the array
//else if activeCategory is state value is !== "" and activeSubCategory state value is !== "" sub category beeb selected
//filter unique products from by comparing subCategorySlug property value with activeSubCategory state value in each iteration
//filter unique brands from the array
export const handleBrands = (activeCategory: string, activeSubCategory: string, productsData: ProductsTypes[]): BrandArrayTypes[] => {
    if (activeCategory === "" && activeSubCategory === "") {
        const newArr: BrandArrayTypes[] = productsData?.map((el: ProductsTypes) => {
            const {brand, brandTitle} = el
            return {brandSlug: brand, brandTitle: brandTitle}
        })
        const uniqueArrayValues: BrandArrayTypes[] = [...new Set(newArr?.map((el: BrandArrayTypes) => JSON.stringify(el)))].map((el: string) => JSON.parse(el))
        return uniqueArrayValues?.sort((a:BrandArrayTypes, b:BrandArrayTypes) => a?.brandTitle?.localeCompare(b?.brandTitle))
    } else if (activeCategory !== "" && activeSubCategory === "") {
        const filteredArr: (ProductsTypes | undefined)[] = productsData?.map((el: ProductsTypes) => {
            if (el?.categorySlug === activeCategory) return el
        })?.filter((el: ProductsTypes | undefined): boolean => el !== undefined)


        const newArr: BrandArrayTypes[] = filteredArr?.map((el: any) => {
            const {brand, brandTitle} = el
            return {brandSlug: brand, brandTitle: brandTitle}
        })
        const uniqueArrayValues: BrandArrayTypes[] = [...new Set(newArr?.map((el: BrandArrayTypes) => JSON.stringify(el)))].map((el: string) => JSON.parse(el))
        return uniqueArrayValues?.sort((a:BrandArrayTypes, b:BrandArrayTypes) => a?.brandTitle?.localeCompare(b?.brandTitle))
    } else if (activeCategory !== "" && activeSubCategory !== "") {
        const filteredArr: (ProductsTypes | undefined)[] = productsData?.map((el: ProductsTypes) => {
            if (el?.subCategorySlug === activeSubCategory) return el
        })?.filter((el: ProductsTypes | undefined): boolean => el !== undefined)


        const newArr: BrandArrayTypes[] = filteredArr?.map((el: any) => {
            const {brand, brandTitle} = el
            return {brandSlug: brand, brandTitle: brandTitle}
        })
        const uniqueArrayValues: BrandArrayTypes[] = [...new Set(newArr?.map((el: BrandArrayTypes) => JSON.stringify(el)))].map((el: string) => JSON.parse(el))
        return uniqueArrayValues?.sort((a:BrandArrayTypes, b:BrandArrayTypes) => a?.brandTitle?.localeCompare(b?.brandTitle))
    } else {
        const arr: BrandArrayTypes[] = productsData?.map((el: ProductsTypes) => {
            const {brand, brandTitle} = el
            return {brandSlug: brand, brandTitle: brandTitle}
        })
        const uniqueArrayValues: BrandArrayTypes[] = [...new Set(arr?.map((el: BrandArrayTypes) => JSON.stringify(el)))].map((el: string) => JSON.parse(el))
        return uniqueArrayValues?.sort((a:BrandArrayTypes, b:BrandArrayTypes) => a?.brandTitle?.localeCompare(b?.brandTitle))
    }
}





//handle max and min price amount for the filter price method based on the selected category/subcategory and checkedBrands
export const handlePriceRanges = (activeCategory: string, activeSubCategory: string, checkedBrands: string[], productsData: ProductsTypes[]): PriceRangeReturnTypes => {
    if (activeCategory === "" && activeSubCategory === "") {
        if (checkedBrands?.length === 0) {
            let prices: (number | null)[] = []

            productsData?.forEach((el: ProductsTypes) => {
                const {amount} = el
                prices?.push(amount)
            })

            const maxPrice: number = Math.round(Math.max(...prices as number[])) + 1
            const minPrice: number = Math.round(Math.min(...prices as number[])) + 1
            return {minPrice, maxPrice}
        } else {
            let newProductsData: ProductsTypes[] = []
            let prices: (number | null)[] = []


            productsData.forEach((el: ProductsTypes): void => {
                const {brand, amount} = el
                if (checkedBrands?.includes(brand)) {
                    prices?.push(amount)
                    newProductsData.push(el)
                }
            })

            const maxPrice: number = Math.round(Math.max(...prices as number[])) + 1
            const minPrice: number = Math.round(Math.min(...prices as number[])) + 1
            return {minPrice, maxPrice}
        }
    } else if (activeCategory !== "" && activeSubCategory === "") {
        if (checkedBrands?.length === 0) {

            let newProductsData: ProductsTypes[] = []
            let prices: (number | null)[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {categorySlug, amount} = el
                if (categorySlug === activeCategory) {
                    prices?.push(amount)
                    newProductsData.push(el)
                }
            })

            const maxPrice: number = Math.round(Math.max(...prices as number[])) + 1
            const minPrice: number = Math.round(Math.min(...prices as number[])) + 1
            return {minPrice, maxPrice}
        } else {
            let prices: (number | null)[] = []
            let newProductsData: ProductsTypes[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {categorySlug, brand, amount} = el
                if (categorySlug === activeCategory && checkedBrands?.includes(brand)) {
                    prices?.push(amount)
                    newProductsData.push(el)
                }
            })
            const maxPrice: number = Math.round(Math.max(...prices as number[])) + 1
            const minPrice: number = Math.round(Math.min(...prices as number[])) + 1
            return {minPrice, maxPrice}
        }
    } else if (activeCategory !== "" && activeSubCategory !== "") {
        if (checkedBrands?.length === 0) {
            let prices: (number | null)[] = []
            let newProductsData: ProductsTypes[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {subCategorySlug, amount} = el
                if (subCategorySlug === activeSubCategory) {
                    prices?.push(amount)
                    newProductsData.push(el)
                }
            })
            const maxPrice: number = Math.round(Math.max(...prices as number[])) + 1
            const minPrice: number = Math.round(Math.min(...prices as number[])) + 1
            return {minPrice, maxPrice}
        } else {
            let prices: (number | null)[] = []
            let newProductsData: ProductsTypes[] = []

            productsData.forEach((el: ProductsTypes): void => {
                const {subCategorySlug, brand, amount} = el
                if (subCategorySlug === activeSubCategory && checkedBrands?.includes(brand)) {
                    prices?.push(amount)
                    newProductsData.push(el)
                }
            })
            const maxPrice: number = Math.round(Math.max(...prices as number[])) + 1
            const minPrice: number = Math.round(Math.min(...prices as number[])) + 1
            return {minPrice, maxPrice}
        }
    } else {
        if (checkedBrands?.length === 0) {
            let prices: (number | null)[] = []

            productsData?.forEach((el: ProductsTypes) => {
                const {amount} = el
                prices?.push(amount)
            })

            const maxPrice: number = Math.round(Math.max(...prices as number[])) + 1
            const minPrice: number = Math.round(Math.min(...prices as number[])) + 1
            return {minPrice, maxPrice}
        } else {
            let newProductsData: ProductsTypes[] = []
            let prices: (number | null)[] = []


            productsData.forEach((el: ProductsTypes): void => {
                const {brand, amount} = el
                if (checkedBrands?.includes(brand)) {
                    prices?.push(amount)
                    newProductsData.push(el)
                }
            })

            const maxPrice: number = Math.round(Math.max(...prices as number[])) + 1
            const minPrice: number = Math.round(Math.min(...prices as number[])) + 1
            return {minPrice, maxPrice}
        }
    }
}



//handle brands checkbox checked
//if brandSlug already exists in the checkedBrands state value array, filter it due it already being checked
//else push it to the lastest index of the checkedBrands state value array by copying current state and then appending new checked element
export const handleChecked = (brandSlug: string, checkedBrands: string[], setCheckedBrands: Function): void => {
    if (checkedBrands?.includes(brandSlug)) {
        let newCheckedBrands = checkedBrands?.filter((el: string): boolean => el !== brandSlug)
        setCheckedBrands(newCheckedBrands)
    } else {
        setCheckedBrands([...checkedBrands, brandSlug])
    }
}


//render productQuantity by subCategorySlug parameter
//if subcategorySlug parameter matches subCategorySlug property value of each productData array iteration
//raise quantity variable by 1
export const handleAmount = (subcategorySlug: string, productsData: ProductsTypes[]): number => {
    let quantity: number = 0
    productsData.forEach((el: ProductsTypes): void => {
        if (el?.subCategorySlug === subcategorySlug) quantity++
    })
    return quantity
}



// debouncing range input to prevent constant re-rendering while user adjustes the price range bar on the input
// lower ms vlaue in timeout should be used on the range input compared to the text input
// value lower than 50 won't improve performance

let debounceTimeout: ReturnType<typeof setTimeout>
export const handlePriceChangeDebounce = (numberQuery: number, setActivePrice: Function) => {
    clearTimeout(debounceTimeout)

    const newPriceValue: number = numberQuery

    debounceTimeout = setTimeout(() => {
        setActivePrice(newPriceValue)
    }, 100)
}




//classname handlers for active / hovered elements
export const handleClassName = (frontendSlug: string | undefined, activeCategory: string, activeCategoryHovered: string): string => {
    if (activeCategory === frontendSlug) return "categories_single-content active"
    else if (activeCategoryHovered === frontendSlug) return "categories_single-content hovered"
    else return "categories_single-content"
}

export const handleSubCategoryClassName = (subCategorySlug: string | undefined, activeSubCategory: string, subCategoryHovered: string): string => {
    if (activeSubCategory === subCategorySlug) return "subCategories_single-content active-sub"
    else if (subCategoryHovered === subCategorySlug) return "subCategories_single-content hovered-sub"
    else return "subCategories_single-content"
}

export const handleSubCategoryAmountClassName = (subCategorySlug: string | undefined, activeSubCategory: string, subCategoryHovered: string): string => {
    if (activeSubCategory === subCategorySlug) return "subCategories_single-content-amount active-amount-sub"
    else if (subCategoryHovered === subCategorySlug) return "subCategories_single-content-amount hovered-amount-sub"
    else return "subCategories_single-content-amount"
}





//if category selected from the external component set active category, active subcategory to "" to redux store value
//if subcategory is selected from the external component set active category and active subcategory to redux store value
//if brand is selected from the external component set active category to "", active subcategory to "" and selectedBrands to redux store value
//track changes by all 3 redux store value via useEffect dependendcy array
export const useHandleExternalComponentRedirect = (productsData: ProductsTypes[], categorySelectedRedux: string | null, subCategorySelectedRedux: string | null, setActiveCategory: Function, setActiveSubCategory: Function, brandSelectedRedux: string | null, setCheckedBrands: Function, checkedBrands: string[], setBrandsListActive: Function) => {
    const selectorCallback = useCallback((): void => {
        if (categorySelectedRedux && !subCategorySelectedRedux) {
            setActiveSubCategory("")
            setActiveCategory(categorySelectedRedux)
        }
        if (subCategorySelectedRedux) {
            let matchCategory: string | undefined = productsData?.find((el: ProductsTypes): boolean => el?.subCategorySlug === subCategorySelectedRedux)?.categorySlug
            setActiveCategory(matchCategory as string)
            setActiveSubCategory(subCategorySelectedRedux)
        }
        if (brandSelectedRedux) {
            setActiveSubCategory("")
            setActiveCategory("")
            setCheckedBrands([brandSelectedRedux])
            setBrandsListActive(true)
        }
    }, [categorySelectedRedux, subCategorySelectedRedux, brandSelectedRedux])


    useEffect((): void => {
        selectorCallback()
    }, [selectorCallback])
}


//handle products quantity via redux store for each product on user action trigger
export const handleQuantity = (frontendSlug: string, reduxStateCartItems: CartItemsTypes[]): number => reduxStateCartItems?.find((el: CartItemsTypes): boolean => el?.frontendSlug === frontendSlug)?.quantity || 1


//calculate ref height each time brandList and/or priceList is active
//to alter maxHeight of the products container according to ref height
export const useHandleDivHeight = (filterRef: React.RefObject<HTMLDivElement> ,setFilterDivHeight: Function, brandsListActive: boolean, priceFilterActive: boolean): void => {
    useEffect((): void => {
        if(filterRef.current) {
            const height: number = filterRef.current?.offsetHeight
            if(!brandsListActive) setFilterDivHeight(1000)
            else setFilterDivHeight(height)
        }
    }, [brandsListActive, priceFilterActive])
}

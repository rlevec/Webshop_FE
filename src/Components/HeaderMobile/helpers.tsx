import * as React from "react";
import {useEffect} from "react";

import {ModalActiveStateTypes, ProductsTypes} from "./types";

//set initial serach data on first render for search modal
export const useHandleSetInitialSearchDataToRender = (productsData: ProductsTypes[], setFilteredProducts: Function): void => {
    useEffect((): void => {
        if (productsData) setFilteredProducts(productsData)
    }, [])
}


// debounce keydown handle on search query filter
//on key up filter products array by searchQuery, set it to state, send state as prop to search modal
let debounceTimer: ReturnType<typeof setTimeout>;

export const debounceFilterMethodBySearchQuery = (productsData: ProductsTypes[], searchQuery: string, setFilteredProducts: Function): void => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout((): void => {
        let newProducts: (ProductsTypes | undefined)[] = productsData?.map((el: ProductsTypes) => {
            if (el?.title.toLowerCase()?.includes(searchQuery.toLowerCase())) return el
        })?.filter((el: ProductsTypes | undefined): boolean => el !== undefined)

        setFilteredProducts(newProducts)
    }, 500);
};


//ensura only one modal is active at the time due to unreliable hover action in non-desktop environment
export const handleModalActive = (frontendSlug: string, modalActive: ModalActiveStateTypes, setModalActive: Function): void | null => {
    if (frontendSlug === "hamburger") setModalActive({
        ...modalActive,
        sidebar: modalActive?.sidebar === false ? true : false,
        wish: false,
        cart: false,
        profile: false,
        search: false
    })
    else if (frontendSlug === "wishlist") setModalActive({
        ...modalActive,
        sidebar: false,
        wish: modalActive?.wish === false ? true : false,
        cart: false,
        profile: false,
        search: false
    })
    else if (frontendSlug === "cart") setModalActive({
        ...modalActive,
        sidebar: false,
        wish: false,
        cart: modalActive?.cart === false ? true : false,
        profile: false,
        search: false
    })
    else if (frontendSlug === "profile") setModalActive({
        ...modalActive,
        sidebar: false,
        wish: false,
        cart: false,
        profile: modalActive?.profile === false ? true : false,
        search: false
    })
    else if (frontendSlug === "search") setModalActive({
        ...modalActive,
        sidebar: false,
        wish: false,
        cart: false,
        profile: false,
        search: modalActive?.search === false ? true : false
    })
    else return null
}
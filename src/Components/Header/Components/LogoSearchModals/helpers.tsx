import {ModalActiveStateTypes, ProductsTypes} from "./types";

import * as React from "react";

import {ReactElement, useEffect} from "react";

import Help from "../../../../Modals/Help";
import Profile from "../../../../Modals/Profile";
import Location from "../../../../Modals/Location";
import Wishlist from "../../../../Modals/Wishlist";
import Cart from "../../../../Modals/Cart";


//check if cursor has entered modal and set appropriate state
export function handleMouseEnter(slug: string, modalActive: ModalActiveStateTypes, setModalActive: Function): void | null {
    if(slug === "help") setModalActive({...modalActive, help: true, location: false, profile: false, wish: false, cart: false})
    else if(slug === "locations") setModalActive({...modalActive, help: false, location: true, profile: false, wish: false, cart: false})
    else if(slug === "user") setModalActive({...modalActive, help: false, location: false, profile: true, wish: false, cart: false})
    else if(slug === "heart") setModalActive({...modalActive, help: false, location: false, profile: false, wish: true, cart: false})
    else if(slug === "cart") setModalActive({...modalActive, help: false, location: false, profile: false, wish: false, cart: true})
    else return null
}

//check if cursor has left modal and set appropriate state
export function handleMouseLeave(slug: string, modalActive: ModalActiveStateTypes, setModalActive: Function): void | null{
    if(slug === "help") setModalActive({...modalActive, help: false})
    else if(slug === "locations") setModalActive({...modalActive, location: false})
    else if(slug === "user") setModalActive({...modalActive, profile: false })
    else if(slug === "heart") setModalActive({...modalActive, wish: false})
    else if(slug === "cart") setModalActive({...modalActive, cart: false})
    else return null
}



//render modal based on the active state
export const renderComponents = (modalActive: ModalActiveStateTypes, setModalActive:Function):ReactElement | null => {
    if (modalActive?.help) return <Help modalActive={modalActive}
                                        setModalActive={setModalActive}
    />
    else if (modalActive?.profile)  return <Profile modalActive={modalActive}
                                                           setModalActive={setModalActive}/>
    else if (modalActive?.location) return <Location modalActive={modalActive}
                                                       setModalActive={setModalActive}/>
    else if (modalActive?.wish) return <Wishlist modalActive={modalActive}
                                                 setModalActive={setModalActive}/>
    else if (modalActive?.cart) return <Cart modalActive={modalActive}
                                             setModalActive={setModalActive}/>
    else return null
}

// debounce keydown handle on search query filter
//on key up filter products array by searchQuery, set it to state, send state as prop to search modal
let debounceTimer: ReturnType<typeof setTimeout>;

export const debounceFilterMethodBySearchQuery = (products: ProductsTypes[], searchQuery: string, setFilteredProducts: Function): void => {

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout((): void => {
        let newProducts:(ProductsTypes | undefined)[] = products?.map((el:ProductsTypes) => {
            if(el?.title.toLowerCase()?.includes(searchQuery.toLowerCase())) return el
        })?.filter((el:ProductsTypes | undefined): boolean => el !== undefined)

        setFilteredProducts(newProducts)
    }, 500);
};



//set initial state value when search modal is triggered on empty query for the first time
export const useRenderInitialFilteredProductsForEmptySearchQuery = (products: ProductsTypes[], setFilteredProducts: Function): void => {
    useEffect((): void => {
        if(products) setFilteredProducts(products)
    }, [])

}
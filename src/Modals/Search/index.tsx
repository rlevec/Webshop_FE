import {StyledSearch} from "./styledSearch";

import {FC, ReactElement} from "react";

import Close from "../../Assets/close.svg"

import {Link} from "react-router-dom";

import {ProductsTypes, SearchPropTypes} from "./types";

import {CONST} from "../../Utils/CONST";

import {locationRouteDispatcher, productsRouteDispatcher} from "../../Utils/helpers";

import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";


const Search: FC<SearchPropTypes> = (props): ReactElement => {
    const dispatch:Dispatch = useAppDispatch()

    const {searchQuery, filteredProducts, setSearchModalActive, setSearchQuery, modalActive, setModalActive} = props



    const deviceType = useAppSelector((state) => state?.device?.device)


        return (
            <StyledSearch>
                <div className="close-icon-wrapper">
                    {deviceType === "desktop" ? (
                        <div className="close-icon-container" onClick={() => setSearchModalActive?.(false)}>
                            <Close />
                        </div>
                    ) : (
                        <div className="close-icon-container" onClick={() => setModalActive?.({...modalActive, search: false})}>
                            <Close />
                        </div>
                    )}
                </div>
                <div className="data-container">
                    {filteredProducts?.length ? (
                        filteredProducts?.map((el: ProductsTypes | undefined) => {
                            return (
                                <Link
                                    to={el?.route as string}
                                    className="single_product-container" key={el?.frontendSlug as string}
                                    onClick={() => {
                                        setSearchModalActive?.(false);
                                        setModalActive?.({...modalActive, search: false})
                                        productsRouteDispatcher(null, null, null, dispatch);
                                        locationRouteDispatcher(null, dispatch)
                                    }}
                                >
                                    <p className="title-container">{el?.title as string}</p>
                                    <img src={el?.image as string} alt={el?.frontendSlug as string}/>
                                </Link>
                            )
                        })
                    ) : (
                        <div className="empty-search-container">
                            <div className="paragraph-one">Your search query <span>{searchQuery}</span> does not match any of the products in our the database.</div>
                            <div className="paragraph-two">Check available products directly from our <Link to={CONST?.routes?.productsRoute} onClick={() => {setSearchModalActive?.(false); setSearchQuery?.("")}}>catalog</Link>.</div>
                        </div>
                    )}
                </div>
            </StyledSearch>
        )
}


export default Search
import {FC, ReactElement, useEffect, useRef, useState} from "react";
import * as React from "react";

import {Link} from "react-router-dom";

import Logo from "../../../../Assets/logo.png";

import {HeaderFormDataTypes, ModalActiveStateTypes, HeaderFormModalTypes, ProductsTypes} from "./types";

import {
    handleMouseEnter,
    handleMouseLeave,
    renderComponents,
    debounceFilterMethodBySearchQuery,
    useRenderInitialFilteredProductsForEmptySearchQuery
} from "./helpers";
import {locationRouteDispatcher, productsRouteDispatcher, useHandleClickOutside} from "../../../../Utils/helpers";

import {handleIcons} from "../../../../Utils/helpers";

import {StyledLogoSearchModals} from "./styledLogoSearchModals";

import {useGetHeaderFormDataQuery, useGetProductsDataQuery} from "../../../../Redux/Slices/apiSlice";
import {useAppDispatch} from "../../../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import Search from "../../../../Modals/Search";
import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";

import {CONST} from "../../../../Utils/CONST";

const LogoSearchModals: FC = (): ReactElement => {
    const dispatch: Dispatch = useAppDispatch()

    const [searchModalActive, setSearchModalActive] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState<(ProductsTypes | undefined)[]>([])

    const {
        data: isFetchedHeaderFormData,
        isFetching: isFetchingHeaderFormData,
        isLoading: isLoadingHeaderFormData,
        isError: isErrorHeaderFormData
    } = useGetHeaderFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})


    const {
        data: isFetchedProductsData,
        isFetching: isFetchingProductsData,
        isLoading: isLoadingProductsData,
        isError: isErrorProductsData
    } = useGetProductsDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})


    const [modalActive, setModalActive] = useState<ModalActiveStateTypes>({
        help: false,
        location: false,
        profile: false,
        wish: false,
        cart: false
    })

    const [searchQuery, setSearchQuery] = useState<string>("")

    let headerFormData: HeaderFormDataTypes = isFetchedHeaderFormData


    const products: ProductsTypes[] = isFetchedProductsData || []


    const searchContainerRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);


    useHandleClickOutside(setSearchModalActive, searchContainerRef)

    useRenderInitialFilteredProductsForEmptySearchQuery(products, setFilteredProducts)

    if (isFetchingHeaderFormData || isLoadingHeaderFormData || isLoadingProductsData || isFetchingProductsData) return <Loading/>
    else if (isErrorHeaderFormData || isErrorProductsData || !isFetchedHeaderFormData || !isFetchedProductsData) return <ServerError/>
    else {
        return (
            <StyledLogoSearchModals>
                <div className="header_placeholder-container"></div>
                <div className="header_logo-container">
                    <Link
                        to={CONST?.routes?.root}
                        onClick={() => {
                            productsRouteDispatcher(null, null, null, dispatch);
                            locationRouteDispatcher(null, dispatch)
                        }}
                    >
                        <img src={Logo} alt="logo"/>
                    </Link>
                </div>
                <div className="header_search-bar-container">
                    <div className="header_search-bar-wrapper">
                        <input
                            onClick={() => setSearchModalActive(true)}
                            value={searchQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>): void | null => setSearchQuery(e?.target?.value)}
                            name={headerFormData?.searchInput?.input?.name}
                            placeholder={headerFormData?.searchInput?.input?.placeholder}
                            autoComplete="off"
                            onKeyUp={() => debounceFilterMethodBySearchQuery(products, searchQuery, setFilteredProducts)}
                            type={headerFormData?.searchInput?.input?.type}
                        />
                        <div
                            className="inputs_field-icons">{handleIcons(headerFormData?.searchInput?.input?.frontendSlug as string)}</div>
                        {searchModalActive && (
                            <div className="search_modal" ref={searchContainerRef}>
                                <Search searchQuery={searchQuery} filteredProducts={filteredProducts}
                                        setSearchModalActive={setSearchModalActive} setSearchQuery={setSearchQuery}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="header_modal-content-container">
                    {
                        headerFormData?.modals?.map((el: HeaderFormModalTypes) => {
                            const {id, frontendSlug} = el
                            return (
                                <div className="header_single-modal-content-container" key={id}
                                     onMouseEnter={() => handleMouseEnter(frontendSlug, modalActive, setModalActive)}
                                     onMouseLeave={() => handleMouseLeave(frontendSlug, modalActive, setModalActive)}>
                                    <div className="header_modal-content">{handleIcons(frontendSlug)}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="header_placeholder-container"></div>
                <div className="header_active-modal">
                    {renderComponents(modalActive, setModalActive)}
                </div>
            </StyledLogoSearchModals>
        )
    }
}

export default LogoSearchModals
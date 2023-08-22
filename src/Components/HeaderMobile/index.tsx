import {StyledHeaderMobile} from "./styledHeaderMobile";

import {FC, useState, useRef, ReactElement} from "react";

import {staticData} from "./staticData";

import {Link} from "react-router-dom";

import {
    handleModalActive,
    debounceFilterMethodBySearchQuery,
    useHandleSetInitialSearchDataToRender
} from "./helpers";
import {useHandleClickOutside} from "../../Utils/helpers";

import {
    HeaderMobileStaticDataTypes,
    HeaderMobileStaticDataContentTypes,
    ProductsTypes,
    ModalActiveStateTypes
} from "./types";

import {CONST} from "../../Utils/CONST";

import Wishlist from "../../Modals/Wishlist";
import Cart from "../../Modals/Cart";
import Profile from "../../Modals/Profile";
import Search from "../../Modals/Search";
import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";
import Sidebar from "../Sidebar";

import {useGetProductsDataQuery} from "../../Redux/Slices/apiSlice";

import * as React from "react";


const HeaderMobile: FC = (): ReactElement => {
    const {
        data: isFetchedProductsData,
        isFetching: isFetchingProductsData,
        isLoading: isLoadingProductsData,
        isError: isErrorProductsData
    } = useGetProductsDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: true,
        refetchOnReconnect: true
    })

    const [filteredProducts, setFilteredProducts] = useState<(ProductsTypes | undefined)[]>([])
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [modalActive, setModalActive] = useState<ModalActiveStateTypes>({
        profile: false,
        wish: false,
        cart: false,
        sidebar: false,
        search: false
    })

    const headerAltDataToRender: HeaderMobileStaticDataTypes = staticData

    const modalRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);


    const productsData: ProductsTypes[] = isFetchedProductsData

    useHandleSetInitialSearchDataToRender(productsData, setFilteredProducts)

    useHandleClickOutside(setModalActive, modalRef, "multiple", modalActive)

    if (isFetchingProductsData || isLoadingProductsData) return <Loading/>
    else if (isErrorProductsData || !isFetchedProductsData) return <ServerError/>
    else {
        return (
            <StyledHeaderMobile sidebarActive={modalActive?.sidebar}>
                <div className="header_mobile-wrapper">
                    <Link to={CONST?.routes?.root} className="header_mobile-logo-container">
                        <img src={headerAltDataToRender?.logo?.image} alt={staticData?.logo?.alt}/>
                    </Link>
                    <div className="header_mobile-content-container">
                        {headerAltDataToRender?.content?.map((el: HeaderMobileStaticDataContentTypes) => {
                            const {id, element, parentClassName, frontendSlug} = el

                            return (
                                <div key={id} className={parentClassName}
                                     onClick={() => handleModalActive(frontendSlug, modalActive, setModalActive)}>
                                    {element}
                                </div>
                            )
                        })}
                    </div>
                    {modalActive?.sidebar && <div className="header_mobile-sidebar-wrapper" ref={modalRef}><Sidebar
                      setModalActive={setModalActive} modalActive={modalActive}/></div>}
                    {modalActive?.wish &&
                      <div className="modal" ref={modalRef}><Wishlist modalActive={modalActive}
                                                                      setModalActive={setModalActive}/>
                      </div>}
                    {modalActive?.cart &&
                      <div className="modal" ref={modalRef}><Cart modalActive={modalActive}
                                                                  setModalActive={setModalActive}/>
                      </div>}
                    {modalActive?.profile &&
                      <div className="modal" ref={modalRef}><Profile modalActive={modalActive}
                                                                     setModalActive={setModalActive}/>
                      </div>}
                    {modalActive?.search && <div className="modal" ref={modalRef}><>
                      <div className="search-input-container"><input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e?.target?.value)}
                        placeholder="Search Products" type="search"
                        onKeyUp={() => debounceFilterMethodBySearchQuery(productsData, searchQuery, setFilteredProducts)}/>
                      </div>
                      <Search searchQuery={searchQuery}
                              filteredProducts={filteredProducts}
                              setSearchQuery={setSearchQuery}
                              setModalActive={setModalActive}
                              modalActive={modalActive}
                      /></>
                    </div>}
                </div>
            </StyledHeaderMobile>
        )
    }
}

export default HeaderMobile
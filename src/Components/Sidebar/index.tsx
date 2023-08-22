import {StyledSidebar} from "./styledSidebar";
import {FC, ReactElement} from "react";
import {useUseGetCategoriesModalFormDataQuery, useUseGetBrandLogoImagesDataQuery} from "../../Redux/Slices/apiSlice";
import {CategoriesModalFormDataTypes, CategoriesSubCategoriesModalFormDataTypes, BrandLogoImagesDataTypes, SidbearPropTypes, ModalActivePropTypes} from "./types";

import {CONST} from "../../Utils/CONST";

import {useAppDispatch} from "../../Redux/Store/store";

import ArrowRight from "../../Assets/arrow-right.svg"
import Plus from "../../Assets/plus.svg"
import Minus from "../../Assets/minus.svg"
import Close from "../../Assets/close.svg"
import Brands from "../../Assets/brands.svg"

import {Link, NavigateFunction, useNavigate} from "react-router-dom";

import {useState} from "react";

import {productsRouteDispatcher} from "../../Utils/helpers";

import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";
import {Dispatch} from "@reduxjs/toolkit";

import {handleSubCategoryActive} from "./helpers";
import {handleIcons} from "../../Utils/helpers";


const Sidebar: FC<SidbearPropTypes> = (props): ReactElement => {
    const {modalActive, setModalActive} = props

    const {
        data: isFetchedBrandLogoImagesData,
        isFetching: isFetchingBrandLogoImagesData,
        isLoading: isLoadingBrandLogoImagesData,
        isError: isErrorBrandLogoImagesData
    } = useUseGetBrandLogoImagesDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })

    const {
        data: isFetchedCategoriesModalFormData,
        isFetching: isFetchingCategoriesModalFormData,
        isLoading: isLoadingCategoriesModalFormData,
        isError: isErrorCategoriesModalFormData,
    } = useUseGetCategoriesModalFormDataQuery({
        refetchOnMountOrArgChange: true,
        refetchOnFocus: false,
        refetchOnReconnect: true
    })

    const [categoryActive, setCategoryActive] = useState<null | string>(null)

    const dispatch: Dispatch = useAppDispatch()
    const navigate: NavigateFunction = useNavigate()

    const categoriesModalFormData: CategoriesModalFormDataTypes[] = isFetchedCategoriesModalFormData

    const brandsFormData: BrandLogoImagesDataTypes[] = isFetchedBrandLogoImagesData

    if (isFetchingCategoriesModalFormData || isLoadingCategoriesModalFormData || isFetchingBrandLogoImagesData || isLoadingBrandLogoImagesData) return <Loading/>
    else if (isErrorCategoriesModalFormData || !isFetchedCategoriesModalFormData || isErrorBrandLogoImagesData || !isFetchedBrandLogoImagesData) return <ServerError/>
    else {
        return (
            <StyledSidebar>
                <div className="sidebar_wrapper">
                    <div
                        className="close_icon-container"
                        onClick={() => setModalActive({...modalActive, sidebar: !modalActive?.sidebar})}
                    >
                        <Close/>
                    </div>
                    <div className="sidebar_categories-wrapper">
                        {
                            categoriesModalFormData?.map((el: CategoriesModalFormDataTypes) => {
                                const {categorySlug, id, categoryTitle} = el

                                return (
                                    <>
                                        <div
                                            key={id}
                                            className="sidebar_element"
                                        >
                                            <div className="category-icon">{handleIcons(categorySlug)}</div>
                                            <div className="category_title"
                                                 onClick={(): void => {
                                                     if (categoryActive === categorySlug) setCategoryActive(null)
                                                     else setCategoryActive(categorySlug)
                                                 }}
                                            >{categoryTitle}</div>
                                            <div className="arrow_icon-container"
                                                 onClick={(): void => {
                                                     if (categoryActive === categorySlug) setCategoryActive(null)
                                                     else setCategoryActive(categorySlug)
                                                 }}
                                            >
                                                {categorySlug === categoryActive ? <Minus/> : <Plus/>}
                                            </div>
                                            <div className="arrow_icon-container"
                                                 onClick={(): void => {
                                                     productsRouteDispatcher(categorySlug, null, null, dispatch);
                                                     setModalActive({...modalActive, sidebar: false});
                                                     navigate(CONST?.routes?.productsRoute);
                                                 }}
                                            >
                                                <ArrowRight/>
                                            </div>
                                        </div>
                                        {
                                            categorySlug === categoryActive && (
                                                <ul className="subCategory_container">
                                                    {
                                                        handleSubCategoryActive(categoriesModalFormData, categoryActive)?.map((el: CategoriesSubCategoriesModalFormDataTypes) => {
                                                            const {subCategorySlug, subCategoryTitle} = el

                                                            return (
                                                                <li>
                                                                    <div
                                                                        className="subCategory_title"
                                                                        onClick={() => {
                                                                            productsRouteDispatcher(categorySlug, subCategorySlug, null, dispatch);
                                                                            setModalActive({...modalActive, sidebar: false});
                                                                            navigate(CONST?.routes?.productsRoute);
                                                                        }}
                                                                    >
                                                                        {subCategoryTitle}
                                                                    </div>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            )
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="brands_wrapper">
                        <div className="brand-header">
                            <div className="brands-icon"><Brands/></div>
                            <div
                                className="brands_title"
                                onClick={() => {
                                    if(categoryActive === "brands")setCategoryActive(null);
                                    else setCategoryActive("brands");
                                }}
                            >
                                Brands
                            </div>
                            <div
                                className="brands_icon-container"
                                onClick={() => {
                                    if(categoryActive === "brands")setCategoryActive(null);
                                    else setCategoryActive("brands");
                                }}
                            >
                                {categoryActive === "brands" ? <Minus/> : <Plus/>}
                            </div>
                            <Link
                                to={CONST?.routes?.brandsRoute}
                                onClick={(): void => {
                                    setCategoryActive(null)
                                    setModalActive({...modalActive, sidebar: false});
                                }}
                                className="brands_icon-container"
                            >
                                <ArrowRight/>
                            </Link>
                        </div>
                        {categoryActive === "brands" && (
                            <ul className="brands_container">
                                {
                                    brandsFormData?.map((el: BrandLogoImagesDataTypes) => {
                                        const {id, frontendSlug, title} = el
                                        return (
                                            <li key={id}>
                                                <div className="brands_title"
                                                    onClick={(): void => {
                                                        productsRouteDispatcher(null, null, frontendSlug, dispatch);
                                                        setModalActive({...modalActive, sidebar: false});
                                                        setCategoryActive(null);
                                                        navigate(CONST?.routes?.productsRoute)
                                                    }}
                                                >
                                                    {title}
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )}
                    </div>
                </div>
            </StyledSidebar>
        )
    }
}

export default Sidebar
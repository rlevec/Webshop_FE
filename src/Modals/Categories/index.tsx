import {FC, ReactElement} from "react";

import {
    CategoriesModalPropTypes,
    BrandLogoImagesDataTypes,
    CategoriesModalFormDataTypes, CategoriesSubCategoriesModalFormDataTypes
} from "./types";

import PrimaryBrandImage from "../../Assets/images/brand.png"

import {Link} from "react-router-dom";

import {StyledCategoriesModal} from "./styledCategoriesModal";

import {productsRouteDispatcher} from "../../Utils/helpers";

import {
    handleModalMouseEnter,
    handleModalMouseLeave,
    handleActiveCategory
} from "./helpers";

import Close from "../../Assets/close.svg"

import {
    useUseGetBrandLogoImagesDataQuery,
    useUseGetCategoriesModalFormDataQuery
} from "../../Redux/Slices/apiSlice";
import {useAppDispatch} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import {CONST} from "../../Utils/CONST";

import ServerError from "../../Pages/ServerError";
import Loading from "../../Pages/Loading";


const CategoriesModal: FC<CategoriesModalPropTypes> = (props) => {
    const dispatch: Dispatch = useAppDispatch()

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


    const {hovered, setHovered} = props

    const brandLogoImagesData: BrandLogoImagesDataTypes[] = isFetchedBrandLogoImagesData

    const categoriesModalFormData: CategoriesModalFormDataTypes[] = isFetchedCategoriesModalFormData


    if (isFetchingBrandLogoImagesData || isLoadingBrandLogoImagesData || isFetchingCategoriesModalFormData || isLoadingCategoriesModalFormData) return <Loading/>
    else if (isErrorBrandLogoImagesData || !isFetchedBrandLogoImagesData || isErrorCategoriesModalFormData || !isFetchedCategoriesModalFormData) return <ServerError/>
    else {
        return (
            <StyledCategoriesModal onMouseEnter={() => handleModalMouseEnter(hovered, setHovered)}
                                   onMouseLeave={() => handleModalMouseLeave(hovered, setHovered)}>
                <div className="categories_wrapper">
                    <div className="categories_close-modal-icon-container"
                         onClick={() => handleModalMouseLeave(hovered, setHovered)}>
                        <Close/>
                    </div>
                    <div className="categories_container">
                            {hovered?.brands ? (
                                <div className="categories_brand-image-container">
                                    <Link to={CONST?.routes?.productsRoute} onClick={(): void => {productsRouteDispatcher(null, null, "laRochePosay", dispatch); handleModalMouseLeave(hovered, setHovered)}}>
                                        <img src={PrimaryBrandImage} alt="brand-image"/>
                                    </Link>
                                </div>
                            ) : (
                                <div className="categories_image-container">
                                    <Link to={CONST?.routes?.productsRoute} onClick={(): void => {productsRouteDispatcher(handleActiveCategory(hovered, categoriesModalFormData)?.categorySlug as string, null, null, dispatch); handleModalMouseLeave(hovered, setHovered)}}>
                                        <img src={handleActiveCategory(hovered, categoriesModalFormData)?.categoryImagePrimary} alt={handleActiveCategory(hovered, categoriesModalFormData)?.categorySlug}/>
                                    </Link>
                                </div>
                            )}
                        {hovered?.brands ? (
                            <div className="categories_brandsSubcategory-wrapper">
                                <div className="categories_brandsSubcategory-container">
                                    {brandLogoImagesData?.map((el: BrandLogoImagesDataTypes) => {
                                        const { frontendSlug, image} = el

                                        return (
                                            <Link
                                                key={frontendSlug}
                                                className="brand_container"
                                                to={CONST?.routes?.productsRoute}
                                                onClick={() => {
                                                    productsRouteDispatcher(null, null, frontendSlug, dispatch);
                                                    handleModalMouseLeave(hovered, setHovered)
                                                }
                                                }
                                            >
                                                <img src={image} alt={frontendSlug}/>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        ) : (
                            <div className="categories_subCategories-wrapper">
                                <div className="categories_subCategories-container">
                                    {
                                        handleActiveCategory(hovered, categoriesModalFormData)?.subCategories?.map((el: CategoriesSubCategoriesModalFormDataTypes): ReactElement => {
                                            const { subCategorySlug, subCategoryImage, subCategoryTitle} = el
                                            return (
                                                    <Link
                                                        key={subCategorySlug}
                                                        to={CONST?.routes?.productsRoute}
                                                        onClick={() => {
                                                            productsRouteDispatcher(handleActiveCategory(hovered, categoriesModalFormData)?.categorySlug as string, subCategorySlug, null, dispatch);
                                                            handleModalMouseLeave(hovered, setHovered)
                                                        }
                                                        }
                                                        className="categories_title-categories-container"
                                                    >
                                                        <div className="categories_title-categories-container">
                                                            <div className="categories_subCategories-title">{subCategoryTitle}</div>
                                                            <img src={subCategoryImage} alt={subCategorySlug}/>
                                                        </div>
                                                    </Link>
                                            )
                                        })
                                    }
                                </div>
                                <div className="categories_subCategories-category-img-container">
                                    <Link to={CONST?.routes?.productsRoute} onClick={(): void => {productsRouteDispatcher(handleActiveCategory(hovered, categoriesModalFormData)?.categorySlug as string, null, null, dispatch); handleModalMouseLeave(hovered, setHovered)}}>
                                        <img src={handleActiveCategory(hovered, categoriesModalFormData)?.categoryImageSecondary} alt={handleActiveCategory(hovered, categoriesModalFormData)?.categorySlug}/>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </StyledCategoriesModal>
        )
    }
}
export default CategoriesModal
import {FC, ReactElement, useState} from "react";

import {StyledCategories} from "./styledCategories";

import {Location, useLocation} from "react-router-dom";

import {
    handleMouseEnter,
    handleMouseLeave,
    renderUnderline,
    handleArrayToRender
} from "./helpers";

import {handleIcons} from "../../../../Utils/helpers";

import {CategoriesHoveredStateTypes, ProductsTypes, ProductsCategoriesTypes} from "./types";

import CategoriesModal from "../../../../Modals/Categories";
import Loading from "../../../../Pages/Loading";
import ServerError from "../../../../Pages/ServerError";

import {useGetProductsDataQuery} from "../../../../Redux/Slices/apiSlice";

const Categories: FC = ():ReactElement => {
    const location:Location = useLocation()

    const {
        data: isFetchedProductsData,
        isFetching: isFetchingProductsData,
        isLoading: isLoadingProductsData,
        isError: isErrorProductsData
    } = useGetProductsDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})



    const productsData: ProductsTypes[] = isFetchedProductsData


    const [hovered, setHovered] = useState<CategoriesHoveredStateTypes>({
        cosmetics: false,
        selfHealing: false,
        brands: false,
        covid: false,
        momKids: false,
        foodSupplements: false,
        medicalAids: false
    })


    if(isFetchingProductsData || isLoadingProductsData) return <Loading/>
    else if(isErrorProductsData || !isFetchedProductsData) return <ServerError/>
    else {
        return (
            <StyledCategories borderBottomActive={location?.pathname === "/"}>
                <div className="categories_wrapper">
                    {handleArrayToRender(productsData)?.map((el:ProductsCategoriesTypes) => {
                        const {categorySlug, categoryTitle} = el

                        return (
                            <div key={categorySlug} className="categories_title-icon-container"
                                 onMouseEnter={() => handleMouseEnter(categorySlug, hovered, setHovered)}
                                 onMouseLeave={() => handleMouseLeave(categorySlug, hovered, setHovered)}>
                                <div className="categories_icon">{handleIcons(categorySlug as string)}</div>
                                <div className="categories_title">{categoryTitle}</div>
                                {renderUnderline(categorySlug, hovered)}
                            </div>
                        )
                    })}
                </div>
                {Object.entries(hovered)?.some((el: [string, boolean]) => el[1]) &&
                  <CategoriesModal hovered={hovered} setHovered={setHovered}/>
                }
            </StyledCategories>
        )
    }
}
export default Categories
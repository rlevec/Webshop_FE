import {FC, ReactElement} from "react"

import {StyledWishlist} from "./styledWishlist";
import {StyledWishlistPopulated} from "./styledWishlistPopulated";

import {WishlistFormDataPropTypes, WishlistFormDataTypes, WishlistTypes} from "./types";

import {Link} from "react-router-dom";

import {CONST} from "../../Utils/CONST";

import {useGetWishlistFormDataQuery} from "../../Redux/Slices/apiSlice";
import {removeWishlistItem} from "../../Redux/Slices/wishlistSlice";
import {useAppDispatch, useAppSelector} from "../../Redux/Store/store";
import {Dispatch} from "@reduxjs/toolkit";

import {locationRouteDispatcher, productsRouteDispatcher} from "../../Utils/helpers";
import {handleMoveFromWishlistToCart} from "./helpers";

import Close from "../../Assets/close.svg";
import MoveTo from "../../Assets/move_to_arrow.svg"

import Loading from "../../Pages/Loading";
import ServerError from "../../Pages/ServerError";


export const Wishlist: FC<WishlistFormDataPropTypes> = (props): ReactElement => {
    const {
        data: isFetchedWishlistFormData,
        isFetching: isFetchingWishlistFormData,
        isLoading: isLoadingWishlistFormData,
        isError: isErrorWishlistFormData
    } = useGetWishlistFormDataQuery({refetchOnMountOrArgChange: true, refetchOnFocus: true, refetchOnReconnect: true})

    const reduxStateFractionWishList: WishlistTypes[] = useAppSelector((state) => state?.wishlistItems?.wishlistItems)

    const dispatch: Dispatch = useAppDispatch()

    const {modalActive, setModalActive} = props

    const wishlistFormData: WishlistFormDataTypes = isFetchedWishlistFormData

    const deviceType = useAppSelector((state) => state?.device?.device)


    if (isFetchingWishlistFormData || isLoadingWishlistFormData) return <Loading/>
    else if (isErrorWishlistFormData || !isFetchedWishlistFormData) return <ServerError/>
    else {
        if (reduxStateFractionWishList?.some((el: WishlistTypes) => el?.inWishlist)) {
            return (
                <StyledWishlistPopulated onMouseEnter={() => setModalActive({...modalActive, wish: true})}
                                         onMouseLeave={() => setModalActive({...modalActive, wish: false})}>
                    <div className="wishlist_wrapper">
                        {deviceType !== "desktop" && <div className="close-icon-container" onClick={() => setModalActive({...modalActive, wish: false})}><Close/></div>}
                        {reduxStateFractionWishList?.map((el: WishlistTypes) => {
                            const {title, image, frontendSlug} = el

                            return (
                                <div className="wishlist_products-wrapper">
                                    <div className="wishlist_products-container">
                                        <div className="wishlist_products-title">{title}</div>
                                        <div className="wisthlist_products-decs-icon-container">
                                            <div className="wishlist_img-container">
                                                <img src={image} alt={frontendSlug}/>
                                            </div>
                                            <div className="wishlist_move_to-item-icon-wrapper"
                                            >
                                                <div className="wishlist_move_to-item-icon-container"
                                                     onClick={() => handleMoveFromWishlistToCart(el, dispatch)}
                                                >
                                                    <MoveTo/>
                                                </div>
                                            </div>
                                            <div className="wishlist_remove-item-icon-wrapper"
                                            >
                                                <div className="wishlist_remove-item-icon-container"
                                                     onClick={() => dispatch(removeWishlistItem({
                                                         wishlistItem: {
                                                             frontendSlug: frontendSlug,
                                                             title: title,
                                                             image: image
                                                         }
                                                     }))}
                                                >
                                                    <Close/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </StyledWishlistPopulated>
            )
        }
        return (
            <StyledWishlist onMouseEnter={() => setModalActive({...modalActive, wish: true})}
                            onMouseLeave={() => setModalActive({...modalActive, wish: false})}>
                <div className="wishlist_wrapper">
                    {deviceType !== "desktop" && <div className="close-icon-container" onClick={() => setModalActive({...modalActive, wish: false})}><Close/></div>}
                    <div className="wishlist_title">{wishlistFormData?.header}</div>
                    <div className="wishlist_empty">{wishlistFormData?.emptyTitle}</div>
                    <div className="wishlist_warning">
                        {wishlistFormData?.emptyWarningOne} <span>
                        <Link
                            to={CONST?.routes?.productsRoute}
                            onClick={() => {
                                productsRouteDispatcher(null, null, null, dispatch);
                                setModalActive({...modalActive, wish: false});
                                locationRouteDispatcher(null, dispatch);
                            }}
                        >
                            {wishlistFormData?.emptyWarningTwo}
                        </Link>
                        </span> {wishlistFormData?.emptyWarningThree}
                    </div>
                </div>
            </StyledWishlist>
        )
    }
}

export default Wishlist
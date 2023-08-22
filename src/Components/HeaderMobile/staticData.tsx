import SearchIcon from "../../Assets/search.svg"
import HamburgerIcon from "../../Assets/hamburger.svg"
import CartIcon from "../../Assets/cart.svg"
import WishlistIcon from "../../Assets/heart.svg"
import ProfileIcon from "../../Assets/user.svg"
import Logo from "../../Assets/logo.png"

import {HeaderMobileStaticDataTypes} from "./types";

export const staticData: HeaderMobileStaticDataTypes = {
    logo: {
        image: Logo,
        alt: "logo-image"
    },
    content: [
        {
            id: 1,
            frontendSlug: "search",
            element: <SearchIcon/>,
            alt: "search-icon",
            parentClassName: "header_mobile-search-icon-container",
            order: 1,
        },
        {
            id: 2,
            frontendSlug: "profile",
            element: <ProfileIcon/>,
            alt: "profile-icon",
            parentClassName: "header_mobile-profile-icon-container",
            order: 2,
        },
        {
            id: 3,
            frontendSlug: "wishlist",
            element: <WishlistIcon/>,
            alt: "wishlist-icon",
            parentClassName: "header_mobile-wishlist-icon-container",
            order: 3,
        },
        {
            id: 4,
            frontendSlug: "cart",
            element: <CartIcon/>,
            alt: "cart-icon",
            parentClassName: "header_mobile-cart-icon-container",
            order: 4,
        },
        {
            id: 7,
            frontendSlug: "hamburger",
            element: <HamburgerIcon/>,
            alt: "hamburger-icon",
            parentClassName: "header_mobile-hamburger-icon-container",
            order: 7,
        }
    ]
}
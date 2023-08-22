import {UniversalHelperTypes} from "./types";


import {setSelectedBrand} from "../Redux/Slices/selectedBrand";
import {setSelectedCategory} from "../Redux/Slices/selectedCategorySlice";
import {setSelectedSubCategory} from "../Redux/Slices/selectedSubCategorySlice";
import {setSelectedLocation} from "../Redux/Slices/selectedLocationSlice";
import {addItemToWishlist, removeWishlistItem} from "../Redux/Slices/wishlistSlice";
import {addItemToCart} from "../Redux/Slices/cartSlice";
import {setDevice} from "../Redux/Slices/device";
import {Dispatch} from "@reduxjs/toolkit";


import {Location} from "react-router-dom";

import React, {ReactElement, useCallback, useEffect} from "react";

import Email from "../Assets/email.svg";
import Password from "../Assets/password.svg";
import User from "../Assets/user.svg";
import Signature from "../Assets/signature.svg";
import City from "../Assets/city.svg";
import Postal from "../Assets/postal.svg";
import Address from "../Assets/address.svg";
import CreditCard from "../Assets/credit-card.svg";
import Security from "../Assets/ccv.svg";
import DatePicker from "../Assets/datePicker.svg";
import HelpIcon from "../Assets/help.svg";
import LocationsIcon from "../Assets/location-pin.svg";
import UserIcon from "../Assets/user.svg";
import HeartIcon from "../Assets/heart.svg";
import CartIcon from "../Assets/cart.svg";
import Amex from "../Assets/amex.svg";
import Visa from "../Assets/visa.svg";
import Master from "../Assets/master.svg";
import Diners from "../Assets/diners.svg";
import Discover from "../Assets/discover.svg";
import Bill from "../Assets/bill.svg";
import NewsLetter from "../Assets/newsletter.svg";
import SingUp from "../Assets/sing-up.svg";
import Globe from "../Assets/country.svg";
import Calendar from "../Assets/calendar.svg";
import Genders from "../Assets/gender.svg";
import Orders from "../Assets/order.svg";
import Delivery from "../Assets/delivery.svg";
import Payment from "../Assets/payment.svg";
import Return from "../Assets/return.svg";
import Other from "../Assets/other.svg";
import Search from "../Assets/search.svg";
import Cosmetics from "../Assets/cosmetics.svg";
import SelfHealing from "../Assets/self-healing.svg";
import Supplements from "../Assets/food-supplements.svg";
import Covid from "../Assets/covid.svg";
import MomKids from "../Assets/mom-kids.svg";
import MedicalAids from "../Assets/medical-aids.svg";
import Brands from "../Assets/brands.svg";
import HidePassword from "../Assets/passwordNotShow.svg";
import ShowPassword from "../Assets/passwordShow.svg";
import forgotPassword from "../Modals/ForgotPassword";


//cookie handler for login / buyout to gather user info for future product references
export const setCookie = (name: string, value: string, days: number): void => {

    const expirationDate: Date = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue: string = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
};


//detect device on the first render of the app
export const useHandleDeviceDetection = (dispatch: Dispatch): void => {
    useEffect((): void => {
        if (window && window.innerWidth) {
            const isPortrait: boolean = window.matchMedia("(orientation: portrait)").matches;

            if ((window.innerWidth < 625 && window.innerWidth > 0) && isPortrait) dispatch(setDevice({device: "phonePortrait"}));
            else if ((window.innerWidth >= 625 && window.innerWidth <= 1400) && isPortrait) dispatch(setDevice({device: "tabletPortrait"}));
            else dispatch(setDevice({device: "desktop"}));

        }
    }, []);
}


//handler for selecting brand/category/subcategory outside the Products component
export const productsRouteDispatcher = (category: string | null, subCategory: string | null, brand: string | null, dispatch: Dispatch): void => {
    dispatch(setSelectedBrand({brandSelected: brand}))
    dispatch(setSelectedCategory({categorySelected: category}))
    dispatch(setSelectedSubCategory({subCategorySelected: subCategory}))

    window.scrollTo(0, 0)
}


//handler for selecting location outside the Locations component
export const locationRouteDispatcher = (frontendSlug: string | null, dispatch: Dispatch): void => {
    dispatch(setSelectedLocation({locationSelected: frontendSlug}))

    window.scrollTo(0, 0)
}


//cart dispatch handler
//if selected item is in wishlist, remove it from wishlist and move it to cart
//else add to cart
export const handleAddToCart = (cartObj: UniversalHelperTypes["cartItem"], reduxWishlistItems: UniversalHelperTypes["wishlistItems"], dispatch: Dispatch): void => {

    let exists: boolean = false


    reduxWishlistItems?.forEach((el: UniversalHelperTypes["wishlistItem"]): void => {
        if (el?.frontendSlug === cartObj?.frontendSlug) exists = true
    })


    if (exists) {
        dispatch(removeWishlistItem({
            wishlistItem: {
                frontendSlug: cartObj?.frontendSlug,
                title: cartObj?.title,
                image: cartObj?.image
            }
        }))
        dispatch(addItemToCart({
            cartItem: {
                frontendSlug: cartObj?.frontendSlug,
                title: cartObj?.title,
                image: cartObj?.image
            }
        }))
    } else {
        dispatch(addItemToCart({
            cartItem: {
                frontendSlug: cartObj?.frontendSlug,
                title: cartObj?.title,
                image: cartObj?.image
            }
        }))
    }
}


//cart dispatch caller and onClick event warning states handler
export const handleAddToCartFunction = (
    frontendSlug: string,
    cartItem: UniversalHelperTypes["cartItem"],
    reduxStateWishlistItems: UniversalHelperTypes["wishlistItems"],
    dispatch: Dispatch,
    cartItemWarning: UniversalHelperTypes["cartItemWarningStateTypes"],
    setCartItemWarning: Function,
    reduxStateCartItems: UniversalHelperTypes["cartItems"],
): void => {
    handleAddToCart(cartItem, reduxStateWishlistItems, dispatch)
    setCartItemWarning({...cartItemWarning, cartItemExists: null, cartItemAdded: frontendSlug})

    let exists: boolean = false

    if (reduxStateCartItems?.some((el: UniversalHelperTypes["cartItem"]): boolean => (el?.frontendSlug === cartItem?.frontendSlug && el?.inCart as boolean))) exists = true

    if (exists) setCartItemWarning({...cartItemWarning, cartItemExists: frontendSlug, setCartItemAdded: null})
}


//cart warning message handler for each product card across components that manipulate individual product
export const useHandleCartWarningStateTracker = (
    cartItemWarning: UniversalHelperTypes["cartItemWarningStateTypes"],
    setCartItemWarning: Function,
    reduxStateCartItems: UniversalHelperTypes["cartItems"]
) => {
    const handleCartWarningStateTrackerCallback = useCallback(() => {
        let timeout: ReturnType<typeof setTimeout> = setTimeout((): void => {
            if (cartItemWarning?.cartItemAdded) setCartItemWarning({...cartItemWarning, cartItemAdded: null})
            else if (cartItemWarning?.cartItemExists) setCartItemWarning({...cartItemWarning, cartItemExists: null})
        }, 3000)

        return () => clearTimeout(timeout)
    }, [cartItemWarning?.cartItemAdded, cartItemWarning?.cartItemExists, reduxStateCartItems])

    useEffect((): void => {
        handleCartWarningStateTrackerCallback()
    }, [handleCartWarningStateTrackerCallback])
}


//wishlist dispatch handler
//if selected item is in cart, retrun null
//else add to wishlist
export const handleAddToWishList = (wishlistObj: UniversalHelperTypes["wishlistItem"], reduxStateCartItems: UniversalHelperTypes["cartItems"], dispatch: Dispatch): void | null => {

    let exists: boolean = false

    reduxStateCartItems?.forEach((el: UniversalHelperTypes["cartItem"]): void => {
        if (el?.inCart) {
            if (el?.frontendSlug === wishlistObj?.frontendSlug) exists = true
        }
    })

    if (exists) return null
    else {
        dispatch(addItemToWishlist({
            wishlistItem: {
                frontendSlug: wishlistObj?.frontendSlug,
                title: wishlistObj?.title,
                image: wishlistObj?.image
            }
        }))
    }
}


//wishlist dispatch caller and onClick event warning states handler
export const handleAddToWishlistFunction = (
    frontendSlug: string,
    wishlistItem: UniversalHelperTypes["wishlistItem"],
    reduxStateCartItems: UniversalHelperTypes["cartItems"],
    dispatch: Dispatch,
    wishlistItemWarning: UniversalHelperTypes["wishlistItemWarningStateTypes"],
    setWishlistItemWarning: Function,
    reduxStateWishlistItems: UniversalHelperTypes["wishlistItems"],
): void => {
    handleAddToWishList(wishlistItem, reduxStateCartItems, dispatch)
    setWishlistItemWarning({
        ...wishlistItemWarning,
        wishlistItemAdded: frontendSlug,
        wishlistItemExists: null,
        wishlistItemInCart: null
    })

    let existsInWishlist: boolean = false
    let exsistsInCart: boolean = false


    if (reduxStateWishlistItems?.some((el: UniversalHelperTypes["wishlistItem"]): boolean => el?.frontendSlug === wishlistItem?.frontendSlug)) existsInWishlist = true
    else if (reduxStateCartItems?.some((el: UniversalHelperTypes["cartItem"]): boolean => (el?.frontendSlug === wishlistItem?.frontendSlug && el?.inCart as boolean))) exsistsInCart = true


    if (existsInWishlist) setWishlistItemWarning({
        ...wishlistItemWarning,
        wishlistItemAdded: null,
        wishlistItemExists: frontendSlug,
        wishlistItemInCart: null
    })
    else if (exsistsInCart) setWishlistItemWarning({
        ...wishlistItemWarning,
        wishlistItemAdded: null,
        wishlistItemExists: null,
        wishlistItemInCart: frontendSlug
    })
}


//wishlist warning message handler for each product across components that manipulate individual product
export const useHandleWishlistWarningStateTracker = (
    reduxStateWishlistItems: UniversalHelperTypes["wishlistItems"],
    reduxStateCartItems: UniversalHelperTypes["cartItems"],
    wishlistItemWarning: UniversalHelperTypes["wishlistItemWarningStateTypes"],
    setWishlistItemWarning: Function,
) => {
    const handleWishlistWarningStateTrackerCallback = useCallback(() => {
        let timeout: ReturnType<typeof setTimeout> = setTimeout((): void => {
            if (wishlistItemWarning?.wishlistItemAdded) setWishlistItemWarning({
                ...wishlistItemWarning,
                wishlistItemAdded: null,
                wishlistItemExists: null,
                wishlistItemInCart: null
            })
            else if (wishlistItemWarning?.wishlistItemExists) setWishlistItemWarning({
                ...wishlistItemWarning,
                wishlistItemAdded: null,
                wishlistItemExists: null,
                wishlistItemInCart: null
            })
            else if (wishlistItemWarning?.wishlistItemInCart) setWishlistItemWarning({
                ...wishlistItemWarning,
                wishlistItemAdded: null,
                wishlistItemExists: null,
                wishlistItemInCart: null
            })
        }, 3000)

        return () => clearTimeout(timeout)
    }, [wishlistItemWarning?.wishlistItemAdded, wishlistItemWarning?.wishlistItemExists, wishlistItemWarning?.wishlistItemInCart, reduxStateWishlistItems, reduxStateCartItems])


    useEffect((): void => {
        handleWishlistWarningStateTrackerCallback()
    }, [handleWishlistWarningStateTrackerCallback])
}


//state based warning render for cart / wishlist
export const handleWishlistCartWarning = (frontendSlug: string, cartItemWarning: UniversalHelperTypes["cartItemWarningStateTypes"], wishlistItemWarning: UniversalHelperTypes["wishlistItemWarningStateTypes"]): ReactElement | null => {
    if (wishlistItemWarning?.wishlistItemAdded === frontendSlug) return <div className="added">Product added to
        wishlist</div>
    else if (wishlistItemWarning?.wishlistItemInCart === frontendSlug) return <div className="exists">Product already in
        cart</div>
    else if (wishlistItemWarning?.wishlistItemExists === frontendSlug) return <div className="exists">Product already in
        wishlist</div>
    else if (cartItemWarning?.cartItemAdded === frontendSlug) return <div className="added">Product added to cart</div>
    else if (cartItemWarning?.cartItemExists === frontendSlug) return <div className="exists">Product already in
        cart</div>
    else return null
}


//if component is accessed via /terms route, do not display it
export const handleCurrentUrlAndDisableComponent = (path: string): {
    currentUrl: boolean,
    disableComponent: boolean
} => {
    const currentUrl: boolean = window?.location?.href?.includes(path);

    let disableComponent: boolean = window.location.href.includes("/terms")

    return {currentUrl, disableComponent}
}


//push each individual category in array and return it for render in blogs slider
export const handleSliderCategories = (blogFormData: UniversalHelperTypes["blogFormDataArray"]): UniversalHelperTypes["blogFormDataCategoriesArray"] => {
    const allCategories: UniversalHelperTypes["blogFormDataCategoriesArray"] = []


    blogFormData.forEach((el: UniversalHelperTypes["blogFormData"]): void => {
        if (el?.categories) el?.categories.forEach((el: UniversalHelperTypes["blogFormDataCategories"]) => allCategories.push(el))
    })

    return allCategories
}


//handle category object to render based on the active category selected via button onClick event in blogs Cards component
export const handleCardsObjectByCategory = (blogFormData: UniversalHelperTypes["blogFormDataArray"], activeCategory: string): UniversalHelperTypes["blogFormData"] => {
    return blogFormData?.find((el: UniversalHelperTypes["blogFormData"]): boolean => el?.frontendSlug === activeCategory)
}


//render blog content aka object by route object property it includes on route redirect extracted from url
export const handleBlogContentByRoute = (blogFormData: UniversalHelperTypes["blogFormDataArray"], location: Location): string => {
    const currentUrl: string[] = location?.pathname.split("/")

    const searchKeyword: string = currentUrl[currentUrl?.length - 1]

    let contentToRender: string[] = []


    blogFormData?.forEach((el: UniversalHelperTypes["blogFormData"]): void => {

        el?.categories?.forEach((item: UniversalHelperTypes["blogFormDataCategories"]): void => {
            const {route, subContent} = item

            if (route === searchKeyword) contentToRender.push(subContent as string)

        })

    })

    return contentToRender[0]
}


//slider manipulation handler for blogs
export const handleBlogSlideChange = (blogFormDataCategories: UniversalHelperTypes["blogFormDataCategoriesArray"], currentStep: number, setCurrentStep: Function, type: string): void | null => {
    const maxStep: number = blogFormDataCategories?.length - 1

    if (type === "previous") {
        if (currentStep === 1) return null
        else setCurrentStep(currentStep - 1)
    } else if (type === "next") {
        if (currentStep === maxStep) return null
        else setCurrentStep(currentStep + 1)
    } else return null
}


//handle outside click for modals to close them
export const useHandleClickOutside = (setModalActive: Function, modalRef: React.MutableRefObject<HTMLDivElement | null>, type?: string, modalActive?: UniversalHelperTypes["modalActiveTypes"]): void => {

    useEffect(() => {
        const handleCloseModal = (event: MouseEvent): void => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                if (type && type === "multiple") {
                    setModalActive({
                        ...modalActive,
                        profile: false,
                        wish: false,
                        cart: false,
                        search: false,
                        sidebar: false
                    });
                }
                setModalActive(false);
            }
        }

        document.addEventListener("mousedown", handleCloseModal);

        return (): void => {
            document.removeEventListener("mousedown", handleCloseModal);
        };
    }, []);
}


//check whether button should be disabled on forms based on fieldError and query state values
export const isButtonDisabled = (fieldError: UniversalHelperTypes["fieldErrorStateTypes"], query: UniversalHelperTypes["queryStateTypes"], newsletterSubscribed?: boolean): boolean => {
    let isAnyFieldErrorTrue: boolean = Object.entries(fieldError)?.some(([key, val]) => val === true)
    let isAnyQueryDataEmpty: boolean = Object.entries(query)?.some(([key, val]) => val === "")
    let formValid: boolean
    if (newsletterSubscribed !== null) formValid = !isAnyFieldErrorTrue && !isAnyQueryDataEmpty && !newsletterSubscribed
    else formValid = !isAnyFieldErrorTrue && !isAnyQueryDataEmpty
    return !formValid
}


//icon handler across components based on the frontendSlug property value
export const handleIcons = (frontendSlug: string, dateFocused?: boolean | null): ReactElement | null => {
    if (frontendSlug === "email") return <Email/>
    else if (frontendSlug === "password" || frontendSlug === "confirmPassword" || frontendSlug === "oldPassword" || frontendSlug === "newPassword" || frontendSlug === "confirmNewPassword") return <Password/>
    else if (frontendSlug === "username") return <User/>
    else if (frontendSlug === "firstName" || frontendSlug === "lastName") return <Signature/>
    else if (frontendSlug === "city") return <City/>
    else if (frontendSlug === "zip") return <Postal/>
    else if (frontendSlug === "address") return <Address/>
    else if (frontendSlug === "creditCard" || frontendSlug === "newCreditCard" || frontendSlug === "newExpireMonth" || frontendSlug === "newExpireYear") return <CreditCard/>
    else if (frontendSlug === "ccv" || frontendSlug === "newCcv") return <Security/>
    else if (frontendSlug === "dob" || (frontendSlug === "dob" && !dateFocused)) return <DatePicker/>
    else if (frontendSlug === "country") return <Globe/>
    else if (frontendSlug === "expireMonth" || frontendSlug === "expireYear") return <Calendar/>
    else if (frontendSlug === "help") return <HelpIcon/>
    else if (frontendSlug === "locations") return <LocationsIcon/>
    else if (frontendSlug === "user") return <UserIcon/>
    else if (frontendSlug === "heart") return <HeartIcon/>
    else if (frontendSlug === "cart") return <CartIcon/>
    else if (frontendSlug === "amex") return <Amex/>
    else if (frontendSlug === "visa") return <Visa/>
    else if (frontendSlug === "master") return <Master/>
    else if (frontendSlug === "diners") return <Diners/>
    else if (frontendSlug === "discover") return <Discover/>
    else if (frontendSlug === "bill") return <Bill/>
    else if (frontendSlug === "newsletter") return <NewsLetter/>
    else if (frontendSlug === "email") return <Email/>
    else if (frontendSlug === "singUp") return <SingUp/>
    else if (frontendSlug === "gender") return <Genders/>
    else if (frontendSlug === "orders") return <Orders/>
    else if (frontendSlug === "delivery") return <Delivery/>
    else if (frontendSlug === "payment") return <Payment/>
    else if (frontendSlug === "return") return <Return/>
    else if (frontendSlug === "other") return <Other/>
    else if (frontendSlug === "search") return <Search/>
    else if (frontendSlug === "cosmetics") return <Cosmetics/>
    else if (frontendSlug === "selfHealing") return <SelfHealing/>
    else if (frontendSlug === "foodSupplements") return <Supplements/>
    else if (frontendSlug === "covid") return <Covid/>
    else if (frontendSlug === "momKids") return <MomKids/>
    else if (frontendSlug === "medicalAids") return <MedicalAids/>
    else if (frontendSlug === "brands") return <Brands/>
    else return null
}


//password icon handler across components based on the user onClick event whether password is text type or password type
export function handlePasswordIconByType(frontendSlug: string, setShowPasswordType: Function, showPasswordType: UniversalHelperTypes["showPasswordStateTypes"]): ReactElement | undefined {
    if (frontendSlug === "password") {
        if (showPasswordType?.password === "password") return <div className="inputs_show-hide-password"
                                                                   onClick={() => setShowPasswordType({
                                                                       ...showPasswordType,
                                                                       password: "text"
                                                                   })}><HidePassword/></div>
        else if (showPasswordType?.password === "text") return <div className="inputs_show-hide-password"
                                                                    onClick={() => setShowPasswordType({
                                                                        ...showPasswordType,
                                                                        password: "password"
                                                                    })}><ShowPassword/></div>
    } else if (frontendSlug === "confirmPassword") {
        if (showPasswordType?.confirmPassword === "password") return <div className="inputs_show-hide-password"
                                                                          onClick={() => setShowPasswordType({
                                                                              ...showPasswordType,
                                                                              confirmPassword: "text"
                                                                          })}><HidePassword/></div>
        else if (showPasswordType?.confirmPassword === "text") return <div className="inputs_show-hide-password"
                                                                           onClick={() => setShowPasswordType({
                                                                               ...showPasswordType,
                                                                               confirmPassword: "password"
                                                                           })}><ShowPassword/></div>
    } else if (frontendSlug === "oldPassword") {
        if (showPasswordType?.oldPassword === "password") return <div className="inputs_show-hide-password"
                                                                      onClick={() => setShowPasswordType({
                                                                          ...showPasswordType,
                                                                          oldPassword: "text"
                                                                      })}><HidePassword/></div>
        else if (showPasswordType?.oldPassword === "text") return <div className="inputs_show-hide-password"
                                                                       onClick={() => setShowPasswordType({
                                                                           ...showPasswordType,
                                                                           oldPassword: "password"
                                                                       })}><ShowPassword/></div>
    } else if (frontendSlug === "newPassword") {
        if (showPasswordType?.newPassword === "password") return <div className="inputs_show-hide-password"
                                                                      onClick={() => setShowPasswordType({
                                                                          ...showPasswordType,
                                                                          newPassword: "text"
                                                                      })}><HidePassword/></div>
        else if (showPasswordType?.newPassword === "text") return <div className="inputs_show-hide-password"
                                                                       onClick={() => setShowPasswordType({
                                                                           ...showPasswordType,
                                                                           newPassword: "password"
                                                                       })}><ShowPassword/></div>
    } else if (frontendSlug === "confirmNewPassword") {
        if (showPasswordType?.confirmNewPassword === "password") return <div className="inputs_show-hide-password"
                                                                             onClick={() => setShowPasswordType({
                                                                                 ...showPasswordType,
                                                                                 confirmNewPassword: "text"
                                                                             })}><HidePassword/></div>
        else if (showPasswordType?.confirmNewPassword === "text") return <div className="inputs_show-hide-password"
                                                                              onClick={() => setShowPasswordType({
                                                                                  ...showPasswordType,
                                                                                  confirmNewPassword: "password"
                                                                              })}><ShowPassword/></div>
    } else return undefined
}


//handle password field types for each password field across components based on the user onClick event
export const handlePasswordFieldsTypes = (frontendSlug: string, type: string, showPasswordType: UniversalHelperTypes["showPasswordStateTypes"]): string => {
    if (frontendSlug === "password") return showPasswordType?.password as string
    else if (frontendSlug === "confirmPassword") return showPasswordType?.confirmPassword as string
    else if (frontendSlug === "oldPassword") return showPasswordType?.oldPassword as string
    else if (frontendSlug === "newPassword") return showPasswordType?.newPassword as string
    else if (frontendSlug === "confirmNewPassword") return showPasswordType?.confirmNewPassword as string
    else return type
}


//handle onChange event and validation for each input field across all component that use input fields with validations

export function handleChangeAndValidation(event: string, frontendSlug: string, query: UniversalHelperTypes["queryStateTypes"], setQuery: Function, fieldError: UniversalHelperTypes["fieldErrorStateTypes"], setFieldError: Function, validation: string, userPassword?: string | null, min?: number | undefined, max?: number | undefined): void | null {
    if (frontendSlug === "email") {
        setQuery({...query, email: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, email: false})
        else setFieldError({...fieldError, email: true})
    } else if (frontendSlug === "username") {
        setQuery({...query, username: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, username: false})
        else setFieldError({...fieldError, username: true})
    } else if (frontendSlug === "password") {
        setQuery({...query, password: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, password: false})
        else setFieldError({...fieldError, password: true})
    } else if (frontendSlug === "confirmPassword") {
        setQuery({...query, confirmPassword: event})
        if (query?.password === event) setFieldError({...fieldError, confirmPassword: false})
        else setFieldError({...fieldError, confirmPassword: true})
    } else if (frontendSlug === "firstName") {
        setQuery({...query, firstName: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, firstName: false})
        else setFieldError({...fieldError, firstName: true})
    } else if (frontendSlug === "lastName") {
        setQuery({...query, lastName: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, lastName: false})
        else setFieldError({...fieldError, lastName: true})
    } else if (frontendSlug === "dob") setQuery({...query, dob: event})
    else if (frontendSlug === "city") {
        setQuery({...query, city: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, city: false})
        else setFieldError({...fieldError, city: true})
    } else if (frontendSlug === "zip") {
        setQuery({...query, zip: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, zip: false})
        else setFieldError({...fieldError, zip: true})
    } else if (frontendSlug === "address") {
        setQuery({...query, address: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, address: false})
        else setFieldError({...fieldError, address: true})
    } else if (frontendSlug === "creditCard") {
        setQuery({...query, creditCard: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, creditCard: false})
        else setFieldError({...fieldError, creditCard: true})
    } else if (frontendSlug === "ccv") {
        setQuery({...query, ccv: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, ccv: false})
        else setFieldError({...fieldError, ccv: true})
    }
    if (frontendSlug === "oldPassword") {
        setQuery({...query, oldPassword: event})
        if (userPassword === event) setFieldError({...fieldError, oldPassword: false})
        else setFieldError({...fieldError, oldPassword: true})
    } else if (frontendSlug === "newPassword") {
        setQuery({...query, newPassword: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, newPassword: false})
        else setFieldError({...fieldError, newPassword: true})
    } else if (frontendSlug === "confirmNewPassword") {
        setQuery({...query, confirmNewPassword: event})
        if (query?.newPassword === event) setFieldError({...fieldError, confirmNewPassword: false})
        else setFieldError({...fieldError, confirmNewPassword: true})
    } else if (frontendSlug === "newCreditCard") {
        setQuery({...query, newCreditCard: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, newCreditCard: false})
        else setFieldError({...fieldError, newCreditCard: true})
    } else if (frontendSlug === "newCcv") {
        setQuery({...query, newCcv: event})
        let regex: RegExp = new RegExp(validation)
        if (regex.test(event)) setFieldError({...fieldError, newCcv: false})
        else setFieldError({...fieldError, newCcv: true})
    } else if (frontendSlug === "newExpireMonth") {
        setQuery({...query, newExpireMonth: event})
        if (min && max && (parseInt(event) >= min && parseInt(event) <= max)) setFieldError({
            ...fieldError,
            newExpireMonth: false
        })
        else setFieldError({...fieldError, newExpireMonth: true})
    } else if (frontendSlug === "newExpireYear") {
        setQuery({...query, newExpireYear: event})
        if (min && max && (parseInt(event) >= min && parseInt(event) <= max)) setFieldError({
            ...fieldError,
            newExpireYear: false
        })
        else setFieldError({...fieldError, newExpireYear: true})
    } else if (frontendSlug === "expireMonth") {
        setQuery({...query, expireMonth: event})
        if (min && max && (parseInt(event) >= min && parseInt(event) <= max)) setFieldError({
            ...fieldError,
            expireMonth: false
        })
        else setFieldError({...fieldError, expireMonth: true})
    } else if (frontendSlug === "expireYear") {
        setQuery({...query, expireYear: event})
        if (min && max && (parseInt(event) >= min && parseInt(event) <= max)) setFieldError({
            ...fieldError,
            expireYear: false
        })
        else setFieldError({...fieldError, expireYear: true})
    } else return null
}


//handle input values for each input field across all component that use input fields with validations
export const handleInputValue = (frontendSlug: string, query: UniversalHelperTypes["queryStateTypes"]): string | undefined => {
    if (frontendSlug === "email") return query?.email
    else if (frontendSlug === "username") return query?.username
    else if (frontendSlug === "password") return query?.password
    else if (frontendSlug === "confirmPassword") return query?.confirmPassword
    else if (frontendSlug === "firstName") return query?.firstName
    else if (frontendSlug === "lastName") return query?.lastName
    else if (frontendSlug === "city") return query?.city
    else if (frontendSlug === "zip") return query?.zip
    else if (frontendSlug === "address") return query?.address
    else if (frontendSlug === "creditCard") return query?.creditCard
    else if (frontendSlug === "ccv") return query?.ccv
    else if (frontendSlug === "dob") return query?.dob
    else if (frontendSlug === "newCreditCard") return query?.newCreditCard
    else if (frontendSlug === "newCcv") return query?.newCcv
    else if (frontendSlug === "newExpireMonth") query?.newExpireMonth
    else if (frontendSlug === "newExpireYear") query?.newExpireYear
    else if (frontendSlug === "oldPassword") return query?.oldPassword
    else if (frontendSlug === "newPassword") return query?.newPassword
    else if (frontendSlug === "confirmNewPassword") return query?.confirmNewPassword
    else if (frontendSlug === "country") return query?.country
    else if (frontendSlug === "expireMonth") return query?.expireMonth
    else if (frontendSlug === "expireYear") return query?.expireYear
    else return undefined
}

//handle error values for each input field across all component that use input fields with validations
export const handleFieldErrors = (frontendSlug: string, error: string, fieldError: UniversalHelperTypes["fieldErrorStateTypes"]): string | null => {
    if (frontendSlug === "email" && fieldError?.email) return error
    else if (frontendSlug === "username" && fieldError?.username) return error
    else if (frontendSlug === "password" && fieldError?.password) return error
    else if (frontendSlug === "gender" && fieldError?.gender) return error
    else if (frontendSlug === "confirmPassword" && fieldError?.confirmPassword) return error
    else if (frontendSlug === "firstName" && fieldError?.firstName) return error
    else if (frontendSlug === "lastName" && fieldError?.lastName) return error
    else if (frontendSlug === "city" && fieldError?.city) return error
    else if (frontendSlug === "zip" && fieldError?.zip) return error
    else if (frontendSlug === "address" && fieldError?.address) return error
    else if (frontendSlug === "creditCard" && fieldError?.creditCard) return error
    else if (frontendSlug === "ccv" && fieldError?.ccv) return error
    else if (frontendSlug === "dob" && fieldError?.dob) return error
    else if (frontendSlug === "oldPassword" && fieldError?.oldPassword) return error
    else if (frontendSlug === "newPassword" && fieldError?.newPassword) return error
    else if (frontendSlug === "confirmNewPassword" && fieldError?.confirmNewPassword) return error
    else if (frontendSlug === "newCreditCard" && fieldError?.newCreditCard) return error
    else if (frontendSlug === "newCcv" && fieldError?.newCcv) return error
    else if (frontendSlug === "newExpireMonth" && fieldError?.newExpireMonth) return error
    else if (frontendSlug === "newExpireYear" && fieldError?.newExpireYear) return error
    else if (frontendSlug === "expireMonth" && fieldError?.expireMonth) return error
    else if (frontendSlug === "expireYear" && fieldError?.expireYear) return error
    else if (frontendSlug === "country" && fieldError?.country) return error
    else return null
}




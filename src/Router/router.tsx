import * as React from "react";

import {CONST} from "../Utils/CONST";

import {createBrowserRouter, Navigate} from "react-router-dom";

import RootLayout from "../Layouts";
import Home from "../Components/Home";
import Terms from "../Components/Footer/Components/Info/Components/Terms";
import AboutUs from "../Components/Footer/Components/Info/Components/AboutUs";
import Registration from "../Components/Registration";
import Login from "../Components/Login";
import Cart from "../Components/Cart";
import PaymentMethods from "../Components/Footer/Components/Info/Components/PaymentMethods";
import ReturnsComplaints from "../Components/Footer/Components/Info/Components/ReturnsComplaints";
import DataPrivacy from "../Components/Footer/Components/Info/Components/DataPrivacy";
import ShippingDelivery from "../Components/Footer/Components/Info/Components/ShippingDelivery";
import PrivacyStatement from "../Components/Footer/Components/Info/Components/PrivacyStatement";
import ContractTermination from "../Components/Footer/Components/Info/Components/ContractTermination";
import BlogNews from "../Components/Footer/Components/Info/Components/BlogNews";
import SubContent from "../Components/Home/Components/Blogs/Components/Content/SubContent";
import Faq from "../Components/Footer/Components/Info/Components/Faq";
import Newsletter from "../Components/Footer/Components/Info/Components/Newsletter";
import Locations from "../Components/Footer/Components/Info/Components/Locations";
import Contact from "../Components/Footer/Components/Info/Components/Contact";
import EditConsent from "../Components/Footer/Components/Info/Components/EditConsent";
import Products from "../Components/Products";
import Product from "../Components/Product";
import Discounts from "../Components/Discounts";
import Brands from "../Components/Footer/Components/Info/Components/Brands";
import ProtectedLogin from "./ProtectedLogin";
import ProtectedCart from "./ProtectedCart";
import RoutingError from "../Pages/RoutingError";
import ErrorBoundary from "../Pages/ErrorBoundary";



//initializing error route and element first to separate it from the RootLayout component
const routes = [
    {
        path: CONST?.routes?.invalidRoute,
        element: <RoutingError/>,
    },
    {
        path: "*",
        element: <Navigate to={CONST?.routes?.invalidRoute} replace/>
    },
    {
        path: CONST?.routes?.root,
        element: <RootLayout/>,
        exact: true,
        children: [
            {
                index: true,
                element: <Home/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.productDynamicRoute,
                element: <Product/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.productsRoute,
                element: <Products/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.brandsRoute,
                element: <Brands/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.blogFormDataDynamicRoute,
                element: <SubContent/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.blogNewsRoute,
                element: <BlogNews/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.dynamicProductRoute,
                element: <Product/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.discountsDynamicRoute,
                element: <Discounts/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.aboutUsRoute,
                element: <AboutUs/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.faqRoute,
                element: <Faq/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.contactRoute,
                element: <Contact/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.newsletterRoute,
                element: <Newsletter/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.locationsRoute,
                element: <Locations/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.termsRoute,
                element: <Terms/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.paymentMethodsRoute,
                element: <PaymentMethods/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.editConsentRoute,
                element: <EditConsent/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.returnsComplaintsRoute,
                element: <ReturnsComplaints/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.dataPrivacyRoute,
                element: <DataPrivacy/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.shippingDeliveryRoute,
                element: <ShippingDelivery/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.privacyStatementRoute,
                element: <PrivacyStatement/>,
                errorElement: <ErrorBoundary/>
            },
            {
                path: CONST?.routes?.contractTerminationRoute,
                element: <ContractTermination/>,
                errorElement: <ErrorBoundary/>
            },
        ],
    },
    {
        path: CONST?.routes?.cartRoute,
        element: (
            <ProtectedCart>
                <Cart/>
            </ProtectedCart>
        ),
        errorElement: <ErrorBoundary/>
    },
    {
        path: CONST?.routes?.registrationRoute,
        element: <Registration/>,
        errorElement: <ErrorBoundary/>
    },
    {
        path: CONST?.routes?.loginRoute,
        element: (
            <ProtectedLogin>
                <Login/>
            </ProtectedLogin>
        ),
        errorElement: <ErrorBoundary/>
    },
]

export const router = createBrowserRouter(routes);
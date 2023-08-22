import {FC, ReactElement} from "react";
import * as React from 'react'

import "../variables.css"

import {RouterProvider} from "react-router-dom";

import {useHandleDeviceDetection} from "./Utils/helpers";

import {router} from "./Router/router";

import {useDispatch} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";

import {useAppSelector} from "./Redux/Store/store";

import Copyright from "./Pages/Copyright";

const App: FC = (): ReactElement => {
    const dispatch: Dispatch = useDispatch()

    const isCopyrightAccepted = useAppSelector((state) => state?.copyright?.copyright)

    useHandleDeviceDetection(dispatch)

    if (!isCopyrightAccepted) return <Copyright/>
    else return <RouterProvider router={router}/>
}

export default App

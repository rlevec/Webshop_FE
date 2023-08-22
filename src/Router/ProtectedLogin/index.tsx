import {FC} from "react";

import { Navigate} from "react-router-dom";

import {useAppSelector} from "../../Redux/Store/store.js";

type Props = {
    children: JSX.Element
}

const ProtectedLogin: FC<Props> = ({children}): JSX.Element => {

    const userEmail = useAppSelector((state) => state?.login?.loginData?.email)

    let isUserLogged: boolean
    if(userEmail === "" || userEmail === undefined) isUserLogged = false
    else isUserLogged = true

    return isUserLogged ? <Navigate to={"/"} replace={true}/> : children
}

export default ProtectedLogin
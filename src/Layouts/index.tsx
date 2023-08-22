import {Outlet} from "react-router-dom";

import Header from "../Components/Header/index.js";
import HeaderMobile from "../Components/HeaderMobile";
import Footer from "../Components/Footer/index.js";

import {FC} from "react";

import {useAppSelector} from "../Redux/Store/store";

const RootLayout: FC = () => {
    const deviceType = useAppSelector((state) => state?.device?.device)

    return (
        <div>
            <header>
                {deviceType !== "desktop" ? <HeaderMobile/> : <Header/>}
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default RootLayout
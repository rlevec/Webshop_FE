import {FC, ReactElement} from "react"

import {StyledHeader} from "./styledHeader";

import Categories from "./Components/Categories";
import LogoSearchModals from "./Components/LogoSearchModals";
const Header: FC = (): ReactElement => {

        return (
            <StyledHeader>
                <div className="header_wrapper">
                    <LogoSearchModals/>
                    <Categories/>
                </div>
            </StyledHeader>
        )
}

export default Header

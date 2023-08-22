import {FC} from "react";

import {StyledFooter} from "./styledFooter";

import Newsletter from "./Components/Newsletter";
import Info from "./Components/Info";
import Locations from "./Components/Locations";

import Doctor from "../../Assets/doctor.svg"

const Footer: FC = () => {

    return (
        <StyledFooter className="styledComponent-Footer">
            <div className="footer_wrapper">
                <Newsletter />
                <Info />
                <Locations />
                <div className="footer_doctor-image-container"><Doctor/></div>
            </div>
        </StyledFooter>
    )
}

export default Footer
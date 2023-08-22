import {FC, ReactElement} from "react";

import {StyledHome} from "./styledHome";

import Promotions from "./Components/Promotions";
import GeneralInfo from "./Components/GeneralInfo";
import Locations from "./Components/Locations";
import ProductsInfo from "./Components/ProductsInfo";
import ProductsCategorized from "./Components/ProductsCategorized";
import PromotionZone from "./Components/PromotionZone";
import Blogs from "./Components/Blogs";

export const Home: FC = (): ReactElement => {

    return (
        <StyledHome className="styledComponent-Home">
            <Promotions/>
            <GeneralInfo/>
            <Locations/>
            <ProductsInfo/>
            <ProductsCategorized/>
            <PromotionZone/>
            <Blogs/>
        </StyledHome>
    )
}

export default Home
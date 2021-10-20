import Header from "../Header/Header";
import Catalog from "../Catalog/Catalog/Catalog";
import Discounts from "../Discounts/Discounts/Discounts";
import Why from "../Why/Why";
import How from "../How/How";
import News from "../News/News/News";
import { mainPage } from "./MainPage.module.scss";
import Instagram from "../Instagram/Instagram/Instagram";
export default function MainPage() {
    return (
        <main className={mainPage}>
            <Header />
            <Catalog />
            <Discounts />
            <Why />
            <How />
            <News />
            <Instagram />
        </main>
    );
}

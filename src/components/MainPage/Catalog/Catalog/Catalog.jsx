import Slider from "../Slider/Slider";
import Flex from "../Flex/Flex";
import s from "./Catalog.module.scss";
import arrayOfCards from "../Data/arrayOfCards";
export default function Catalog() {
    return (
        <section className={s.catalog}>
            <div className={`container ${s.catalogContainer}`}>
                <h2 className={s.heading}>Каталог нашей продукции</h2>
                <Flex data={arrayOfCards} />
                <Slider data={arrayOfCards} />
            </div>
        </section>
    );
}

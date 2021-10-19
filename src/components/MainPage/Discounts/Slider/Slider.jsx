import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "@brainhubeu/react-carousel";
import Card from "../Card/Card";
import s from "./Slider.module.scss";
import { breakpoints, plugins } from "./variables";
export default function Slider({ data }) {
    return (
        <div className={s.slider}>
            <Carousel breakpoints={breakpoints} plugins={plugins}>
                {data.map((card, i) => (
                    <Card data={card} key={`card${i}`} />
                ))}
            </Carousel>
        </div>
    );
}

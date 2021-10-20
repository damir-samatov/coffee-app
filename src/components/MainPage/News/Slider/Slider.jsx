import s from "./Slider.module.scss";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel from "@brainhubeu/react-carousel";
import Card from "../Card/Card";
import arrowL from "../assets/arrowL.svg";
import arrowR from "../assets/arrowR.svg";
import { useRef, useState } from "react";
export default function Slider({ arrayOfNews }) {
    const swiper = useRef(null);
    const [index, setIndex] = useState(0);
    return (
        <div className={s.slider}>
            <div className={s.arrows}>
                {index > 0 && (
                    <button
                        className={s.arrowL}
                        onClick={() => {
                            swiper.current.activeIndex = 3;
                            setIndex((prev) => (prev > 0 ? prev - 1 : prev));
                        }}
                    >
                        <img src={arrowL} alt="" />
                    </button>
                )}

                {index < 3 && (
                    <button
                        className={s.arrowR}
                        onClick={() =>
                            setIndex((prev) => (prev < 3 ? prev + 1 : prev))
                        }
                    >
                        <img src={arrowR} alt="" />
                    </button>
                )}
            </div>
            <Carousel
                plugins={["fastSwipe"]}
                value={index}
                onChange={(value) => setIndex(value)}
            >
                {arrayOfNews.slice(0, 4).map((data) => {
                    return <Card data={data} />;
                })}
            </Carousel>
        </div>
    );
}

import Carousel, { slidesToShowPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useState } from "react";
import Card from "../Card/Card";
import s from "./Slider.module.scss";
export default function Slider({ data }) {
    const dots = Array.from(
        {
            length: 4,
        },
        () => <div className={s.dot} />
    );
    const [index, setIndex] = useState(0);
    const handleChange = (value) => {
        if (value === -1 || value === 4) return;
        setIndex(value);
    };
    return (
        <div className={s.slider}>
            <Carousel
                value={index}
                onChange={handleChange}
                plugins={[
                    "fastSwipe",
                    "centered",
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 2,
                        },
                    },
                ]}
                animationSpeed={500}
                draggable={true}
                offset={100}
            >
                {data.map((card, i) => (
                    <Card data={card} key={`card${i}`} />
                ))}
            </Carousel>
            <Dots
                number={4}
                value={index}
                onChange={handleChange}
                className={s.dots}
                thumbnails={dots}
            />
        </div>
    );
}

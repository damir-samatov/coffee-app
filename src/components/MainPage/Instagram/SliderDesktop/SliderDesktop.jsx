import s from "./SliderDesktop.module.scss";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import phoneImage from "assets/phone.png";
import "@brainhubeu/react-carousel/lib/style.css";
export default function SliderDesktop() {
    return (
        <div className={s.slider}>
            <Carousel
                className={s.carousel}
                offset={0}
                plugins={[
                    "centered",
                    {
                        resolve: slidesToShowPlugin,
                        options: {
                            numberOfSlides: 6,
                        },
                    },
                ]}
            >
                <div className={s.slide}>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                </div>
                <div className={s.slide}>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                </div>
                <div className={s.slide}>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                </div>
                <div className={s.slide}>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                </div>
                <div className={s.slide}>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                </div>
                <div className={s.slide}>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                </div>
                <div className={s.slide}>
                    <div className={s.image}></div>
                    <div className={s.image}></div>
                </div>
            </Carousel>
            <div className={s.phones}>
                <div className={s.phone1}>
                    <img src={phoneImage} alt="phone" />
                </div>
                <div className={s.phone2}>
                    <img src={phoneImage} alt="phone" />
                </div>
            </div>
        </div>
    );
}

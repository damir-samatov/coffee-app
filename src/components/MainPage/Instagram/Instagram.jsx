import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import s from "./Instagram.module.scss";
import instagramIcon from "assets/instagram_icon.svg";
import phoneImage from "assets/phone.png";
export default function Instagram() {
    return (
        <section className={s.instagram}>
            <div className={`${s.instagramContainer} container`}>
                <div className={s.flexHeading}>
                    <h2 className={s.heading}>Мы в Instagram</h2>
                    <div className={s.instagramIcon}>
                        <img src={instagramIcon} alt="instagram" />
                    </div>
                </div>
            </div>
            <div className={s.slider}>
                <Carousel
                    className={s.carousel}
                    offset={20}
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
        </section>
    );
}

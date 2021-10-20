import s from "./Instagram.module.scss";
import instagramIcon from "assets/instagram_icon.svg";
import SliderDesktop from "../SliderDesktop/SliderDesktop";
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
            <SliderDesktop />
        </section>
    );
}

import { useState } from "react";
import logoIcon from "../../../assets/logo.svg";
import busketIcon from "../../../assets/busket_icon.svg";
import personIcon from "../../../assets/person_icon.svg";
import phoneIcon from "../../../assets/phone_icon.svg";
import instagramIcon from "../../../assets/instagram_icon.svg";
import s from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";
export default function BurgerMenu({ setBurgerMenuShown }) {
    const [burgerClassName, setBurgerClassName] = useState(s.burgerMenu);
    const handleBurgerClose = () => {
        setBurgerClassName(`${s.burgerMenu} ${s.close}`);
        setTimeout(() => {
            setBurgerMenuShown(false);
        }, 250);
    };
    return (
        <div className={burgerClassName}>
            <div className={s.header}>
                <div className={s.logo}>
                    <img src={logoIcon} alt="logo" />
                </div>
                <button
                    className={s.button}
                    onClick={handleBurgerClose}
                ></button>
            </div>
            <div className={s.links}>
                <Link className={s.link} to="/" onClick={handleBurgerClose}>
                    Каталог товаров
                </Link>
                <Link className={s.link} to="/" onClick={handleBurgerClose}>
                    Блог
                </Link>
                <Link
                    className={s.link}
                    to="/contacts"
                    onClick={handleBurgerClose}
                >
                    Контакты
                </Link>
                <div className={s.iconLinks}>
                    <a className={s.iconLink} href="#">
                        <img src={busketIcon} alt="busket icon" />
                    </a>
                    <a className={s.iconLink} href="#">
                        <img src={personIcon} alt="person icon" />
                    </a>
                </div>
            </div>

            <div className={s.socialLinks}>
                <a className={s.socialLinkText} href="#">
                    Import@kldrefine.com
                </a>
                <div className={s.socialLinksContainer}>
                    <a className={s.socialLink} href="#">
                        <img src={phoneIcon} alt="phone icon" />
                    </a>
                    <a className={s.socialLink} href="#">
                        <img src={instagramIcon} alt="instagram icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

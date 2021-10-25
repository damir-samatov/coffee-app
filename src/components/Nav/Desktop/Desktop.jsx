import logoIcon from "../../../assets/logo.svg";
import searchIcon from "../../../assets/search_icon.svg";
import busketIcon from "../../../assets/busket_icon.svg";
import personIcon from "../../../assets/person_icon.svg";
import { useState } from "react";
import SearchDesktop from "../SearchDesktop/SearchDesktop";
import s from "./Desktop.module.scss";
import { Link } from "react-router-dom";
export default function Desktop() {
    const [searchInputShown, setSearchInputShown] = useState(false);
    const handleInputClose = () => {
        if (searchInputShown) return;
        setSearchInputShown(true);
    };
    const inputLostFocus = (e) => {
        if ((e.target.id = "SearchInputDesktop")) {
            setSearchInputShown(false);
        }
    };
    return (
        <nav className={s.nav}>
            <div className={`${s.navContainer} container`}>
                <div className={s.logo}>
                    <img src={logoIcon} alt="logo" />
                </div>
                <div className={s.textLinks}>
                    <Link className={s.textLink} to="/">
                        Каталог товаров
                    </Link>
                    <Link className={s.textLink} to="/blog">
                        Блог
                    </Link>
                    <Link className={s.textLink} to="/contacts">
                        Контакты
                    </Link>
                    {searchInputShown && (
                        <SearchDesktop inputLostFocus={inputLostFocus} />
                    )}
                </div>
                <div className={s.iconLinks}>
                    <button
                        className={`${s.iconLink} ${s.search}`}
                        onClick={handleInputClose}
                    >
                        <img src={searchIcon} alt="search icon" />
                    </button>
                    <a className={s.iconLink} href="#">
                        <img src={busketIcon} alt="busket icon" />
                    </a>
                    <a className={s.iconLink} href="#">
                        <img src={personIcon} alt="person icon" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

import { useState } from "react";
import logoIcon from "../../../assets/logo.svg";
import searchIcon from "../../../assets/search_icon.svg";
import busketIcon from "../../../assets/busket_icon.svg";
import personIcon from "../../../assets/person_icon.svg";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchMobile from "../SearchMobile/SearchMobile";
import s from "./Mobile.module.scss";
export default function NavMobile() {
    const [burgerMenuShown, setBurgerMenuShown] = useState(false);
    const [searchInputShown, setSearchInputShown] = useState(false);
    return (
        <nav className={s.nav}>
            <button
                className={s.button}
                onClick={() => setBurgerMenuShown(true)}
            >
                <span className={s.line}></span>
                <span className={s.line}></span>
                <span className={s.line}></span>
            </button>
            <div className={s.logo}>
                <img src={logoIcon} alt="logo" />
            </div>
            <div className={s.iconLinks}>
                <button className={s.iconLink} href="#">
                    <img
                        src={searchIcon}
                        alt=""
                        onClick={() => setSearchInputShown(true)}
                    />
                </button>
                <a className={s.iconLink} href="#">
                    <img src={busketIcon} alt="busket icon" />
                </a>
                <a className={s.iconLink} href="#">
                    <img src={personIcon} alt="person icon" />
                </a>
            </div>
            {searchInputShown && (
                <SearchMobile setSearchInputShown={setSearchInputShown} />
            )}
            {burgerMenuShown && (
                <BurgerMenu setBurgerMenuShown={setBurgerMenuShown} />
            )}
        </nav>
    );
}

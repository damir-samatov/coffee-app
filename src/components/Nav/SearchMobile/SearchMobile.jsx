import { useRef, useEffect, useState } from "react";
import search_icon from "../../../assets/search_icon.svg";
import s from "./SearchMobile.module.scss";
export default function SearchMobile({ setSearchInputShown }) {
    const [searchClassName, setSearchClassName] = useState(s.searchMobile);
    const inputRef = useRef(null);
    const handleInputClose = () => {
        setSearchClassName(`${s.searchMobile} ${s.close}`);
        setTimeout(() => {
            setSearchInputShown(false);
        }, 250);
    };
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className={searchClassName}>
            <div className={s.inputArea}>
                <img
                    className={s.searchIcon}
                    src={search_icon}
                    alt="saerch icon"
                />
                <input className={s.input} type="text" ref={inputRef} />
                <button className={s.buttonClose} onClick={handleInputClose}>
                    Отменить
                </button>
            </div>
            <div className={s.items}>
                <div className={s.item}>
                    <a href="#">Lorem ipsum dolor sit amet. </a>
                </div>
                <div className={s.item}>
                    <a href="#">Lorem ipsum dolor sit amet. </a>
                </div>
                <div className={s.item}>
                    <a href="#">Lorem ipsum dolor sit amet. </a>
                </div>
                <div className={s.item}>
                    <a href="#">Lorem ipsum dolor sit amet. </a>
                </div>
            </div>
        </div>
    );
}

import { useEffect, useRef } from "react";
import s from "./SearchDesktop.module.scss";
export default function SearchDesktop({ inputLostFocus }) {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
    return (
        <div className={s.searchDesktop}>
            <input
                className={s.input}
                id="SearchDesktop"
                type="search"
                results="5"
                placeholder="search..."
                ref={inputRef}
                onBlur={(e) => inputLostFocus(e)}
            />
        </div>
    );
}

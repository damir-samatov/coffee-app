import { useState } from "react";
import s from "./Tutorials.module.scss";
import icons from "./icons";
export default function Tutorials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const iconClickHandler = (i) => {
        setActiveIndex(i);
    };
    return (
        <div className={s.tutorials}>
            <h4 className={s.heading}>Приготовление кофе разными способами</h4>
            <div className={s.icons}>
                {icons.map((item, i) => {
                    return (
                        <div
                            key={`${item.name}_${i}`}
                            className={
                                i === activeIndex
                                    ? `${s.icon} ${s.active}`
                                    : s.icon
                            }
                            onClick={() => {
                                i !== activeIndex && iconClickHandler(i);
                            }}
                        >
                            <h6 className={s.name}>{item.name}</h6>
                            <div className={s.image}>{item.icon}</div>
                        </div>
                    );
                })}
            </div>
            <div className={s.info}>
                <h4 className={s.heading}>{icons[activeIndex].subSection}</h4>
                <p className={s.paragraph}>{icons[activeIndex].text}</p>
            </div>
        </div>
    );
}

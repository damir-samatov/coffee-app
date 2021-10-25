import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import s from "./BlogPage.module.scss";
import icons from "./icons";
export default function BlogPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log("general render");
    const iconClickHandler = (i) => {
        setActiveIndex(i);
    };
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <section className={s.blog}>
            <div className={`${s.container} container`}>
                <h5 className={s.history}>
                    Главная <span className={s.dot}> &middot; </span> Блог
                </h5>
                <div className={s.buttons}>
                    <button className={s.button}>Обучение</button>
                    <button className={s.button}>Новости</button>
                    <button className={s.button}>Частые вопросы</button>
                </div>
                <div className={s.main}>
                    <div className={s.makingCoffee}>
                        <h4 className={s.heading}>
                            Приготовление кофе разными способами
                        </h4>
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
                                        onClick={() => iconClickHandler(i)}
                                    >
                                        <h6 className={s.name}>{item.name}</h6>
                                        <div className={s.image}>
                                            {item.icon}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={s.main}>
                            <h4 className={s.heading}>
                                {icons[activeIndex].subSection}
                            </h4>
                            <p className={s.paragraph}>
                                {icons[activeIndex].text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

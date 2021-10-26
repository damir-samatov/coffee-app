import { useEffect, useState } from "react";
import s from "./BlogPage.module.scss";
import Tutorials from "../Tutorials/Tutorials";
export default function BlogPage() {
    const [activeSubpage, setActiveSubpage] = useState(0);
    const changeSubpage = (i) => {
        activeSubpage !== i && setActiveSubpage(i);
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
                    <button
                        className={
                            activeSubpage !== 0
                                ? s.button
                                : `${s.button} ${s.disabled}`
                        }
                        onClick={() => changeSubpage(0)}
                    >
                        Обучение
                    </button>
                    <button
                        className={
                            activeSubpage !== 1
                                ? s.button
                                : `${s.button} ${s.disabled}`
                        }
                        onClick={() => changeSubpage(1)}
                    >
                        Новости
                    </button>
                    <button
                        className={
                            activeSubpage !== 2
                                ? s.button
                                : `${s.button} ${s.disabled}`
                        }
                        onClick={() => changeSubpage(2)}
                    >
                        Частые вопросы
                    </button>
                </div>
                <div className={s.main}>
                    {activeSubpage === 0 && <Tutorials />}
                    {activeSubpage === 1 && "NEWS"}
                    {activeSubpage === 2 && "QUESTIONS"}
                </div>
            </div>
        </section>
    );
}

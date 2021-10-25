import { useEffect } from "react";
import s from "./BlogPage.module.scss";
export default function BlogPage() {
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
            </div>
        </section>
    );
}

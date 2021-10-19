import coffeeCup from "assets/coffee_cup.png";
import coffeeBeans from "assets/coffee_beans.png";
import s from "./Header.module.scss";
export default function Header() {
    return (
        <section className={s.header}>
            <div className={`${s.headerContainer} container`}>
                <div className={s.beans}>
                    <img src={coffeeBeans} alt="coffee beans" />
                </div>
                <div className={s.cup}>
                    <img src={coffeeCup} alt="coffee cup" />
                </div>
                <h1 className={s.heading}>Свежеобжаренный кофе</h1>
                <p className={s.paragraph}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur voluptate debitis nesciunt, repellendus at culpa
                </p>
                <p className={s.paragraph}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur voluptate debitis nesciunt, repellendus at culpa
                </p>
                <button className={s.button}>Посмотреть каталог</button>
            </div>
        </section>
    );
}

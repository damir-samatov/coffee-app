import s from "./Footer.module.scss";
import cupImg from "assets/cup.png";
import beansImg from "assets/beans.png";
import logoImg from "assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
export default function Footer() {
    const route = useLocation().pathname;
    const className =
        route === "/contacts" ? `${s.footer} ${s.footer2}` : s.footer;
    return (
        <section className={className}>
            <div className={`${s.container} container`}>
                <div className={s.main}>
                    <div className={s.subscription}>
                        <h2 className={s.heading}>
                            Подписка на новости и рассылку
                        </h2>
                        <p className={s.paragraph}>
                            Подпишитесь на нашу рассылку прямо сейчас и будьте в
                            курсе новых поставок, скидок и эксклюзивных
                            предложений.
                        </p>
                        <div className={s.input}>
                            <input type="text" placeholder="Ваш Email" />
                            <button className={s.button}>Подписаться</button>
                        </div>
                        <p className={s.agreement}>
                            Нажимая на кнопку “Подписаться”, вы принимаете
                            правила{" "}
                            <a className={s.agreementLink} href="#">
                                пользовательского соглашения
                            </a>
                        </p>
                    </div>
                    <div className={s.images}>
                        <div className={s.beans}>
                            <img src={beansImg} alt="beans" />
                        </div>
                        <div className={s.cup}>
                            <img src={cupImg} alt="cup" />
                        </div>
                    </div>
                </div>
                <div className={s.nav}>
                    <div className={s.logo}>
                        <img src={logoImg} alt="logo" />
                    </div>
                    <div className={s.links}>
                        <Link className={s.link} to="/">
                            Каталог товаров
                        </Link>
                        <Link className={s.link} to="/">
                            Блог
                        </Link>
                        <Link className={s.link} to="/contacts">
                            Контакты
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

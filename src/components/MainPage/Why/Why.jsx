import s from "./Why.module.scss";
import beansImg from "./assets/coffee_beans.png";
import cupImg from "./assets/coffee_cup.png";
import cupIcon from "./assets/cup_icon.svg";
import priceIcon from "./assets/price_icon.svg";
import personIcon from "./assets/person_icon.svg";
export default function Why() {
    return (
        <section className={s.why}>
            <div className={`${s.whyContainer} container`}>
                <h2 className={s.heading}>
                    Почему стоит работать <br /> именно с нами?
                </h2>
                <div className={s.flex}>
                    <div className={s.images}>
                        <div className={s.beansImage}>
                            <img src={beansImg} alt="beans" />
                        </div>
                        <div className={s.cupImage}>
                            <img src={cupImg} alt="cup" />
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.item}>
                            <div className={s.itemIcon}>
                                <img src={cupIcon} alt="cup" />
                            </div>
                            <div className={s.itemText}>
                                <h3 className={s.itemHeading}>
                                    Всегда свежая обжарка
                                </h3>
                                <p className={s.itemParagraph}>
                                    Подбор степени обжарки под каждый сорт кофе.
                                    Всегда свежая обжарка
                                </p>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemIcon}>
                                <img src={priceIcon} alt="price" />
                            </div>
                            <div className={s.itemText}>
                                <h3 className={s.itemHeading}>
                                    Лучшие цены на продукцию
                                </h3>
                                <p className={s.itemParagraph}>
                                    Благодаря крупным объемам производства мы
                                    даем лучшие цены на нашу продукцию
                                </p>
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.itemIcon}>
                                <img src={personIcon} alt="person" />
                            </div>
                            <div className={s.itemText}>
                                <h3 className={s.itemHeading}>
                                    Консультации 24/7
                                </h3>
                                <p className={s.itemParagraph}>
                                    Наши специалисты готовы всегда помочь и
                                    подсказать вам с выбором кофе или другой
                                    продукции.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

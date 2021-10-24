import { useState, useEffect } from "react";
import s from "./ContactsPage.module.scss";
export default function ContactsPage() {
    const [state, setState] = useState(0);
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);
    const contacts = state === 0 ? `${s.button} ${s.disabled}` : s.button;
    const shops = state === 1 ? `${s.button} ${s.disabled}` : s.button;
    return (
        <section className={s.blog}>
            <div className={`${s.container} container`}>
                <h5 className={s.history}>
                    Главная <span className={s.dot}> &middot; </span> Контакты
                </h5>
                <div className={s.buttons}>
                    <button
                        className={contacts}
                        disabled={state === 0}
                        onClick={() => setState(0)}
                    >
                        Контакты
                    </button>
                    <button
                        className={shops}
                        disabled={state === 1}
                        onClick={() => setState(1)}
                    >
                        Магазины
                    </button>
                </div>
                <div className={s.main}>
                    <div className={s.information}>
                        {state === 0 && (
                            <>
                                <div className={s.item}>
                                    <h3 className={s.heading}>
                                        Связаться с нами:
                                    </h3>
                                    <p className={s.paragraph}>
                                        +7 (401) 237 53 43
                                    </p>
                                    <p className={s.paragraph}>
                                        Import@kldrefine.com
                                    </p>
                                </div>
                                <div className={s.item}>
                                    <h3 className={s.heading}>
                                        Юридический адрес:
                                    </h3>
                                    <p className={s.paragraph}>
                                        Российская, Федерация, 238310,
                                        Калининградская область, Гурьевский
                                        район, поселок Васильково, улица
                                        Шатурская, дом 4А
                                    </p>
                                </div>
                                <div className={s.item}>
                                    <h3 className={s.heading}>Адрес склада:</h3>
                                    <p className={s.paragraph}>
                                        Московская область, Балашиха, Западная
                                        промзона, Шоссе энтузиастов 1
                                    </p>
                                </div>
                            </>
                        )}
                        {state === 1 && (
                            <>
                                <div className={s.item}>
                                    <h3 className={s.heading}>
                                        Наши магазины г. Санкт-Петербург
                                    </h3>
                                    <p className={s.paragraph}>Гороховая, 53</p>
                                    <p className={s.paragraph}>
                                        Московский, 53
                                    </p>
                                </div>
                                <div className={s.item}>
                                    <h3 className={s.heading}>
                                        Наши магазины Калининградская обл.
                                    </h3>
                                    <p className={s.paragraph}>
                                        Черняховск, Пионерская 1
                                    </p>
                                    <p className={s.paragraph}>
                                        Ульяны-Громовой 15
                                    </p>
                                    <p className={s.paragraph}>
                                        Советский проспект 6а
                                    </p>
                                    <p className={s.paragraph}>
                                        Гурьевск, Каштановая 1г
                                    </p>
                                    <p className={s.paragraph}>
                                        Черняховского 15
                                    </p>
                                    <p className={s.paragraph}>Панина 2а</p>
                                    <p className={s.paragraph}>Ленинский 8Б</p>
                                    <p className={s.paragraph}>Аксакова 133</p>
                                    <p className={s.paragraph}>
                                        Липовая Аллея 2
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                    <div className={s.map}>
                        <iframe
                            className={s.iframe}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d147512.34638816933!2d20.324445981629722!3d54.711727095407596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e33d8d4b7c21a9%3A0x5050960016126ed3!2z0JrQsNC70LjQvdC40L3Qs9GA0LDQtCwg0JrQsNC70LjQvdC40L3Qs9GA0LDQtNGB0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2s!4v1634923203998!5m2!1sru!2s"
                            loading="lazy"
                            allowFullScreen={false}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

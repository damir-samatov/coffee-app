import s from "./Discounts.module.scss";
import Slider from "../Slider/Slider";
import arrayOfCards from "../Data/arrayOfCards";
import Grid from "../Grid/Grid";
import { useState } from "react";
export default function Discounts() {
    const [openAll, setOpenAll] = useState(false);
    return (
        <section className={s.discounts}>
            <div className={`container ${s.discountsContainer}`}>
                <h2 className={s.heading}>Товары со скидкой</h2>
                <p className={s.paragraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maiores modi quaerat, delectus unde quas dignissimos
                    laudantium iusto repellat corrupti doloremque!
                </p>
                {openAll ? (
                    <>
                        <button
                            className={s.buttonAll}
                            onClick={() => setOpenAll(false)}
                        >
                            Скрыть
                        </button>
                        <Grid data={arrayOfCards} />
                        <button
                            className={s.buttonAll}
                            onClick={() => setOpenAll(false)}
                        >
                            Скрыть
                        </button>
                    </>
                ) : (
                    <>
                        <Slider data={arrayOfCards} />
                        <button
                            className={s.buttonAll}
                            onClick={() => setOpenAll(true)}
                        >
                            Смотреть все
                        </button>
                    </>
                )}
            </div>
        </section>
    );
}

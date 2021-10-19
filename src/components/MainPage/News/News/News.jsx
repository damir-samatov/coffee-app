import s from "./News.module.scss";
import Card from "../Card/Card";
import Slider from "../Slider/Slider";
import { useState } from "react";
import arrayOfNews from "../Data/arrayOfNews";
export default function News() {
    const [showAll, setShowAll] = useState(false);
    return (
        <section className={s.news}>
            <div className={`${s.newsContainer} container`}>
                <div className={s.flex}>
                    <h2 className={s.heading}>Новости компании</h2>
                    <button
                        className={s.button}
                        onClick={() => setShowAll((prev) => !prev)}
                    >
                        {showAll ? "Cкрыть" : "Читать все"}
                    </button>
                </div>
                {showAll ? (
                    <>
                        <div className={s.grid}>
                            {arrayOfNews.map((data) => {
                                return <Card data={data} />;
                            })}
                        </div>
                    </>
                ) : (
                    <>
                        <div className={s.grid}>
                            {arrayOfNews.slice(0, 4).map((data) => {
                                return <Card data={data} />;
                            })}
                        </div>
                        <Slider arrayOfNews={arrayOfNews} />
                    </>
                )}
            </div>
        </section>
    );
}

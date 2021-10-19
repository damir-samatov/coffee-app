import s from "./Card.module.scss";
export default function Card({ data }) {
    const text =
        data.text.length > 250 ? `${data.text.slice(0, 250)}...` : data.text;
    return (
        <div className={s.card}>
            <div className={s.image}>
                <img src={data.image} alt="news" />
            </div>
            <div className={s.info}>
                <h3 className={s.title}>{data.title}</h3>
                <p className={s.paragraph}>{text}</p>
                <button className={s.button}>Подробнее &#8594;</button>
            </div>
        </div>
    );
}

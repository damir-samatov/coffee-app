import s from "./Card.module.scss";
export default function Card({ data }) {
    return (
        <div className={s.card}>
            <div className={s.image}>
                <img src={data.image} alt="item" />
            </div>
            <h3 className={s.name}>{data.text}</h3>
            <button className={s.button}>Купить</button>
        </div>
    );
}

import Card from "../Card/Card";
import s from "./Grid.module.scss";
export default function Grid({ data }) {
    return (
        <div className={s.grid}>
            {data.map((card, i) => (
                <Card data={card} key={`card${i}`} />
            ))}
        </div>
    );
}

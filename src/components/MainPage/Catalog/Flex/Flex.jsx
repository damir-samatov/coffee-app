import Card from "../Card/Card";
import s from "./Flex.module.scss";
export default function Flex({ data }) {
    return (
        <div className={s.flex}>
            {data.map((card, i) => (
                <Card data={card} key={`card${i}`} />
            ))}
        </div>
    );
}

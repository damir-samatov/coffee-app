import s from "./Card.module.scss";
import img from "../../../../assets/discount_item.png";
import starGoldIcon from "./assets/star_gold.svg";
import starGreyIcon from "./assets/star_grey.svg";
export default function Card({ data }) {
    const starsArr = [0, 0, 0, 0, 0];
    starsArr.fill(1, 0, data.starsNum);
    return (
        <div className={s.card}>
            <div className={s.badge}>
                <h3>%</h3>
            </div>
            <select className={s.select} name="" id="">
                <option className={s.option} value="250">
                    250
                </option>
                <option className={s.option} value="500">
                    500
                </option>
                <option className={s.option} value="750">
                    750
                </option>
                <option className={s.option} value="1000">
                    1000
                </option>
            </select>
            <p className={s.sales}>Скидки</p>
            <div className={s.content}>
                <div className={s.image}>
                    <img src={img} alt="item" />
                </div>
                <div className={s.details}>
                    <div className={s.stars}>
                        {starsArr.map((star) => {
                            if (star === 1)
                                return (
                                    <img
                                        className={s.star}
                                        src={starGoldIcon}
                                        alt="gold star"
                                    />
                                );
                            return (
                                <img
                                    className={s.star}
                                    src={starGreyIcon}
                                    alt="grey star"
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <h3 className={s.title}>{data.name}</h3>
            <p className={s.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className={s.buy}>
                <h3 className={s.price}>250 P</h3>
                <button className={s.button}>В корзину</button>
            </div>
        </div>
    );
}

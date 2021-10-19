import arrowLeftIcon from "./assets/arrow_left.svg";
import arrowRightIcon from "./assets/arrow_right.svg";
import arrowLeftDisabledIcon from "./assets/arrow_left_disabled.svg";
import arrowRightDisabledIcon from "./assets/arrow_right_disabled.svg";
import s from "./Slider.module.scss";
import {
    slidesToShowPlugin,
    slidesToScrollPlugin,
    arrowsPlugin,
} from "@brainhubeu/react-carousel";
const arrowLeft = (
    <button className={s.arrowLeft}>
        <img src={arrowLeftIcon} alt="left arrow" />
    </button>
);
const arrowLeftDisabled = (
    <button className={s.arrowLeft}>
        <img src={arrowLeftDisabledIcon} alt="left arrow" />
    </button>
);
const arrowRight = (
    <button className={s.arrowRight}>
        <img src={arrowRightIcon} alt="right arrow" />
    </button>
);
const arrowRightDisabled = (
    <button className={s.arrowRight}>
        <img src={arrowRightDisabledIcon} alt="right arrow" />
    </button>
);
const breakpoints = {
    768: {
        plugins: [
            "fastSwipe",
            {
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 1,
                },
            },
            {
                resolve: slidesToScrollPlugin,
                options: {
                    numberOfSlides: 1,
                },
            },
        ],
    },
    1100: {
        plugins: [
            "fastSwipe",
            {
                resolve: arrowsPlugin,
                options: {
                    arrowLeft: arrowLeft,
                    arrowLeftDisabled: arrowLeftDisabled,
                    arrowRight: arrowRight,
                    arrowRightDisabled: arrowRightDisabled,
                    addArrowClickHandler: true,
                },
            },
            {
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 2,
                },
            },
            {
                resolve: slidesToScrollPlugin,
                options: {
                    numberOfSlides: 2,
                },
            },
        ],
    },
};
const plugins = [
    "fastSwipe",
    {
        resolve: arrowsPlugin,
        options: {
            arrowLeft: arrowLeft,
            arrowLeftDisabled: arrowLeftDisabled,
            arrowRight: arrowRight,
            arrowRightDisabled: arrowRightDisabled,
            addArrowClickHandler: true,
        },
    },
    {
        resolve: slidesToShowPlugin,
        options: {
            numberOfSlides: 3,
        },
    },
    {
        resolve: slidesToScrollPlugin,
        options: {
            numberOfSlides: 3,
        },
    },
];
export { breakpoints, plugins };

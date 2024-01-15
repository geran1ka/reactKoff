import classNames from "classnames";
import s from "./CardItem.module.scss";
import { SVG } from "../../UI/SVG/SVG";

export const CardItem = ({ data }) => (
  <li>
    <article className={s.card}>
      <a href={`/product/${data.id}`} className={classNames(s.link, s.linkImg)}>
        <img src={`https://koff-api.vercel.app/${data.images[0]}`} alt={data.name} className={s.img}></img>
      </a>

      <div className={s.info}>
        <h3 className={s.title}>
          <a href="/product/567" className={s.link}>
            {data.name}
          </a>
        </h3>

        <p className={s.price}>{data.price}₽</p>
      </div>

      <button className={s.btn}>В корзину</button>

      <button className={s.favorite} aria-label="Добавить в избранное">
        <SVG iconName="favoriteIcon" className={s.svg} />
        {/* <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z"
            fill="currentColor"
            stroke="#1C1C1C"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
      </button>
    </article>
  </li>
);

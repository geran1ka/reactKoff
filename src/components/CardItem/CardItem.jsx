import classNames from "classnames";
import s from "./CardItem.module.scss";
import { SVG } from "../../UI/SVG/SVG";
import { URL_API } from "../../const/const";
import { Link } from "react-router-dom";
import { ImgLoad } from "../../UI/ImgLoad/ImgLoad";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { AddCartButton } from "../AddPCartButton/AddCartButton";

export const CardItem = ({ name, images: [image], price, id }) => (
  <article className={s.card}>
    <Link to={`/product/${id}`} className={classNames(s.link, s.linkImg)}>
      <ImgLoad src={`${URL_API}${image}`} name={name} />
    </Link>

    <div className={s.info}>
      <h3 className={s.title}>
        <Link to={`/product/${id}`} className={s.link}>
          {name}
        </Link>
      </h3>

      <p className={s.price}>{price.toLocaleString()}&nbsp;₽</p>
    </div>

    <AddCartButton className={s.btn} id={id} />
    <FavoriteButton className={[s.favorite, s.svg]} id={id} />
  </article>
);

import { declOfNum } from "../../helpers/declOfNum";
import s from "./CartPlace.module.scss";

export const CartPlace = ({ totalPrice, totalCount }) => {
  console.log();

  return (
    <div className={s.place}>
      <h3 className={s.subtitle}>Оформление</h3>
      <div className={s.placeInfo}>
        <p className={s.placePount}>
          {totalCount} {declOfNum(totalCount, ["товар", "товара", "товаров"])} на сумму:
        </p>
        <p className={s.placePrice}>{totalPrice.toLocaleString()}&nbsp;₽</p>
      </div>
      <p className={s.placeDelivery}>Доставка 0&nbsp;₽</p>
      <button className={s.placeBtn} type="submit" form="orderForm">
        Оформить заказ
      </button>
    </div>
  );
};

import s from "./CartPlace.module.scss";

export const CartPlace = () => {
  console.log();

  return (
    <div className={s.place}>
      <h3 className={s.subtitle}>Оформление</h3>
      <div className={s.placeInfo}>
        <p className={s.placePount}>4 товара на сумму:</p>
        <p className={s.placePrice}>{"20000".toLocaleString()}&nbsp;₽</p>
      </div>
      <p className={s.placeDelivery}>Доставка 0&nbsp;₽</p>
      <button className={s.placeBtn} type="submit" form="order">
        Оформить заказ
      </button>
    </div>
  );
};

import s from "./CartProducts.module.scss";

export const CartProducts = () => {
  console.log();

  return (
    <ul className={s.products}>
      <li className={s.product} key={1}>
        <img className={s.img} src="https://koff-api.vercel.app/img//1hb1kuhbs8qjnl6k.jpg" alt={`Диван`} />
        <h3 className={s.titlePproduct}>Кресло с подлокотниками</h3>
        <p className={s.price}>{"5000".toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>арт. 84348945757</p>
        <div className={s.productControl}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>1</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
    </ul>
  );
};

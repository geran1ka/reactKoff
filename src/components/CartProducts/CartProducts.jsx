import { useDispatch } from "react-redux";
import s from "./CartProducts.module.scss";
import { URL_API } from "../../const/const";

export const CartProducts = ({ products }) => {
  console.log("products: ", products);

  return (
    <ul className={s.products}>
      {products.map(({ images: [image], name, price, id, article, quantity }) => (
        <li className={s.product} key={id}>
          <img className={s.img} src={`${URL_API}${image}`} alt={name} />
          <h3 className={s.titlePproduct}>{name}</h3>
          <p className={s.price}>{price.toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. {article}</p>
          <div className={s.productControl}>
            <button className={s.productBtn}>-</button>
            <p className={s.productCount}>{quantity}</p>
            <button className={s.productBtn}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

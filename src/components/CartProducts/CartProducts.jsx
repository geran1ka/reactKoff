import { useDispatch } from "react-redux";
import s from "./CartProducts.module.scss";
import { URL_API } from "../../const/const";
import { removeProductFromCart, updateProductInCart } from "../../store/cart/cart.slice";

export const CartProducts = ({ products }) => {
  const dispatch = useDispatch();

  const handleMinus = (id, quantity) => {
    if (quantity > 1) {
      dispatch(
        updateProductInCart({
          productId: id,
          quantity: quantity - 1,
        }),
      );
    } else {
      dispatch(removeProductFromCart(id));
    }
  };

  const handlePluse = (id, quantity) => {
    dispatch(
      updateProductInCart({
        productId: id,
        quantity: quantity + 1,
      }),
    );
  };

  return (
    <ul className={s.products}>
      {products.map(({ images: [image], name, price, id, article, quantity }) => (
        <li className={s.product} key={id}>
          <img className={s.img} src={`${URL_API}${image}`} alt={name} />
          <h3 className={s.titlePproduct}>{name}</h3>
          <p className={s.price}>{price.toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. {article}</p>
          <div className={s.productControl}>
            <button className={s.productBtn} onClick={() => handleMinus(id, quantity)}>
              -
            </button>
            <p className={s.productCount}>{quantity}</p>
            <button className={s.productBtn} onClick={() => handlePluse(id, quantity)}>
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

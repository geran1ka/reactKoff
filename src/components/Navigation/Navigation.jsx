import { Link } from "react-router-dom";
import { SVG } from "../../UI/SVG/SVG";
import s from "./Navigation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCart } from "../../store/cart/cart.slice";

export const Navigation = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.cart.products);
  console.log("product: ", product);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <nav className={s.navigation}>
      <Link className={s.link} to="/favorite" aria-label="Перейти в Избранное">
        <span className={s.text}>Избранное</span>
        <SVG iconName="favoriteIcon" className={s.svg} />
        <span></span>
      </Link>
      <Link className={s.link} to="/cart" aria-label="Перейти в Корзину">
        <span className={s.text}>Корзина</span>
        <span>({product.length})</span>
        <SVG iconName="cartIcon" className={s.svgFavorite} />
      </Link>
    </nav>
  );
};

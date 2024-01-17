import classNames from "classnames";
import s from "./Goods.module.scss";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";

export const Goods = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading">
        <p className="loading__text">Загрузка списка товаров...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <p className="error__text">Ошибка: {error}</p>
      </div>
    );
  }

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={classNames(s.title, s.hidden)}> Список товаров</h2>

        <ul className={s.list}>
          {data && data.map((item) => <CardItem key={item.id} {...item} />)}
          {/* {data &&
            data.map((product) => (
              <li key={product.id}>
                <CardItem {...product} />
              </li>
            ))} */}
        </ul>
      </Container>
    </section>
  );
};

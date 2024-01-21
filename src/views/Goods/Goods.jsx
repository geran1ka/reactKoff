import classNames from "classnames";
import s from "./Goods.module.scss";
import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { Loading } from "../../UI/Loading/Loading";
import { Error } from "../../UI/Error/Error";
import { useLocation, useSearchParams } from "react-router-dom";

export const Goods = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const search = searchParam.get("search");
  const favoriteList = useSelector((state) => state.favorite.favoriteList);
  const list = { list: favoriteList.join(",") };
  const path = useLocation().pathname;

  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (path === "/favorite") {
      dispatch(fetchProducts(list));
    } else {
      dispatch(fetchProducts({ category, search }));
    }
  }, [dispatch, category, search, path]);

  if (loading) return <Loading text={"Загрузка списка товаров..."} />;
  if (error) return <Error error={error} />;

  return (
    <section className={s.goods}>
      <Container>
        <>
          <h2 className={classNames(s.title, s.hidden)}> Список товаров</h2>
          {data.length ? (
            <ul className={s.list}>
              {data &&
                data.map((item) => (
                  <li key={item.id}>
                    <CardItem {...item} />
                  </li>
                ))}
            </ul>
          ) : (
            <Loading text={" По вашему запросу товаров не найдено"} />
          )}
        </>
      </Container>
    </section>
  );
};

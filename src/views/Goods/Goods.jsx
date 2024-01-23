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
import { Pagination } from "../../components/Pagination/Pagination";

export const Goods = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const search = searchParam.get("search");
  const page = searchParam.get("page");

  const { favoriteList } = useSelector((state) => state.favorite);
  const { pathname } = useLocation();

  const { data, loading, error, pagination } = useSelector((state) => state.products);

  useEffect(() => {
    if (pathname !== "/favorite") {
      dispatch(fetchProducts({ category, search, page }));
    }
  }, [dispatch, category, search, pathname, page]);

  useEffect(() => {
    if (pathname === "/favorite") {
      dispatch(fetchProducts({ list: favoriteList.join(","), page }));
    }
  }, [dispatch, favoriteList, pathname, page]);

  if (loading) return <Loading text={"Загрузка списка товаров..."} />;
  if (error) return <Error error={error} />;

  return (
    <section className={s.goods}>
      <Container>
        <>
          <h2 className={classNames(s.title, s.hidden)}> Список товаров</h2>
          {data.length ? (
            <>
              <ul className={s.list}>
                {data &&
                  data.map((item) => (
                    <li key={item.id}>
                      <CardItem {...item} />
                    </li>
                  ))}
              </ul>
              {pagination ? <Pagination pagination={pagination} /> : ""}
            </>
          ) : (
            <Loading text={" По вашему запросу товаров не найдено"} />
          )}
        </>
      </Container>
    </section>
  );
};

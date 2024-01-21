import { useEffect } from "react";
import { CatalogItem } from "../../components/CatalogItem/CatalogItem";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Container } from "../Container/Container";
import s from "./Catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../UI/Error/Error";
import { Loading } from "../../UI/Loading/Loading";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <Loading text={"Загрузка каталог..."} />;
  if (error) return <Error error={error} />;

  return (
    <nav className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {data &&
            data.map((item) => (
              <li key={item}>
                <CatalogItem title={item} />
              </li>
            ))}
        </ul>
      </Container>
    </nav>
  );
};

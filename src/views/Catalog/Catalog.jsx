import { useEffect } from "react";
import { CatalogItem } from "../../components/CatalogItem/CatalogItem";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Container } from "../Container/Container";
import s from "./Catalog.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { PostLoader } from "../../UI/PostLoader/PostLoader";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading">
        <p className="loading__text">Загрузка</p>
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
    <nav className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>{data && data.map((item) => <CatalogItem key={item} title={item} />)}</ul>
      </Container>
    </nav>
  );
};

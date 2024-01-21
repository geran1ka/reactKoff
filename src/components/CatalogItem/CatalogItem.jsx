import { Link } from "react-router-dom";
import s from "./CatalogItem.module.scss";

export const CatalogItem = ({ title }) => (
  <Link to={`/category?category=${title}`} className={s.link}>
    {title}
  </Link>
);

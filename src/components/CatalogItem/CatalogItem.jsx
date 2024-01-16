import { Link } from "react-router-dom";
import s from "./CatalogItem.module.scss";

export const CatalogItem = ({ title }) => (
  <li className={s.item}>
    <Link to={`/category?slug=${title}`} className={s.link}>
      {title}
    </Link>
  </li>
);

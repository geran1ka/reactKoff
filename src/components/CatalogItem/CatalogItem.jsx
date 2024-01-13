import s from "./CatalogItem.module.scss";

export const CatalogItem = ({ title }) => (
  <li className={s.item}>
    <a href={`/category?slug=${title}`} className={s.link}>
      {title}
    </a>
  </li>
);

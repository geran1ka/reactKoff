import { Container } from "../../views/Container/Container";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import s from "./Catalog.module.scss";

export const Catalog = () => {
  console.log("данные");
  const data = [
    "Диваны",
    "Шкафы",
    "Стулья",
    "Тумбы",
    "Кровати",
    "Столы",
    "Комоды",
    "Матрасы",
    "Пуфики",
    "Стеллажи",
  ];
  return (
    <div className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>
          {data.map((item) => (
            <CatalogItem key={item} title={item} />
          ))}
        </ul>
      </Container>
    </div>
  );
};

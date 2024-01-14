import { Container } from "../../views/Container/Container";
import { CatalogItem } from "../CatalogItem/CatalogItem";
import s from "./Catalog.module.scss";

export const Catalog = ({ data }) => {
  console.log("data: ", data);
  return (
    <nav className={s.catalog}>
      <Container className={s.container}>
        <ul className={s.list}>{data && data.map((item) => <CatalogItem key={item} title={item} />)}</ul>
      </Container>
    </nav>
  );
};

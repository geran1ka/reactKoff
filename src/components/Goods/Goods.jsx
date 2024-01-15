import classNames from "classnames";
import { Container } from "../../views/Container/Container";
import s from "./Goods.module.scss";
import { CardItem } from "../CardItem/CardItem";

export const Goods = ({ data }) => {
  console.log("data: ", data);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={classNames(s.title, s.hidden)}> Список товаров</h2>

        <ul className={s.list}>
          {data &&
            data.map((product) => {
              console.log("product: ", product);
              return <CardItem key={product.id} data={product} />;
            })}
        </ul>
      </Container>
    </section>
  );
};

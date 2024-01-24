import { CartProducts } from "../../components/CartProducts/CartProducts";
import { Container } from "../Container/Container";
import { CartPlace } from "../../components/CartPlace/CartPlace";
import { CartForm } from "../../components/CartForm/CartForm";

export const Cart = () => {
  console.log("1");
  return (
    <section className={s.cart}>
      <Container className={s.container}>
        <h2 className={s.title}>Корзина</h2>
        <CartProducts />
        <CartPlace />
        <CartForm />
      </Container>
    </section>
  );
};

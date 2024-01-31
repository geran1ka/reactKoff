import s from "./Card.module.scss";
import { Container } from "../../views/Container/Container";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/product/product.slice";
import { Slider } from "../Slider/Slider";
import { Loading } from "../../UI/Loading/Loading";
import { Error } from "../../UI/Error/Error";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { AddCartButton } from "../AddPCartButton/AddCartButton";

export const Card = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loading) return <Loading text={"Загрузка информации о товаре"} />;
  if (error) return <Error error={error} />;
  if (!data) return <Loading text={"Подукт не найден"} />;

  return (
    data && (
      <section className={s.product}>
        <Container className={s.container}>
          <h2 className={s.title}>{data.name}</h2>
          <Slider data={data} />
          <div className={s.info}>
            <p className={s.price}>{data.price && data.price.toLocaleString()}&nbsp;₽</p>
            <p className={s.article}>арт. {data.article}</p>

            <div className={s.characteristics}>
              <h3 className={s.characteristicsTitle}>Общие характеристики</h3>

              <table className={s.table}>
                <tbody>
                  {data.characteristics &&
                    data.characteristics.map(([title, description], index) => (
                      <tr className={s.row} key={index}>
                        <td className={s.field}>{title}</td>
                        <td className={s.value}>{description}</td>
                      </tr>
                    ))}
                </tbody>
              </table>

              <div className={s.btns}>
                <AddCartButton className={s.btn} id={data.id} />
                <FavoriteButton className={[s.like, s.svg]} id={data.id} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  );
};

import { useDispatch, useSelector } from "react-redux";
import s from "./CartForm.module.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { submitCartForm } from "../../store/form/formCart.slice";

export const CartForm = () => {
  console.log();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const orderStatus = useSelector((state) => state.formCart);
  console.log("orderStatus: ", orderStatus);

  useEffect(() => {
    if (orderStatus.success) {
      navigate(`/order/${orderStatus.orderId}`);
    }
  }, [orderStatus, navigate]);

  const onSubmit = (data) => {
    dispatch(submitCartForm(data));
  };

  return (
    <form action="#" className={s.form} id="orderForm" method="post" onSubmit={handleSubmit(onSubmit)}>
      <h3 className={s.subtitle}>Данные для доставки</h3>

      <fieldset className={s.fieldsetInput}>
        <label>
          <input
            type="text"
            className={s.input}
            {...register("name", { required: true })}
            placeholder="Фамилия Имя Отчество"
          />
          {errors.name && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <input type="tel" className={s.input} {...register("phone", { required: true })} placeholder="Телефон" />
          {errors.phone && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <input type="email" className={s.input} {...register("email", { required: true })} placeholder="E-mail" />
          {errors.email && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <input
            type="text"
            className={s.input}
            {...register("address", { required: true })}
            placeholder="Адрес доставки"
          />
          {errors.address && <p className={s.error}>Это поле обязательное</p>}
        </label>
        <label>
          <textarea className={s.textarea} {...register("comments")} placeholder="Комментарий к заказу"></textarea>
        </label>
        <label></label>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Доставка</legend>
        <label className={s.radio}>
          <input
            type="radio"
            className={s.radioInput}
            {...register("deliveryType", { required: true })}
            value="delivery"
          />
          Доставка
        </label>
        <label className={s.radio}>
          <input
            type="radio"
            className={s.radioInput}
            {...register("deliveryType", { required: true })}
            value="pickup"
          />
          Самовывоз
        </label>
        {errors.deliveryType && <p className={s.error}>Выберите тип доставки</p>}
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Оплата</legend>
        <label className={s.radio}>
          <input type="radio" className={s.radioInput} {...register("paymentType", { required: true })} value="card" />
          Картой при получении
        </label>
        <label className={s.radio}>
          <input type="radio" className={s.radioInput} {...register("paymentType", { required: true })} value="cash" />
          Наличными при получении
        </label>
        {errors.deliveryType && <p className={s.error}>Выберите тип оплаты</p>}
      </fieldset>
    </form>
  );
};

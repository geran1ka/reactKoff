import s from "./CartForm.module.scss";

export const CartForm = () => {
  console.log();
  return (
    <form action="#" className={s.form} id="form" method="post">
      <h3 className={s.subtitle}>Данные для доставки</h3>

      <fieldset className={s.fieldsetInput}>
        <input type="text" className={s.input} name="name" placeholder="Фамилия Имя Отчество" />
        <input type="tel" className={s.input} name="phone" placeholder="Телефон" />
        <input type="email" className={s.input} name="email" placeholder="E-mail" />
        <input type="text" className={s.input} name="address" placeholder="Адрес доставки" />
        <textarea className={s.textarea} name="comments" placeholder="Комментарий к заказу"></textarea>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Доставка</legend>
        <label className={s.radio}>
          <input type="radio" className={s.radioInput} name="deliveryType" value="delivery" />
          Доставка
        </label>
        <label className={s.radio}>
          <input type="radio" className={s.radioInput} name="deliveryType" value="pickup" />
          Самовывоз
        </label>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Оплата</legend>
        <label className={s.radio}>
          <input type="radio" className={s.radioInput} name="paymentType" value="card" />
          Картой при получении
        </label>
        <label className={s.radio}>
          <input type="radio" className={s.radioInput} name="paymentType" value="cash" />
          Наличными при получении
        </label>
      </fieldset>
    </form>
  );
};

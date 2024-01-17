import s from "./NotFound.module.css";

export const NotFound = () => (
  <div className={s.errorWrapper}>
    <p className={s.text}>Запрашиваемая страница не существует </p>
  </div>
);

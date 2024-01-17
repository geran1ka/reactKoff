import s from "./Error.module.scss";

export const Error = ({ error }) => (
  <div className={s.error}>
    <p className={s.description}>Ошибка: {error}</p>
  </div>
);

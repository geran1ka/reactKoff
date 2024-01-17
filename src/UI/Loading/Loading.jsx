import s from "./Loading.module.scss";

export const Loading = ({ text }) => (
  <div className={s.loading}>
    <p className={s.description}>{text}</p>
  </div>
);

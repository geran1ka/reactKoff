import s from "./NotFound.module.css";
import { useSelector } from "react-redux";

export const NotFound = () => {
  const error = useSelector((state) => state.product.error);
  return (
    <div className={s.errorWrapper}>
      <p className={s.text}>Запрашиваемая страница не существует </p>
      {error && <p className={s.text}>{error.message}</p>}
    </div>
  );
};

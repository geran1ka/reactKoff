import style from "./PostLoader.module.css";
import ClockLoader from "react-spinners/ClockLoader";

export const PostLoader = () => (
  <ClockLoader className={style.loader} color="#780096" css={{ display: "block" }} size={120} />
);

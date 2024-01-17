import style from "./PostLoader.module.css";
import ClockLoader from "react-spinners/ClockLoader";

export const PostLoader = () => (
  <ClockLoader className={style.loader} color="#36d7b7" css={{ display: "block" }} size={150} />
);

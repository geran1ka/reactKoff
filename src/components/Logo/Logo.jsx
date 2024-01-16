import { Link } from "react-router-dom";
import { SVG } from "../../UI/SVG/SVG";
import s from "./Logo.module.scss";

export const Logo = () => (
  <Link className={s.link} to="/">
    <SVG iconName="logoIcon" className={s.img} alt="Логотип мебельного маркета Koff" />
  </Link>
);

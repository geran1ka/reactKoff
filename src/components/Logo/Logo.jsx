import { SVG } from "../../UI/SVG/SVG";
import s from "./Logo.module.scss";

export const Logo = () => (
  <a className={s.link} href="/">
    <SVG iconName="logoIcon" className={s.img} alt="Логотип мебельного маркета Koff" />
  </a>
);

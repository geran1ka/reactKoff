import s from "./Developers.module.scss";

export const Developers = () => (
  <ul className={s.developers}>
    <li className="footer__developer-item">
      Desinger:&nbsp;
      <a href="https://t.me/Mrshmallowww" className={s.link} target="_blank" rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li className="footer__developer-item">
      Developer:&nbsp;
      <a href="https://t.me/Roman_khor" className={s.link} target="_blank" rel="noreferrer">
        Roman Khoruzhy
      </a>
    </li>
  </ul>
);

import { Contacts } from "../../components/Contacts/Contacts";
import { Copyright } from "../../components/Copyright/Copyright";
import { Developer } from "../../components/Developer/Developer";
import { Logo } from "../../components/Logo/Logo";
import { Container } from "../Container/Container";
import s from "./Footer.module.scss";

export const Footer = () => (
  <footer className={s.footer}>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.contacts}>
        <Contacts />
      </div>
      <div className={s.developer}>
        <Developer />
      </div>
      <div className={s.copyright}>
        <Copyright />
      </div>
    </Container>
  </footer>
);

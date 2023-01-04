import Logo from "../../assets/Logo/logo_footer.svg";
import Style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <img src={Logo} alt="logo kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;

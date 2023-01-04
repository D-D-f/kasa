import Logo from "../../assets/Logo/logo.svg";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <h1>
        <img src={Logo} alt="logo kasa" />
      </h1>

      <nav className={style.header_nav}>
        <ul className={style.ul}>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/about">
            <li>À Propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

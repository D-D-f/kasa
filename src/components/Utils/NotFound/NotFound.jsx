import style from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={style.NotFound}>
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <Link className={style.accueil} to="/">
        <span>Retourner sur la page d’accueil</span>
      </Link>
    </div>
  );
};

export default NotFound;

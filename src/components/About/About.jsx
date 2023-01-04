import style from "./About.module.css";
import Collapse from "../Utils/Collapse/Collapse";
import { useLocation } from "react-router-dom";

const About = () => {
  const changeLocalisation = useLocation().pathname.substring(1);

  if (changeLocalisation !== "about") {
    return <NotFound />;
  }

  return (
    <div className="About">
      <div className={style.images}></div>
      <div className={style.collapses}>
        <Collapse name="Fiabilité" description={"test"} taille="100%" />
        <Collapse
          name="Respect"
          description={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
          taille="100%"
        />
        <Collapse name="Service" description={"test"} taille="100%" />
        <Collapse name="Responsabilité" description={"test"} taille="100%" />
      </div>
    </div>
  );
};

export default About;

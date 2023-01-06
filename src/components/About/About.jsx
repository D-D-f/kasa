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
        <Collapse
          name="Fiabilité"
          description={
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          }
          taille="100%"
        />
        <Collapse
          name="Respect"
          description={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
          taille="100%"
        />
        <Collapse
          name="Service"
          description={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
          taille="100%"
        />
        <Collapse
          name="Responsabilité"
          description={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
          taille="100%"
        />
      </div>
    </div>
  );
};

export default About;

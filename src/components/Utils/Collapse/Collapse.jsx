import style from "./Collapse.module.css";
import { useState } from "react";

const Collapse = ({ name, description, taille }) => {
  const [up, setUp] = useState(false);

  const handleClickUp = () => {
    setUp(!up);
  };

  const styleCollapse = {
    width: `${taille}`,
  };

  return (
    <div className={style.containerCollapse} style={{ ...styleCollapse }}>
      <div className={style.Collapse}>
        <h2>{name}</h2>
        <span onClick={handleClickUp}>
          {up ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </span>
      </div>
      {up && (
        <div className={style.description}>
          {name === "Équipements" ? (
            <ul>
              {description.map((equip, index) => {
                return <li key={index}>{equip}</li>;
              })}
            </ul>
          ) : (
            <p>{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;

import Style from "./Card.module.css";

const Card = ({ name, img }) => {
  const styleCard = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "340px",
  };
  return (
    <div style={{ ...styleCard }} className={Style.Card}>
      <h2>{name}</h2>
    </div>
  );
};

export default Card;

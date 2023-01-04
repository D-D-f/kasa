import style from "./Home.module.css";
import Card from "./Card/Card";
import { NavLink } from "react-router-dom";

const Home = ({ data }) => {
  const allCards = data.map((card) => (
    <NavLink key={card.id} to={`/${card.id}`}>
      <Card key={card.id} name={card.title} img={card.cover} />
    </NavLink>
  ));

  return (
    <>
      <div className={style.images}>
        <h2>
          Chez vous, <span>partout et ailleurs</span>
        </h2>
      </div>
      <section className={style.Home}>{allCards}</section>
    </>
  );
};

export default Home;

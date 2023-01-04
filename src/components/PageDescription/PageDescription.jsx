import style from "./PageDescription.module.css";
import Carousel from "../Utils/Carousel/Carousel";
import Collapse from "../Utils/Collapse/Collapse";
import StarRating from "./StarRacing/StarRacing";
import { useParams, useLocation } from "react-router-dom";
import NotFound from "../Utils/NotFound/NotFound";

const PageDescription = ({ data }) => {
  const localisation = useParams();
  const changeLocalisation = useLocation().pathname.substring(1);

  if (localisation.id.length !== 8) {
    return <NotFound />;
  } else if (changeLocalisation !== localisation.id) {
    return <NotFound />;
  }

  const sort = data
    .filter((item) => item.id === localisation.id)
    .map((item) => {
      return (
        <div key={item.id} className={style.test}>
          <Carousel key={item.id} allImg={item.pictures} />
          <div className={style.localisation_user}>
            <div className={style.localisation}>
              <h2>{item.title}</h2>
              <h3>{item.location}</h3>
              <div className={style.tags}>
                {item.tags.map((tag, index) => {
                  return (
                    <span key={index} className={style.tag}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className={style.user}>
              <div className={style.img_user}>
                <h3>{item.host.name}</h3>
                <img src={item.host.picture} alt={item.host.name} />
              </div>
              <div className={style.rating}>
                <StarRating key={item.id} rating={item.rating} />
              </div>
            </div>
          </div>
          <div className={style.collapses}>
            <Collapse
              className={style.collapse_description}
              name="Description"
              description={item.description}
            />
            <Collapse name="Équipements" description={item.equipments} />
          </div>
        </div>
      );
    });

  return <div className={style.PageDescription}>{sort}</div>;
};

export default PageDescription;

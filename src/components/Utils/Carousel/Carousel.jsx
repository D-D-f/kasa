import { useState } from "react";
import style from "./Carousel.module.css";

const Carousel = ({ allImg }) => {
  const [img, setImg] = useState(allImg);
  const [index, setIndex] = useState(0);
  const carousel = {
    backgroundImage: `url(${img[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const handleClickNext = () => {
    if (index === img.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handleClickBefore = () => {
    if (index === 0) {
      setIndex(img.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <div className={style.Carousel} style={{ ...carousel }}>
      <div className={style.chevron}>
        <i onClick={handleClickBefore} className="fa-solid fa-chevron-left"></i>
        <i onClick={handleClickNext} className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Carousel;

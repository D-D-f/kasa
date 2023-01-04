import React from "react";
import style from "./StarRacing.module.css";

const StarRating = ({ rating }) => {
  const redStars = [];
  const greyStars = [];

  for (let i = 0; i < rating; i++) {
    redStars.push(
      <i
        key={i}
        className={`fa-solid fa-star`}
        style={{ color: "var()--primary" }}
      ></i>
    );
  }

  for (let i = 0; i < 5 - rating; i++) {
    greyStars.push(
      <i
        key={i}
        className={`fa-solid fa-star`}
        style={{ color: "var(--secondary)" }}
      ></i>
    );
  }

  return (
    <div className={style.Rating}>
      {redStars}
      {greyStars}
    </div>
  );
};

export default StarRating;

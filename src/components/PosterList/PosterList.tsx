import React from "react";
import PosterListItem from "./PosterListItem/PosterListItem";

const PosterList = () => {
  let arrayItem = [0, 1, 2, 3, 4];

  return (
    <div className="poster-list">
      {arrayItem.map(() => (
        <PosterListItem />
      ))}
    </div>
  );
};

export default PosterList;

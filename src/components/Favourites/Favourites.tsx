import React from "react";
import PosterList from "../PosterList/PosterList";

const Favourites = () => {
  return (
    <div className="favourites-container">
      <div className="favourites-container__title">
        <h2>Favourites movie</h2>
      </div>
      <div className="favourites-container__inner">
        <PosterList />
      </div>
    </div>
  );
};

export default Favourites;

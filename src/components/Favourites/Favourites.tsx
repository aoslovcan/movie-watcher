import React from "react";
import PosterList from "../PosterList/PosterList";
import { getDataFromStorage } from "../../helpers/customHooks";


const Favourites = () => {
  const favorites = getDataFromStorage("favorites");

  return (
    <div className="favourites-container">
      <div className="favourites-container__title">
        <h2>Favourites movie</h2>
      </div>
      <div className="favourites-container__inner">
        <PosterList items={favorites}/>
      </div>
    </div>
  );
};

export default Favourites;

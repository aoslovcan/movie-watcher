import React, { useEffect, useState } from "react";
import PosterList from "../PosterList/PosterList";
import { getDataFromStorage } from "../../helpers/customHooks";


const Favourites = () => {
  const [favoritesData, setFavoritesData] = useState([]);

  const getFavoritesData = () => {
    const favorites = getDataFromStorage("favorites");
    setFavoritesData(favorites);
  };

  useEffect(() => {
    getFavoritesData();
  }, []);
  return (
    <div className="favourites-container">
      <div className="favourites-container__title">
        <h2>Favourites movies</h2>
      </div>
      <div className="favourites-container__inner">
        {
          favoritesData?.length ? (<PosterList items={favoritesData} updateList={getFavoritesData} />) : (
            <p>No items</p>)
        }
      </div>
    </div>
  );
};

export default Favourites;

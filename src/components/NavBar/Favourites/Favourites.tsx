import React, { useEffect, useState } from "react";
import { PosterList } from "../../index";
import { getDataFromStorage } from "../../../helpers/customHooks";
import Modal from "../../../common/Modal/Modal";

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
    <Modal id="favourites-modal" title="Favorites movie">
      <PosterList items={favoritesData} updateList={getFavoritesData} />
    </Modal>
  );
};

export default Favourites;

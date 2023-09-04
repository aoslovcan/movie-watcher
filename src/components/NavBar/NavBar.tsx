import React, { useState } from "react";
import Search from "./Search/Search";
import { Link } from "react-router-dom";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";
import Favourites from "../Favourites/Favourites";

const NavBar = () => {
  const [isFavouritesOpen, setIsFavouritesOpen] = useState(false);

  const openFavourites = () => {
    setIsFavouritesOpen(!isFavouritesOpen);
  };

  const favouritesIcon = isFavouritesOpen ? (
    <CgChevronUp className="arrow" />
  ) : (
    <CgChevronDown className="arrow" />
  );

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <Link to="/home">
          <div className="navbar__link">Home</div>
        </Link>
        <div
          role="button"
          tabIndex={0}
          className="navbar__link"
          onClick={openFavourites}
          onBlur={openFavourites}
        >
          Favourites {favouritesIcon}
        </div>
        <div className="navbar__search">
          <Search />
        </div>
      </div>
      {isFavouritesOpen && <Favourites />}
    </div>
  );
};

export default NavBar;

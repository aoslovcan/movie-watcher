import React from "react";
import Search from "./Search/Search";

const NavBar = () => {
  return (
    <div className="navbar">
              <div className="navbar__wrapper">
                  <div className="navbar__link">Home</div>
            <div className="navbar__link">Favourites</div>
            <div className="navbar__search">
               <Search/>
            </div>
        </div>

    </div>
  );
};

export default NavBar;

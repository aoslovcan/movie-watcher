import React from "react";
import MovieList from "../../components/MovieList/MovieList";

const MovieDiscoveryPage = () => {
  return (
    <div className="pg-lyt">
      <div className="discovery">
        <div className="discovery__hero">
          <div className="discovery__hero__header">
            <div className="discovery__hero__header__left">
              <div className="discovery__hero__header_title">
                <h1>Discovery page</h1>
                <div className="calendar-icon">
                  <div className="month">SEP</div>
                  <div className="date">01</div>
                </div>
              </div>
            </div>
            {/*TODO add right icons and modal for choosing streaming services*/}

        </div>
      </div>
        <div>
          <MovieList/>
        </div>
      </div>
    </div>
  );
};

export default MovieDiscoveryPage;

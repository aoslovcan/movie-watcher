import React from "react";
import MovieList from "../../components/MovieList/MovieList";
import { Tile } from "../../components/index";

const MovieDiscoveryPage = () => {
  return (
    <div className="pg-lyt">
     {/* <div className="discovery">
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

        </div>
      </div>*/}
      <Tile title="Discover daily" leftComponent={ <div className="calendar-icon">
        <div className="month">SEP</div>
        <div className="date">01</div>
      </div>}>
       hello
      </Tile>
        <Tile title="Newest movies">
          <MovieList/>
        </Tile>

        <Tile title="Popular movies">
          <MovieList/>
        </Tile>
    </div>
  );
};

export default MovieDiscoveryPage;

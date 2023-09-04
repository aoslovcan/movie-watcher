import React from "react";
import MovieListSlider from "../../components/MovieListSlider/MovieListSlider";
import { Tile } from "../../components/index";

const MovieDiscoveryPage = () => {
  const dateInfo = (
    <div className="calendar-icon">
      <div className="calendar-icon__month">SEP</div>
      <div className="calendar-icon__date">1</div>
    </div>
  );

  return (
    <div className="pg-lyt">
      <Tile title="Discover daily" leftComponent={dateInfo}>
        hello
      </Tile>
      <Tile title="Newest movies">
        <MovieListSlider />
      </Tile>

      <Tile title="Popular movies">
        <MovieListSlider />
      </Tile>
    </div>
  );
};

export default MovieDiscoveryPage;

import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import {Tile} from "../../components/index"
import MovieDetail from "../../components/MovieDetail/MovieDetail";

const MovieDetailsPage = () => {

  const innerStyle = {
    backgroundImage: 'url("https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg")',
  }

  const title = `Meg 2`

  return (
    <div className="movie-details-page">
      <div className="movie-details-page__header" style={innerStyle}/>
      <div className="movie-details-page__box">
        <div className="left">
          <MovieCard
            title="The movie"
            posterPath="4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
            id={1}
          />
        </div>
        <div className="right">
<Tile title={title}>
 <MovieDetail/>
</Tile>
        </div>
      </div>

    </div>
  );
};

export default MovieDetailsPage;

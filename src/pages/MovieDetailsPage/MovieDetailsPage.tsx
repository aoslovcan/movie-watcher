import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import {Tile} from "../../components/index"

const MovieDetailsPage = () => {

  const innerStyle = {
    backgroundImage: 'url("https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg")',
  }

  return (
    <div className="movie-details-page">
      <div className="movie-details-page__header" style={innerStyle}/>
      <div className="movie-details-page__box">
        <div className="right">
          <MovieCard
            title="The movie"
            posterPath="4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
            id={1}
          />
        </div>
        <div className="left">
<Tile title="Meg 2">
  Movie details goes here
</Tile>
        </div>
      </div>

    </div>
  );
};

export default MovieDetailsPage;

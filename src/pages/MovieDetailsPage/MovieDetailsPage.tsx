import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Tile } from "../../components/index";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { useLocation } from "react-router-dom";

const MovieDetailsPage = () => {
  const location = useLocation();
  const movieDetails = location.state.movieDetails;
  const { id, posterPath, title } = movieDetails;
  const uri = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const innerStyle = {
    backgroundImage: `url(${uri})`,
  };

  return (
    <div className="movie-details-page">
      <div className="movie-details-page__header" style={innerStyle} />
      <div className="movie-details-page__box">
        <div className="left">
          <MovieCard
            title="The movie"
            posterPath={posterPath}
            id={id}
          />
        </div>
        <div className="right">
          <Tile title={title}>
            <MovieDetail movieDetails={movieDetails}/>
          </Tile>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

import React from "react";
import { MovieType } from "../../types/types";

type MovieDetailProps = {
  movieDetails: MovieType;
};

const MovieDetail = ({ movieDetails }: MovieDetailProps) => {
  const { originalTitle, releaseDate, overview, voteAverage, genres } =
    movieDetails;

  const date = new Date(releaseDate);
  const yearOfRelease = date.getFullYear();

  return (
    <div className="movie-detail">
      <div className="movie-detail__info">
        <div className="movie-detail__info__item">
          <h3>Izvorni naziv</h3>
          <span>{originalTitle}</span>
        </div>
        <div className="movie-detail__info__item">
          <h3>Ocjena</h3>
          <span>{voteAverage}</span>
        </div>
        <div className="movie-detail__info__item">
          <h3>Žanrovi</h3>
          <span>
            {genres?.map((genre) => (
              <span>{genre}, </span>
            ))}
          </span>
        </div>
        <div className="movie-detail__info__item">
          <h3>Godina proizvodnje</h3>
          <span>{yearOfRelease}</span>
        </div>

        <div className="movie-detail__info__item">
          <h3>Sinopsis</h3>
          <p className="description">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

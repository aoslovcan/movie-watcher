import React from "react";
import { MovieType } from "../../../types/types";
import { getDate } from "../../../helpers/commonFunc";

type MovieDetailProps = {
  movieDetails: MovieType;
};

const MovieDetails = ({ movieDetails }: MovieDetailProps) => {
  const { originalTitle, releaseDate, overview, voteAverage, genres } =
    movieDetails;

  const date = new Date(releaseDate);
  const [year] = getDate(date);

  const itemList = [
    {
      id: 1,
      title: "Original title",
      data: originalTitle,
    },
    {
      id: 2,
      title: "Rating",
      data: voteAverage,
    },
    {
      id: 2,
      title: "Genres",
      data: genres,
    },
    {
      id: 3,
      title: "Year",
      data: year,
    },
    {
      id: 4,
      title: "Overview",
      data: overview,
    },
  ];

  return (
    <div className="movie-detail">
      <div className="movie-detail__info">
        {itemList.map(({ id, title, data }) => (
          <div key={id} className="movie-detail__info__item">
            <h3>{title}</h3>
            {title !== "Overview" ? (
              <span>{data}</span>
            ) : (
              <p className="description">{overview}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;

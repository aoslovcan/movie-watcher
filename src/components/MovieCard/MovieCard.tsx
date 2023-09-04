import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MovieCardType } from "../../types/types";

const MovieCard = ({ id, title, posterPath }: MovieCardType) => {
  const url = `https://image.tmdb.org/t/p/w500/${posterPath}`;

  return (
    <div role="button" tabIndex={0} className="card">
      <BsFillBookmarkFill className="favourites-button" />
      <img alt={title} src={url} />
    </div>
  );
};

export default MovieCard;

import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MovieCardType } from "../../types/types";
import {useNavigate} from "react-router-dom";

const MovieCard = ({ id, title, posterPath, data }: MovieCardType) => {
  const url = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const navigate = useNavigate();

  const getMovieDetails = () => {
    // @ts-ignore
    navigate(`/movie-details/${id}`, {state: {movieDetails : data}})
  }

  return (

      <div role="button" tabIndex={0} className="card" onClick={getMovieDetails}>
        <BsFillBookmarkFill className="favourites-button" />
        <img alt={title} src={url} />
      </div>

  );
};

export default MovieCard;

import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MovieCardType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../../helpers/customHooks";

const MovieCard = ({ id, title, posterPath, data }: MovieCardType) => {
  const url = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  const navigate = useNavigate();

  const [addToLocalStorage] = useStorage(
    { id, title, posterPath },
    "favorites",
    "Already in favorites"
  );

  const getMovieDetails = (ev: { target: any }) => {
    if (ev.target.parentElement.classList.contains("favourites-button")) {
      return;
    }

    navigate(`/movie-details/${id}`, { state: { movieDetails: data } });
  };

  const addToFavourite = (ev: React.MouseEvent<SVGElement, MouseEvent>) => {
    addToLocalStorage();
  };
  return (
    <div
      role="button"
      tabIndex={0}
      className="card"
      onClick={(e) => getMovieDetails(e)}
    >
      <BsFillBookmarkFill
        className="favourites-button"
        onClick={(e) => addToFavourite(e)}
      />
      <img alt={title} src={url} />
    </div>
  );
};

export default MovieCard;

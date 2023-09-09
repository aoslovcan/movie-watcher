import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MovieCardType } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../../helpers/customHooks";
import {PosterPicture} from "../../common/commonIndex";

const MovieCard = ({ id, title, posterPath, data }: MovieCardType) => {
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
      <PosterPicture width="500" imgPath={posterPath} altTitle={title}/>
    </div>
  );
};

export default MovieCard;

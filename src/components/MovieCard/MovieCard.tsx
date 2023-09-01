import React from "react";
import { BsFillBookmarkFill } from "react-icons/bs";

type MovieCardProps = {
  id: number | string,
  title: string,
  posterPath: string,
}

const MovieCard = ({id, title, posterPath }: MovieCardProps) => {

  const url = `https://image.tmdb.org/t/p/w200/${posterPath}`

  return (
    <div
      role="button"
      tabIndex={0}
      className="card"
    >
      <BsFillBookmarkFill className="favourites-button"/>
      <img alt={title} src={url}/>
    </div>
  );
}

export default MovieCard;

import React from "react";

type PosterListItemProps = {
  posterPath : string
}

const PosterListItem = ({posterPath} : PosterListItemProps) => {

  const imgSrc = `https://image.tmdb.org/t/p/w200/${posterPath}`;
  return (
    <div className="poster-list__item">
      <div className="poster-list__item__image">
        <img
          alt="poster"
          src={imgSrc}
        />
      </div>
    </div>
  );
};

export default PosterListItem;

import React from "react";
import {BsTrash3Fill} from "react-icons/bs";
import { useStorage } from "../../../helpers/customHooks";
type PosterListItemProps = {
  id: number;
  posterPath : string,
  update: () => void
}

const PosterListItem = ({id, posterPath, update} : PosterListItemProps) => {
  const [addToLocalStorage, removeFromLocalStorage] = useStorage({ id : id }, "favorites", "");

  const removeItem = (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    ev.preventDefault();
    removeFromLocalStorage();
    update();
  }

  const imgSrc = `https://image.tmdb.org/t/p/w200/${posterPath}`;
  return (
    <div className="poster-list__item">
      <div className="poster-list__item__image">
        <span className="action" onClick={(e) => removeItem(e)}><BsTrash3Fill/></span>
        <img
          alt="poster"
          src={imgSrc}
        />
      </div>
    </div>
  );
};

export default PosterListItem;

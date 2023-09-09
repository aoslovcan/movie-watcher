import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { useStorage } from "../../../helpers/customHooks";
import { PosterPicture } from "../../../common/commonIndex";
type PosterListItemProps = {
  id: number;
  posterPath: string;
  actionRemove?: boolean;
  title?: string;
  update?: () => void;
  itemClass?: string;
};

const PosterListItem = ({
  id,
  actionRemove = false,
  posterPath,
  title,
  update,
  itemClass,
}: PosterListItemProps) => {
  const [addToLocalStorage, removeFromLocalStorage] = useStorage(
    { id: id },
    "favorites",
    ""
  );

  const removeItem = (ev: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    ev.preventDefault();
    removeFromLocalStorage();
    // @ts-ignore
    update();
  };

  const posterListItemClass = itemClass ? itemClass : "poster-list__item";
  return (
    <div className={posterListItemClass}>
      <div className="poster-list__item__image">
        {actionRemove && (
          <span className="action" onClick={(e) => removeItem(e)}>
            <BsTrash3Fill />
          </span>
        )}
        <PosterPicture width="200" imgPath={posterPath} altTitle=""/>
      </div>
      {title && (
        <div className="info">
          <h3>{title}</h3>
        </div>
      )}
    </div>
  );
};

export default PosterListItem;

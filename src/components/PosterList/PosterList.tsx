import React from "react";
import PosterListItem from "./PosterListItem/PosterListItem";

type PosterListProps = {
  items: any;
  updateList: () => void;
};

const PosterList = ({ items, updateList }: PosterListProps) => {
  return (
    <div className="poster-list">
      {items?.length ? (
        items.map((item: any) => (
          <PosterListItem
            id={item.id}
            key={item.id}
            posterPath={item.posterPath}
            update={updateList}
            actionRemove={true}
          />
        ))
      ) : (
        <p>No items</p>
      )}
    </div>
  );
};

export default PosterList;

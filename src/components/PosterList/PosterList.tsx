import React from "react";
import PosterListItem from "./PosterListItem/PosterListItem";

type PosterListProps = {
  items : any
}

const PosterList = ({items} : PosterListProps) => {

  return (
    <div className="poster-list">
      {items.map((item : any) => (
        <PosterListItem key={item.id} posterPath={item.posterPath}/>
      ))}
    </div>
  );
};

export default PosterList;

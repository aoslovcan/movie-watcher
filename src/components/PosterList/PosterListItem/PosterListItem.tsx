import React from "react";

const PosterListItem = () => {
  return (
    <div className="poster-list__item">
      <div className="poster-list__item__image">
        <img
          alt="poster"
          src="https://image.tmdb.org/t/p/w200/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
        />
      </div>
      <div className="poster-list__item__details">
        <h3 className="title">Film</h3>
        <span className="description">film, 2023</span>
      </div>
    </div>
  );
};

export default PosterListItem;

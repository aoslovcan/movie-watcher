import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { MovieListType } from "../../types/types";
import MovieCard from "../MovieCard/MovieCard";
import ArrowButton from "./ArrowButton";

const MovieListSlider = ({ movieList }: MovieListType) => {

  return (
    <div>
      <ScrollMenu
        LeftArrow={<ArrowButton direction="left" />}
        RightArrow={<ArrowButton direction="right" />}
      >
        {movieList.map(({ id, title, posterPath }) => (
          <MovieCard title={title} posterPath={posterPath} id={id} key={id} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default MovieListSlider;

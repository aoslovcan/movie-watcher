import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { MovieListType } from "../../types/types";
import MovieCard from "../MovieCard/MovieCard";
import ArrowButton from "./ArrowButton";

type MovieListSliderProps = {
  movieList : MovieListType;
  category: string;
}

const MovieListSlider = ({ movieList, category } : MovieListSliderProps) => {

  return (
    <div>
      <ScrollMenu
        LeftArrow={<ArrowButton direction="left" />}
        RightArrow={<ArrowButton direction="right" />}
      >
        {movieList.map((movie) => (
          <MovieCard title={movie.title} posterPath={movie.posterPath} id={movie.id} key={movie.id} data={movie} />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default MovieListSlider;

import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import ArrowButton from "./ArrowButton";

const HorizontalScrollList = () =>{

  const items : Array<number> = [0, 1, 2, 3, 4, 5, 6, 7,8, 9];

  return( <div>
    <ScrollMenu
      LeftArrow={<ArrowButton direction="left"/>}
      RightArrow={<ArrowButton direction="right"/>}
    >
      {items.map((i: number | string) => (
        <MovieCard
          title="The movie"
          posterPath="4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg"
          id={i}
          key={i}
        />
      ))}
    </ScrollMenu>
    </div>
  )
}

export default HorizontalScrollList;

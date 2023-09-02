import React from "react";

export interface ValidationType {
  string:
    | {
    required?: {
      value: boolean
      message: string
    }
  }
    | undefined
}

export type ArrowType = {
  direction: string;
}

export type MovieCardType = {
  id: number | string,
  title: string,
  posterPath: string,
}

export type MovieListType ={movieList : Array<MovieCardType> }





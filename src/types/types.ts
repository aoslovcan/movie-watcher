import React, { ReactNode } from "react";

export interface ValidationType {
  string:
    | {
        required?: {
          value: boolean;
          message: string;
        };
      }
    | undefined;
}

export type ArrowType = {
  direction: string;
};

export type MovieCardType = {
  id: number | string;
  title: string;
  posterPath: string;
  data?: MovieType;
};

export type MovieResponseType = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type MovieType = {
  id: number;
  originalTitle: string;
  title: string;
  releaseDate: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
  posterPath: string;
};
export type MovieListType = Array<MovieType>;

export type TileProps = {
  title?: string;
  leftComponent?: string | ReactNode;
  rightComponent?: string | ReactNode;
  children: ReactNode;
};

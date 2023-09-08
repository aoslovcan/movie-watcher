import { ReactNode } from "react";

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
  genre_ids: Array<number>;
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
  genres: Array<string>;
};
export type MovieListType = Array<MovieType>;

export type TileProps = {
  title?: string;
  leftComponent?: string | ReactNode;
  rightComponent?: string | ReactNode;
  children: ReactNode;
};

export type Genre = {
  id: number;
  name: string;
};

export type GenresType = {
  genres: Array<Genre>;
};

import React from "react";
import MovieListSlider from "../../components/MovieListSlider/MovieListSlider";
import { Tile } from "../../components/index";
import { useNewestMovies, usePopularMovies } from "../../helpers/customHooks";
import { MovieResponseType } from "../../types/types";

const MovieDiscoveryPage = () => {
  const queryParams = `&language=en-US&page=1`;

  const { newestMovies } = useNewestMovies(queryParams);
  const { popularMovies } = usePopularMovies(queryParams);

  const getMovieList = (movieList: any) => {
    if (movieList?.results) {
      let movies = movieList.results;

      return movies.map(
        ({
          id,
          original_title,
          overview,
          poster_path,
          release_date,
          title,
          vote_average,
          vote_count,
        }: MovieResponseType) => {
          return {
            id: id,
            originalTitle: original_title,
            title: title,
            releaseDate: release_date,
            overview: overview,
            voteAverage: vote_average,
            voteCount: vote_count,
            posterPath: poster_path,
          };
        }
      );
    }

    return [];
  };

  const dateInfo = (
    <div className="calendar-icon">
      <div className="calendar-icon__month">SEP</div>
      <div className="calendar-icon__date">1</div>
    </div>
  );

  return (
    <div className="pg-lyt">
      <Tile title="Discover daily" leftComponent={dateInfo}>
        hello
      </Tile>
      <Tile title="Newest movies">
        <MovieListSlider movieList={getMovieList(newestMovies)} />
      </Tile>

      <Tile title="Popular movies">
        <MovieListSlider movieList={getMovieList(popularMovies)} />
      </Tile>
    </div>
  );
};

export default MovieDiscoveryPage;

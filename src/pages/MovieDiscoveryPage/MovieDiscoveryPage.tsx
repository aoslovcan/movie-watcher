import React from "react";
import MovieListSlider from "../../components/MovieListSlider/MovieListSlider";
import { Tile } from "../../components/index";
import {
  useGenre,
  useNewestMovies,
  usePopularMovies,
} from "../../helpers/customHooks";
import { MovieResponseType, GenresType } from "../../types/types";
import { getDate } from "../../helpers/commonFunc";
import { DataLoadingError }  from "../../common/commonIndex";

const MovieDiscoveryPage = () => {
  const queryParams = `&language=en-US&page=1`;

  const { newestMovies, loadingMovies, errorMovies} = useNewestMovies(queryParams);
  const { popularMovies, popularMoviesLoading, popularMoviesError } = usePopularMovies(queryParams);
  const { genres } = useGenre();
  const [month, date] = getDate(new Date());

  const getGenresName = (genresIds: Array<number>) => {
    return genresIds.map((i) => {
      const matchingGenre = (genres as GenresType)?.genres.find(
        ({ id }) => id === i
      );
      return matchingGenre ? matchingGenre.name : "Unknown";
    });
  };

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
          genre_ids,
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
            genres: getGenresName(genre_ids),
          };
        }
      );
    }

    return [];
  };

  const dateInfo = (
    <div className="calendar-icon">
      <div className="calendar-icon__month">{month}</div>
      <div className="calendar-icon__date">{date}</div>
    </div>
  );



  return (
    <div className="u-pg-lyt">
      <Tile title="Discover daily" leftComponent={dateInfo}>
        Discover movies
      </Tile>
      <Tile title="Newest movies">
        <DataLoadingError
          isLoading={loadingMovies}
          // @ts-ignore
          errorMsg={errorMovies?.message}>
          <MovieListSlider
            movieList={getMovieList(newestMovies)}
            category="newest"
          />
        </DataLoadingError>

      </Tile>
      <Tile title="Popular movies">
        <DataLoadingError
          isLoading={popularMoviesLoading}
          // @ts-ignore
          errorMsg={popularMoviesError?.message}
        >
        <MovieListSlider
          movieList={getMovieList(popularMovies)}
          category="popular"
        />
      </DataLoadingError>
      </Tile>
    </div>
  );
};

export default MovieDiscoveryPage;

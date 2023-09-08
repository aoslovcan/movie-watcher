import { ApiClient } from "../ApiClient/ApiClient";

export class MovieClient extends ApiClient {
  popularMoviesURI = `${process.env.REACT_APP_BASE_API_URI}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

  getNewestMovies(params: {}): Promise<Record<string, unknown>> {
    let url: string = `${process.env.REACT_APP_BASE_API_URI}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}${params}`;
    let data: {} = {
      method: "GET",
    };

    return this.fetchApi(url, data);
  }

  getPopularMovies(params: {}): Promise<Record<string, unknown>> {
    let url: string = `${this?.popularMoviesURI}${params}`;
    let data: {} = {
      method: "GET",
    };

    return this.fetchApi(url, data);
  }

  getMovieGenre(): Promise<Record<string, unknown>> {
    let url: string = `${process.env.REACT_APP_BASE_API_URI}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;
    let data: {} = {
      method: "GET",
    };

    return this.fetchApi(url, data);
  }

  findMovie(queryParam: string): Promise<Record<string, unknown>> {
    let url: string = `${process.env.REACT_APP_BASE_API_URI}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${queryParam}`;
    let data: {} = {
      method: "GET",
    };
    return this.fetchApi(url, data);
  }
}

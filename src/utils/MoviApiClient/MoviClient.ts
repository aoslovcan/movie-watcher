import { ApiClient } from "../ApiClient/ApiClient";

export class MovieClient extends ApiClient {
  newestMovies = `${process.env.REACT_APP_BASE_API_URI}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`;

  getNewestMovies(params: {}): Promise<Record<string, unknown>> {
    console.log(process.env.REACT_APP_BASE_API_URI);
    let url: string = `${this.newestMovies}${params}`;
    let data: {} = {
      method: "GET",
    };

    return this.fetchApi(url, data);
  }
}

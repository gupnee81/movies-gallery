export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IApiResponse {
  Search?: IMovie[];
  Response: string;
  Error?: string;
}

export interface IStore {
  movies: {
    searchList: IApiResponse;
    loading: boolean;
    error: {
      type: string;
      status: boolean;
      payload: any;
    };
    success: {
      type: string;
      status: boolean;
      payload: any;
    };
    moviesWatchList: IMovie[];
  };
  router: {
    location: {
      pathname: string;
    };
    action: string;
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state: any;
  };
}

import {
  SHOW_PRE_LOADER,
  INITIATE_MOVIE_REQUEST,
  MOVIE_REQUEST_SUCCESS,
  MOVIE_REQUEST_FAILED,
  ADD_TO_WATCH_LIST,
  REMOVE_FROM_WATCH_LIST,
} from './moviesActionTypes';
import { IMovie } from 'Interface/common.interface';

export const showPreLoader = () => ({
  type: SHOW_PRE_LOADER,
});

export const initiateSearchRequest = (searchString: string) => ({
  type: INITIATE_MOVIE_REQUEST,
  searchString,
});

export const searchRequestSuccess = (payload: IMovie[]) => {
  return {
    type: MOVIE_REQUEST_SUCCESS,
    payload,
  };
};

export const searchRequestFailed = (payload: any) => {
  return {
    type: MOVIE_REQUEST_FAILED,
    payload,
  };
};

export const addMovieToWatchList = (payload: IMovie[]) => {
  return {
    type: ADD_TO_WATCH_LIST,
    payload,
  };
};

export const removeMoviesFromWatchList = (payload: IMovie[]) => {
  return {
    type: REMOVE_FROM_WATCH_LIST,
    payload,
  };
};

import update from 'immutability-helper';
import {
  SHOW_PRE_LOADER,
  MOVIE_REQUEST_SUCCESS,
  MOVIE_REQUEST_FAILED,
  ADD_TO_WATCH_LIST,
  REMOVE_FROM_WATCH_LIST,
} from './moviesActionTypes';
import { setLoadingReducer, setSuccessReducer, setErrorReducer } from 'Utils/reducerHelper';

const initialState = {
  searchList: [],
  loading: false,
  error: {
    type: '',
    status: false,
    payload: {},
  },
  success: {
    type: '',
    status: false,
    payload: {},
  },
  moviesWatchList: [],
};

export const movies = (state = initialState, action: any) => {
  switch (action.type) {
    case MOVIE_REQUEST_SUCCESS: {
      const updateState = setSuccessReducer(state, action, MOVIE_REQUEST_SUCCESS);
      return update(state, {
        $set: {
          ...updateState,
          searchList: action.payload,
        },
      });
    }
    case MOVIE_REQUEST_FAILED: {
      const updateState = setErrorReducer(state, action, MOVIE_REQUEST_FAILED);
      return update(state, {
        $set: {
          ...updateState,
          searchList: action.payload,
        },
      });
    }

    case SHOW_PRE_LOADER: {
      const updateState = setLoadingReducer(state);
      return update(state, { $merge: { ...updateState } });
    }

    case ADD_TO_WATCH_LIST: {
      return update(state, { moviesWatchList: { $merge: action.payload } });
    }

    case REMOVE_FROM_WATCH_LIST: {
      return update(state, { moviesWatchList: { $set: action.payload } });
    }

    default: {
      return state;
    }
  }
};

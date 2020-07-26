import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { movies } from 'Containers/home/movies.reducer';

export const rootReducer = (history: any) => {
  return combineReducers({
    router: connectRouter(history),
    movies,
  });
};

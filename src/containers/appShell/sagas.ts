import { all } from 'redux-saga/effects';
import { watchMoviesActions } from 'Containers/home/movies.saga';
export default function* startRootSaga() {
  yield all([watchMoviesActions()]);
}

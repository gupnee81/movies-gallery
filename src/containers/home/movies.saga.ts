import { call, put, takeLatest } from 'redux-saga/effects';
import { INITIATE_MOVIE_REQUEST } from './moviesActionTypes';
import { OMDbApi } from './movies.api';
import { showPreLoader, searchRequestSuccess, searchRequestFailed } from './movies.actions';

export function* watchMoviesActions() {
  yield takeLatest(INITIATE_MOVIE_REQUEST, searchMoviesRequest);
}

export function* searchMoviesRequest(data: { type: string; searchString: string }) {
  yield put(showPreLoader());
  try {
    const response = yield call(OMDbApi, data.searchString);
    yield put(searchRequestSuccess(response.response.data));
  } catch (error) {
    yield put(searchRequestFailed(error));
  }
}

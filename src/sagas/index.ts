import { all, fork } from 'redux-saga/effects';
import * as searchCarProducts from 'src/sagas/searchCarProducts';
import * as searchLifestyleProducts from 'src/sagas/searchLifestyleProducts';
import * as searchNewProducts from 'src/sagas/searchNewProducts';
import * as searchOffersProducts from 'src/sagas/searchOffersProducts';

export default function* rootSaga() {
  yield all(
    [
      ...Object.values(searchCarProducts),
      ...Object.values(searchLifestyleProducts),
      ...Object.values(searchNewProducts),
      ...Object.values(searchOffersProducts),
    ].map(fork)
  );
}

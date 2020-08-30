import { all, fork } from 'redux-saga/effects';
import * as searchProducts from 'src/sagas/searchProducts';

export default function* rootSaga() {
  yield all([...Object.values(searchProducts)].map(fork));
}

import { takeLatest, put, call } from 'redux-saga/effects';
import { receiveProducts, REQUEST_NEW_PRODUCTS } from 'src/actions/redux';
import { fetchNewProducts } from 'src/actions/apiCalls/fetchProducts';

function* getNewProducts() {
  try {
    const data = yield call(fetchNewProducts);
    yield put(receiveProducts(data));
  } catch (e) {
    console.log(e);
  }
}

export function* searchNewProducts() {
  yield takeLatest(REQUEST_NEW_PRODUCTS, getNewProducts);
}

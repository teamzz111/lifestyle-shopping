import { takeLatest, put, call } from 'redux-saga/effects';
import { REQUEST_PRODUCTS, receiveProducts } from 'src/actions/redux';
import { fetchProducts } from 'src/actions/apiCalls/fetchProducts';

function* getProducts() {
  try {
    const data = yield call(fetchProducts);
    yield put(receiveProducts(data));
  } catch (e) {
    console.log(e);
  }
}

export function* searchProducts() {
  yield takeLatest(REQUEST_PRODUCTS, getProducts);
}

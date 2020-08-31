import { takeLatest, put, call } from 'redux-saga/effects';
import { receiveProducts, REQUEST_LIFESTYLE_PRODUCTS } from 'src/actions/redux';
import { fetchLifestyleProducts } from 'src/actions/apiCalls/fetchProducts';

function* getLifestyleProducts() {
  console.log('lifestyle');
  try {
    const data = yield call(fetchLifestyleProducts);
    yield put(receiveProducts(data));
  } catch (e) {
    console.log(e);
  }
}

export function* searchLifestyleProducts() {
  yield takeLatest(REQUEST_LIFESTYLE_PRODUCTS, getLifestyleProducts);
}

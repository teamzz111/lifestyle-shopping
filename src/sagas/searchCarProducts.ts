import { takeLatest, put, call } from 'redux-saga/effects';
import { receiveProducts, REQUEST_CAR_PRODUCTS } from 'src/actions/redux';
import { fetchCarProducts } from 'src/actions/apiCalls/fetchProducts';

function* getCarsProducts() {
  console.log('cars');
  try {
    const data = yield call(fetchCarProducts);
    yield put(receiveProducts(data));
  } catch (e) {
    console.log(e);
  }
}

export function* searchCarsProducts() {
  yield takeLatest(REQUEST_CAR_PRODUCTS, getCarsProducts);
}

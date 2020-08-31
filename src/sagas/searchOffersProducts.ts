import { takeLatest, put, call } from 'redux-saga/effects';
import { receiveProducts, REQUEST_OFFERS_PRODUCTS } from 'src/actions/redux';
import { fetchOffersProducts } from 'src/actions/apiCalls/fetchProducts';

function* getOfferProducts() {
  try {
    const data = yield call(fetchOffersProducts);
    yield put(receiveProducts(data));
  } catch (e) {
    console.log(e);
  }
}

export function* searchOfferProducts() {
  yield takeLatest(REQUEST_OFFERS_PRODUCTS, getOfferProducts);
}

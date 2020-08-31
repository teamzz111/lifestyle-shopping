import {
  IRequestCarProductsAction,
  IReceiveProductsAction,
} from 'src/state/reducers/productsReducer';

export const REQUEST_CAR_PRODUCTS = 'REQUEST_CAR_PRODUCTS';
export const REQUEST_LIFESTYLE_PRODUCTS = 'REQUEST_LIFESTYLE_PRODUCTS';
export const REQUEST_OFFERS_PRODUCTS = 'REQUEST_OFFERS_PRODUCTS';
export const REQUEST_NEW_PRODUCTS = 'REQUEST_NEW_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestCarProducts = (): IRequestCarProductsAction => ({ type: REQUEST_CAR_PRODUCTS });
export const requestLifestyleProducts = (): IRequestCarProductsAction => ({
  type: REQUEST_LIFESTYLE_PRODUCTS,
});
export const requestOffersProducts = (): IRequestCarProductsAction => ({
  type: REQUEST_OFFERS_PRODUCTS,
});
export const requestNewProducts = (): IRequestCarProductsAction => ({ type: REQUEST_NEW_PRODUCTS });

export const receiveProducts = (products: IProduct[]): IReceiveProductsAction => ({
  type: RECEIVE_PRODUCTS,
  payload: products,
});

import {
  IrequestCarProductsAction,
  IReceiveProductsAction,
} from 'src/state/reducers/productsReducer';

export const REQUEST_CAR_PRODUCTS = 'REQUEST_CAR_PRODUCTS';
export const REQUEST_LIFESTYLE_PRODUCTS = 'REQUEST_LIFESTYLE_PRODUCTS';
export const REQUEST_OFFERS_PRODUCTS = 'REQUEST_OFFERS_PRODUCTS';
export const REQUEST_NEW_PRODUCTS = 'REQUEST_NEW_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestCarProducts = (): IrequestCarProductsAction => ({ type: REQUEST_CAR_PRODUCTS });
export const requestLifestyleProducts = (): IrequestCarProductsAction => ({
  type: REQUEST_LIFESTYLE_PRODUCTS,
});
export const requestOffersProducts = (): IrequestCarProductsAction => ({
  type: REQUEST_OFFERS_PRODUCTS,
});
export const requestNewProducts = (): IrequestCarProductsAction => ({ type: REQUEST_NEW_PRODUCTS });

export const receiveProducts = (products: IProduct[]): IReceiveProductsAction => ({
  type: RECEIVE_PRODUCTS,
  payload: products,
});

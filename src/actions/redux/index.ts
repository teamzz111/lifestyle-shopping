import { IRequestProductsAction, IReceiveProductsAction } from 'src/state/reducers/productsReducer';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

export const requestProducts = (): IRequestProductsAction => ({ type: REQUEST_PRODUCTS });
export const receiveProducts = (products: IProduct[]): IReceiveProductsAction => ({
  type: RECEIVE_PRODUCTS,
  payload: products,
});

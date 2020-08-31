import {
  REQUEST_CAR_PRODUCTS,
  REQUEST_LIFESTYLE_PRODUCTS,
  REQUEST_OFFERS_PRODUCTS,
  REQUEST_NEW_PRODUCTS,
  RECEIVE_PRODUCTS,
} from 'src/actions/redux';

export interface IRequestCarProductsAction {
  type:
    | typeof REQUEST_CAR_PRODUCTS
    | typeof REQUEST_LIFESTYLE_PRODUCTS
    | typeof REQUEST_OFFERS_PRODUCTS
    | typeof REQUEST_NEW_PRODUCTS;
}

export interface IReceiveProductsAction {
  type: typeof RECEIVE_PRODUCTS;
  payload: IProduct[];
}

export type IReceiveProductsActionType = IReceiveProductsAction;

const initialState: IProduct[] = [];

const productsReducer = (
  state: IProduct[] = initialState,
  action: IReceiveProductsActionType
): IProduct[] => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;

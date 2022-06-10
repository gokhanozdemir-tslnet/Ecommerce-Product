
import { PRODUCT_ACTION_TYPE } from './product.action.type'

const INITIAL_PRODUCT = {
    data: {
      products: [],
      error: null,
      loading: false,
    },
}
  

const fetchProductsSuccess = (state, action) => {
  console.log("****userReducer success*****");
  console.log(action.payload);
  return {
    ...state,

    data: {
      products: action.payload,
      error: null,
      loading: false,
    },
  };
};

export const productReducer = (state = INITIAL_PRODUCT , action) => {
  const { type } = action
  switch (type) {
      case PRODUCT_ACTION_TYPE.FETCH_PRODUCTS_SUCCESS:
      return fetchProductsSuccess(state,action);   
    default:
         return state;
  }
}

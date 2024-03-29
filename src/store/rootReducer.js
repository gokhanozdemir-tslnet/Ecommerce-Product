import { combineReducers } from 'redux'
import { productReducer } from './product/productReducer'

export const rootReducer = combineReducers(
  {
    products: productReducer
  }
)

import { PRODUCT_ACTION_TYPE } from './product.action.type'

export const fetchProducts = () => {
  console.log('*******user.actin**** ')

  return {
    type: PRODUCT_ACTION_TYPE.FETCH_PRODUCTS
  }
}

export const fetchProductsSuccess = (products) => {
  console.log('*******user.actin**** success')
  console.log(products)
  return {
    type: PRODUCT_ACTION_TYPE.FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

export const fetchProductsFail = (error) => {
  console.log('*******user.actin**** success')
  console.log(error)
  return {
    type: PRODUCT_ACTION_TYPE.FETCH_PRODUCTS_FAIL,
    payload: error
  }
}

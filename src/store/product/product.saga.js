import ServiceApi from '../../utils/helpers/services/api.service.manager'
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { PRODUCT_ACTION_TYPE } from './product.action.type'
import { fetchProductsFail, fetchProductsSuccess } from './product.action'

export function * fetchProducts (action) {
  console.log('****fetcProductsAsync**')
  try {
    console.log('*****saga fetcProductsAsync******')
    const serviceApi = new ServiceApi()
    const response = yield call(serviceApi.getProductsAsync)
    console.log(response.data)
    yield put(fetchProductsSuccess(response.data))
  } catch (error) {
    console.log('******saga fetchProductsFail ')
    yield put(fetchProductsFail(error))
  }
}

export function * ongetProducts () {
  console.log('****ongetProducts**')
  yield takeLatest(PRODUCT_ACTION_TYPE.FETCH_PRODUCTS, fetchProducts)
}

export function * productSagas () {
  console.log('****productSagas**')
  yield all([
    call(ongetProducts)
  ])
}

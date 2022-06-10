import { all, call } from 'redux-saga/effects'
import { productSagas } from './product/product.saga'

export default function * rootSaga () {
  console.log('*******rootSaga********')
  yield all([call(productSagas)])
}

import { compose, applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './rootReducer'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = [
  sagaMiddleware
]

const composedEnhancers = compose(applyMiddleware(...middleWares))

// const composeEnhancer =
// (process.env.NODE_ENV !== 'production' &&
//   window &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers);

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)


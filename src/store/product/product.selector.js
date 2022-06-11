import { createSelector } from 'reselect'

const getProductsReducer = (state) => {
  console.log('****selector reducer******')
  return state.products
}

export const getProductsMemorized = createSelector(
  [getProductsReducer],
  (productsSlice) => {

    console.log('****getproducts in selector***')
    console.log(productsSlice)
    return productsSlice.data
  }
)

export const getProducts = createSelector(
  [getProductsMemorized],
  (products) => {
    console.log('****getproductsmap in selector***')
    console.log(products)
    return products;
  }
)

// export const getProducts2 = (state) => {
//   console.log('*****selecctorooooooo*****')
//   console.log(state.products.data)
//   return state.products
// }

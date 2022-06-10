import Navigation from './Pages/NavigationPage/Navigation.page'
import './App.scss'
import Home from './Pages/Homepage/Home.page'

import { Route, Routes } from 'react-router-dom'
import Product from './Pages/ProductPage/Product.page'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route index path='/home' element={<Home />} />
        <Route path='/product' element={<Product />} />
      </Route>
    </Routes>

  )
}

export default App

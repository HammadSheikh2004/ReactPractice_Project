import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './features/cart/Cart'
import { Provider } from 'react-redux'
import store from './features/cart/Store'

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/features/cart' element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter>


    </>
  )
}

export default App
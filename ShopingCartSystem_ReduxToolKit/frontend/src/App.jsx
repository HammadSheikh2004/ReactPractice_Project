import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './features/cart/Store'
import Cart from './Components/Cart'
import AuthPage from './Auth/AuthPage'

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/auth' element={<AuthPage />} />
          </Routes>
        </Provider>
      </BrowserRouter>


    </>
  )
}

export default App
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './common/home';
import HomeLayout from './common/layouthome';
import Order from './order/order';
import { store } from './store';


function ErrorPage(){
  return (
    <>
    <h2>404 page not fund</h2>
    </>
  )
}

export default function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
        <Route index element={<Home></Home>} ></Route>
        <Route path='/order' element={<Order />}></Route>
        </Route>
        <Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      
      </BrowserRouter>
 
    </Provider>
    </>
  )
}

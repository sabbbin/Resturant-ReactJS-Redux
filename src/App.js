import React from 'react';
import { Provider } from 'react-redux';
import HomeLayout from './common/layouthome';
import { store } from './store';



export default function App() {
  return (
    <>
    <Provider store={store}>

    <HomeLayout />
    </Provider>
    </>
  )
}

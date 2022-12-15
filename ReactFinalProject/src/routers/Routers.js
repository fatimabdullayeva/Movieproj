import React from 'react';
import { BrowserRouter as Router,  Routes,  Route } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage'
import ListPage from '../pages/ListPage/ListPage';
import BasketPage from '../pages/BasketPage/BasketPage';
import Favorites from '../components/Favorites/Favorites';

function Routers() {
  return (
    <div>
   
      <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path="/list/:id" element={<ListPage/>} />
      <Route path="/basket" element={<BasketPage/>} />
      <Route path='/favorites' element={<Favorites/>}></Route>
      </Routes>
    
  </div>
  )
}

export default Routers
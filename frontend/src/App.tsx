import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

import Layoutclient from './pages/Layout/Layoutclient'
import 'antd/dist/antd.css';
import About from './pages/About/About';
import Products from './pages/ProductList/products';
import Lienhe from './pages/lienhe';
import Cart from './pages/Website/Cart/Cart';
import Pay from './pages/Website/Pay/Pay';
import ErrorsWeb from './pages/404/errorsWeb';


function App() {
  return (
    <Routes>
      <Route path={'/'} element={< Layoutclient />}>
        <Route index element={< Homepage />} />
        <Route path={"/about"} element={< About />} />
        <Route path={"/products"} element={< Products />} />
        <Route path={"/lienhe"} element={< Lienhe />} />
        <Route path='cart' element={<Cart />} />
        <Route path='pay' element={<Pay />} />
      </Route>
      <Route path="*" element={<ErrorsWeb />} />
    </Routes>
  );
}

export default App;

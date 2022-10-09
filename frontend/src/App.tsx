import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from 'express';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layoutclient from './pages/Layout/Layoutclient'
import Products from './components/ProductList/products';


function App() {
  return (

    <Routes>
      <Route path={'/'} element={< Layoutclient />}>
        <Route index element={< Homepage />} />

      </Route>
      <Route path={'/products'} element={< Layoutclient />}>
        <Route index element={< Products />} />

      </Route>
    </Routes>

  );
}

export default App;

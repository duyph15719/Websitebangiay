import React from 'react';
import logo from '.logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layoutclient from './pages/Layout/Layoutclient';
import 'antd/dist/antd.css';

function App() {
  
  return (
<Routes>
  <Route path= {'/'} element ={< Layoutclient />}>
    <Route index element = {< Homepage />} />
  </Route>
</Routes>
  );
}

export default App;

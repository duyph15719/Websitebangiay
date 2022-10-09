import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layoutclient from './pages/Layout/Layoutclient';
import Lienhe from './pages/lienhe';


function App() {
  return (
<Routes>
  <Route path= {'/'} element ={< Layoutclient />}>
    <Route index element = {< Homepage />} />
    <Route path='/Lienhe' element={<Lienhe/>}/>
  </Route>
</Routes>
  );
}

export default App;

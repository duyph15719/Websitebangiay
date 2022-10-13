import React from 'react';


import logo from '.logo.svg';
import './App.css';


import './App.css';


import './App.css';



import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Layoutclient from './pages/Layout/Layoutclient';
import About from './pages/About/About';
import Products from './pages/ProductList/products';
import Lienhe from './pages/lienhe';
import SingInUp from './pages/SingInUp/SingInUp';






function App() {

  return (







    <Routes>
      <Route path={'/'} element={< Layoutclient />}>
        <Route index element={< Homepage />} />

        <Route path={"/about"} element={< About />} />
        <Route path={"/products"} element={< Products />} />

        <Route path='/lienhe' element={<Lienhe/>}/>
        <Route path='/login' element={<SingInUp/>}/>
      </Route>
    </Routes>



  );
}

export default App;

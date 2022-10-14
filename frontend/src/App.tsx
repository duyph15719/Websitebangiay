import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

import Layoutclient from './pages/Layout/Layoutclient'


import 'antd/dist/antd.css';
import About from './pages/About/About';
import Products from './pages/ProductList/products';
import Lienhe from './pages/lienhe';
import { ICategori } from './models/Categories';
import { IUsers } from './models/User';
import { listUser } from './api/User';
import { listCategory } from './api/Categories';
import Cart from './pages/Website/Cart/Cart';
import Pay from './pages/Website/Pay/Pay';
import AdminLayout from './pages/Layout/AdminLayout';
import Dashbroad from './pages/admin/dashbroad';
import Categories from './pages/admin/Categories/Categories';
import CategoriesAdd from './pages/admin/Categories/CategoriesAdd';
import CategoriesEdit from './pages/admin/Categories/CategoriesEdit';
import Users from './pages/admin/User/User';
import UserAdd from './pages/admin/User/UserAdd';
import UserEdit from './pages/admin/User/UserEdit';
import ErrorsWeb from './pages/404/errorsWeb';
import NewsPage from './pages/News/News';
import NewsDetail from './pages/News/Newsdetail';




function App() {
  const [user, setUser] = useState<IUsers[]>([])
  const [categories, setCategories] = useState<ICategori[]>([])

  useEffect(() => {
    const getUser = async () => {
      const { data } = await listUser();
      setUser(data)
    }
    getUser();
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategories(data)
    }
    getCategories();
  }, []);
  return (
    <Routes>
      <Route path={'/'} element={< Layoutclient />}>
        <Route index element={< Homepage />} />
        <Route path={"/about"} element={< About />} />
        <Route path={"/products"} element={< Products />} />
        <Route path={"/lienhe"} element={< Lienhe />} />
        <Route path="news">
            <Route index element={<NewsPage />} />
            {/* <Route path=":_id" element={< NewsDetail/>} /> */}
          </Route>
          <Route path={"/newsdetail"} element={< NewsDetail />} />
        <Route path='cart' element={<Cart />} />
        <Route path='pay' element={<Pay />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Dashbroad />} />
        <Route path="categories">
          <Route index element={<Categories categories={categories} />} />
          <Route path="add" element={<CategoriesAdd />} />
          <Route path=":id/edit" element={<CategoriesEdit />} />
        </Route>
        <Route path="user">
          <Route index element={<Users user={user} />} />
          <Route path="add" element={<UserAdd />} />
          <Route path=":id/edit" element={<UserEdit />} />
        </Route>

      </Route>
      <Route path="*" element={<ErrorsWeb />} />
    </Routes>
  );
}

export default App;

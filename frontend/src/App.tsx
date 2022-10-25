import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layoutclient from "./Layout/Layoutclient";
import "antd/dist/antd.css";
import About from "./pages/About/About";
import Products from "./pages/ProductList/products";
import Lienhe from "./pages/lienhe";
import { ICategori } from "./models/Categories";
import { IUsers } from "./models/User";
import { listUser } from "./api/User";
import { listCategory } from "./api/Categories";
import Cart from "./pages/Website/Cart/Cart";
import Pay from "./pages/Website/Pay/Pay";
import ErrorsWeb from "./pages/404/errorsWeb";
import NewsPage from "./pages/News/News";
import NewsDetail from "./pages/News/Newsdetail";
import Purchased from "./pages/Purchased";

function App() {
  const [user, setUser] = useState<IUsers[]>([]);
  const [categories, setCategories] = useState<ICategori[]>([]);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await listUser();
      setUser(data);
    };
    getUser();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await listCategory();
      setCategories(data);
    };
    getCategories();
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<Layoutclient />}>
        <Route index element={<Homepage />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/products"} element={<Products />} />
        <Route path={"/lienhe"} element={<Lienhe />} />
        <Route path="news">
          <Route index element={<NewsPage />} />
          {/* <Route path=":_id" element={< NewsDetail/>} /> */}
        </Route>
        <Route path={"/newsdetail"} element={<NewsDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pay" element={<Pay />} />
        <Route path="purchased" element={<Purchased />} />
      </Route>
      <Route path="*" element={<ErrorsWeb />} />
    </Routes>
  );
}

export default App;

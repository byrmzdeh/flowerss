import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Add from './pages/Add';
import Basket from './pages/Basket';
import Wishlist from './pages/Wishlist';
import Header from './layouts/Header';
import './sass/style.scss'
import Footer from './layouts/Footer';
import Detail from './pages/Detail';
import MainLayout from './MainLayout';


const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/basket" element={<Basket />}></Route>
          <Route path="/:id" element={<Detail />}></Route>

        </Routes>
        <Footer />
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
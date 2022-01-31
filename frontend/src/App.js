import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Product from "./components/Product";
import LoginPage from "./components/LoginPage";
import ContextWrapper from './context/ContextWrapper'
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
function App() {
  return (
    <Router>
        {/* // <ContextWrapper> */}
        <Header/>
        {/* <Cart/> */}
        <Routes>
          
          {/* <LoginPage/>  */}
          {/* <Content></Content>  */}
          <Route path="/" element={<Content/>}/>
          <Route path="/Product/:id" element={<ProductPage/>}/>
          <Route path="/cart" element={<Cart/>}/>

        </Routes>

        {/* </ContextWrapper> */}
      </Router>
  );
  
}

export default App;

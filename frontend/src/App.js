import React from "react";
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Product from "./components/Product";
import LoginPage from "./components/LoginPage";
function App() {
  return (
    <>
      <LoginPage/>
      <Header/>
      <Content></Content> 
      <Product></Product>
      

    </>
  );
  
}

export default App;

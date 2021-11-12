import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import Products from './components/Products';
import Home from './components/Home';
import AddProducts from './components/AddProducts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'; 
import Header from './components/Header';
import ProductDetail from './components/ProductDeatil';

function App() {


  return (
    <Router>
    <div className="App">
     <Header/>
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
      <Route path="/products">
        <Products/>
      </Route> 
      <Route path="/add-products">
        <AddProducts/>
      </Route>  
      <Route path="/product-detail/:id">
        <ProductDetail/>
      </Route>        
        </Switch>
       
        {/* <AddProducts prodName={prodName} prodDes={prodDes} setProdName={setProdName} setProdDes={setProdDes} productsList={productsList} setProductsList={setProductsList}/> */}
      {/* <Products  productsList={productsList}/>  */}
       
    </div>
    </Router>
  );
}

export default App;

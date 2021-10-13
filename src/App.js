import React, { useState } from 'react';
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
import { useHistory } from 'react-router-dom';

function App() {
  const [prodName, setProdName] = useState('');
  const [prodDes, setProdDes] = useState('');
  const [productsList, setProductsList] = useState([]);

  return (
    <Router>
    <div className="App">
     <Header  productsList={productsList , prodName, prodDes , setProdName , setProdDes, productsList, setProductsList}/>
     <Switch>
       <Route exact path="/">
         <Home productsList={productsList}/>
       </Route>
      <Route path="/products">
        <Products productsList={productsList}/>
      </Route> 
      <Route path="/add-products">
        <AddProducts prodName={prodName} prodDes={prodDes} setProdName={setProdName} setProdDes={setProdDes} productsList={productsList} setProductsList={setProductsList}/>
      </Route>        
        </Switch>
       
        {/* <AddProducts prodName={prodName} prodDes={prodDes} setProdName={setProdName} setProdDes={setProdDes} productsList={productsList} setProductsList={setProductsList}/> */}
      {/* <Products  productsList={productsList}/>  */}
       
    </div>
    </Router>
  );
}

export default App;

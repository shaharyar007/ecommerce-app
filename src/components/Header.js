import React , {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Products from './Products';

const Header = ({productsList}) => {

  return(

 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><Link to="/">My Shop</Link></a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div className="" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
        <a  href="#" className="nav-link" ><Link to='/products'>Products</Link></a>
             <a href="#" className="nav-link"><Link to={
                 {
                     pathname : '/add-products',
                     state: 'prodName, prodDes , setProdName , setProdDes, productsList, setProductsList'
                 }
             }>Add Products</Link></a>
      </div>
    </div>
  </div>
  
  </nav>
  )
}


  

 export default Header;
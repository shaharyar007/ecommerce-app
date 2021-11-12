import React ,  { useContext, useState } from 'react';
import { storeContext } from '../storeContext';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import AddProducts from './AddProducts';
  import Header from './Header';

const Products = () => {
  const products = useContext(storeContext);
  console.log(products);

  return(
      <div className="container">
        <div className="row">
        <h1 className="page-title">Products </h1> 

        </div>
        <div className="row mb-5">
          <div className="col-8 text-start"><b><h5>Total no. of products <span className="badge bg-secondary">{products.productsList.length}</span></h5></b> </div>
          {/* <div className="col-4"> <button className="btn btn-outline-primary" type="button"><Link to="/add-products">Add Products</Link></button></div> */}
        </div>

        <div className="row">
          <div className="col-12 text-start">
            <table  className="table table-striped table-hover">
              <thead>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
              </thead>
              <tbody>
            
              { 
    Object.keys(products.productsList).map((item, i) => (
      <tr>
      <td key={i}>{i+1}</td>
      <td >{ products.productsList[item].name }</td>
      <td >{ products.productsList[item].date }</td>
      <td>{ products.productsList[item].description}</td>
      <td>{ products.productsList[item].price}</td>
      <td><img src={ products.productsList[item].image}  width="30px" height="30px"></img></td>
      </tr>
    ))
}  

                 
              </tbody>
            </table>
             </div>
         
        </div>
        
        </div>
  )
}
 export default Products;
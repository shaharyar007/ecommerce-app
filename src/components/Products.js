import React ,  { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import AddProducts from './AddProducts';
  import Header from './Header';

const Products = ({productsList}) => {

  return(
      <div className="container">
        <div className="row">
        <h1 className="page-title">Products</h1> 

        </div>
        <div className="row mb-5">
          <div className="col-8 text-start"><b><h5>Total no. of products <span className="badge bg-secondary">{productsList.length}</span></h5></b> </div>
          {/* <div className="col-4"> <button className="btn btn-outline-primary" type="button"><Link to="/add-products">Add Products</Link></button></div> */}
        </div>

        <div className="row">
          <div className="col-12 text-start">
            <table  className="table table-striped table-hover">
              <thead>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Description</th>
              </thead>
              <tbody>
            
              { 
    Object.keys(productsList).map((item, i) => (
      <tr>
      <td key={i}>{productsList[item].id}</td>
      <td >{ productsList[item].name }</td>
      <td>{ productsList[item].description}</td>
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
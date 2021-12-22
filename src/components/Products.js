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
  // console.log(JSON.stringify(products));
  // remove product
  const removeProduct = (e) => {
    e.preventDefault();
    const removedID =e.target.dataset.id;
    products.setProductsList(products.productsList.filter(item => item.id != removedID));
  }
  // Edit Product
  // const editProduct = (e) => {
  //     e.preventDefault();
  //     const itemID = e.target.dataset.itemid;
      
  // }
//   const updateName = (e) =>{
//      var en = e.target.defaultValue;
//      var idd =  e.target.dataset.id;
//     //  console.log(idd);
//      var editedItem = products.productsList.filter(item => item.id ==idd);
//      products.setProdName(en);
//     //  editedItem[].name=en;
//     //  console.log(editedItem);
     

//     //  products.setProductsList([      
//     //    ...products.productsList,
//     //    { [e.target.id] : en}
//     //  ])
//  }
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
            <table  className="table">
              <thead>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Date</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
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
            <td><a className="remove_prod" href="" onClick={removeProduct} data-id={products.productsList[item].id}><i className="fas fa-times"></i></a>
            <a className="edit_prod" data-itemid={products.productsList[item].id}><Link to={`/edit-product/${products.productsList[item].id}`}><i className="fas fa-edit"></i></Link></a>
      
    
      </td>
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
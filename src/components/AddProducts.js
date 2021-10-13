import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Products from './Products';


const AddProducts = ({prodName, prodDes , setProdName , setProdDes, productsList, setProductsList}) => {

    var text,des;
    const nameHandler =(e)=>{
         text = e.target.value;
         setProdName(text);
     
    }
    const desHandler=(e)=>{
         des = e.target.value;
         setProdDes(des);
    }
   const submitHandler=(e)=>{
       e.preventDefault();
       setProductsList([
           ...productsList,
           { name: prodName , description: prodDes , id: Math.random()*1000}
       ])
       setProdName('');
       setProdDes('');
   }

  return(
      <div className="container">
        <div className="row">
        <h1 className="page-title">Add Product</h1>       
        </div>
        {/* Form to add products  */}
        <div className="row text-start justify-content-center">
        <div className="col-6">
        <form>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" onChange={nameHandler} value={prodName}></input>          
        </div>
        <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" onChange={desHandler} value={prodDes}></input>
        </div>        
        <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
        </form>
            </div>
        </div>
       
        </div>
  )
}
 export default AddProducts;
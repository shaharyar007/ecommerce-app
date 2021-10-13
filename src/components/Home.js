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

const Home = ({productsList}) => {
    console.log(productsList);
  return(
      <div className='mt-5'>
      
      <div className="container products_list">
      <div className="row mb-5">
          <div className="col-8 text-start"><b><h5>Total no. of products <span className="badge bg-secondary">{productsList.length}</span></h5></b> </div>
          {/* <div className="col-4"> <button className="btn btn-outline-primary" type="button"><Link to="/add-products">Add Products</Link></button></div> */}
        </div>
      <div className="row g-4">
        { 
    Object.keys(productsList).map((item, i) => (      
        <div className="card col-3 mx-2 bg-dark border text-start" key={i}>
        <div className="card-body">
        <small class="card-meta mb-2">Thought Leadership</small>
          <h5 className="card-title mt-0 text-white">{ productsList[item].name }</h5>
          <small className="text-white"><i class="far fa-clock text-white"></i> October 15, 2020</small>
          <p className="card-text text-white">{productsList[item].description}</p>
  
          <div class="card-footer">
           <div class="media">
  {/* <img class="mr-3 rounded-circle" src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/male-512.png" alt="Generic placeholder image" style="max-width:50px" /> */}
  <div class="media-body">
    <h6 class="my-0 text-white d-block text-white">Oz COruhlu</h6>
     <small className="text-white">Director of UI/UX</small>
  </div>
</div>
          </div>
        </div>
      </div>



     
    ))
} 
</div>
      </div>
      </div>
  )
}
 export default Home;
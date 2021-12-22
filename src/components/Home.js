import React ,  { useContext , useState } from 'react';
import { storeContext } from '../storeContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import AddProducts from './AddProducts';
  import Header from './Header';

const Home = () => {
  const products = useContext(storeContext);

  return(
      <div className='mt-5'>
      
      <div className="container products_list">
      <div className="row mb-5">
          <div className="col-8 text-start"><b><h5>Total no. of products <span className="badge bg-secondary">{products.productsList.length}</span></h5></b> </div>
          {/* <div className="col-4"> <button className="btn btn-outline-primary" type="button"><Link to="/add-products">Add Products</Link></button></div> */}
        </div>
      <div className="row g-5">
        { 
    Object.keys(products.productsList).map((item, i) => (      
        <div className="card col-3 mx-2 border text-start" key={i}>
        <a className="card-body"><Link to={`/product-detail/${products.productsList[item].id}`}>
          <h4 className="card-meta mb-2">${products.productsList[item].price}</h4>
          <h5 className="card-title mt-0 text-white">{ products.productsList[item].name }</h5>
          <small className="text-white"><i className="far fa-clock text-white"></i>{products.productsList[item].date}</small>
          <p className="card-text text-white">{products.productsList[item].description}</p>
          {/* <div className="media-body">
          <h6 className="my-0 text-white d-block text-white">Category</h6>
          <small className="text-white">Director of UI/UX</small>
        </div> */}
          <div className="card-footer">
           <div className="media">
      <img className="mr-3 w-100" src={products.productsList[item].image} alt="Generic placeholder image"/>

</div>
          </div>
          </Link>
        </a>
      </div>



     
    ))
} 
</div>
      </div>
      </div>
  )
}
 export default Home;
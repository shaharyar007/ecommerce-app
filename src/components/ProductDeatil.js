import React ,  { useContext, useState } from 'react';
import { storeContext } from '../storeContext';
import { useParams } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from './Header';

const ProductDetail = () => {
  const { id } = useParams();
  const products = useContext(storeContext);

  return(
    <div ClassName="container mt-5 mb-5">
    <div ClassName="row d-flex justify-content-center">
        <div ClassName="col-md-10">
            <div ClassName="card">
            {
                
            products.productsList.filter((item) => item.id == id)
              .map((item) => (
              
           
                <div ClassName="row">
                    <div ClassName="col-md-6">
                        <div ClassName="images p-3">
                            <div ClassName="text-center p-4"> 
                            <img id="main-image" src={item.image} width="250" />
                             </div>
                            {/* <div ClassName="thumbnail text-center"> 
                            <img onclick="change_image(this)" src="https://i.imgur.com/Rx7uKd0.jpg" width="70" />
                            <img onclick="change_image(this)" src="https://i.imgur.com/Dhebu4F.jpg" width="70" /> </div> */}
                        </div>
                    </div>
                    <div ClassName="col-md-6">
                        <div ClassName="product p-4">
                            <div ClassName="d-flex justify-content-between align-items-center">
                                <div ClassName="d-flex align-items-center"> <i ClassName="fa fa-long-arrow-left"></i> <span ClassName="ml-1">Back</span> </div> <i ClassName="fa fa-shopping-cart text-muted"></i>
                            </div>
                            <div ClassName="mt-4 mb-3"> <span ClassName="text-uppercase text-muted brand">Orianz</span>
                                <h5 ClassName="text-uppercase">{item.name}</h5>
                                <div ClassName="price d-flex flex-row align-items-center"> <span ClassName="act-price">$20</span>
                                    <div ClassName="ml-2"> <small ClassName="dis-price">$59</small> <span>40% OFF</span> </div>
                                </div>
                            </div>
                            <p ClassName="about">{item.description}</p>
                            {/* <div ClassName="sizes mt-5">
                                <h6 ClassName="text-uppercase">Size</h6>
                                 <label ClassName="radio"> 
                                 <input type="radio" name="size" value="S" checked> </input>
                                 <span>S</span>
                                  </label>
                                   <label ClassName="radio"> 
                                   <input type="radio" name="size" value="M"></input> <span>M</span> </label>
                                    <label ClassName="radio">
                                         <input type="radio" name="size" value="L"> </input>
                                         <span>L</span> </label> <label ClassName="radio"> 
                                         <input type="radio" name="size" value="XL"> </input>
                                         <span>XL</span> </label> <label ClassName="radio">
                                              <input type="radio" name="size" value="XXL"> </input><span>XXL</span> </label>
                            </div> */}
                            <div ClassNameName="cart mt-4 align-items-center"> <button ClassName="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i ClassName="fa fa-heart text-muted"></i> <i ClassName="fa fa-share-alt text-muted"></i> </div>
                        </div>
                    </div>
                </div> 
                   ))}
            </div>
        </div>
    </div>
</div>

)
}
export default ProductDetail;
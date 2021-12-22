import React ,  { useContext, useState } from 'react';
import { ReactDOM } from 'react';
import { storeContext } from '../storeContext';
import { useParams } from 'react-router-dom';
import './productdetails.css'; 
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

  const addToCart = (e) => {
      const itemId = e.target.dataset.item;
    var cart_item  = products.productsList.filter((item) => item.id == itemId);
    // console.log(itemId);
    // console.log(products.CartList);
      if(itemId == id){
          products.setCartList([
              ...products.CartList,
              ...cart_item 
          ])
      
    }
     
     
  }

  return(
    <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-10">
            <div class="card">
            {
                
            products.productsList.filter((item) => item.id == id)
              .map((item) => (
              
                <div class="row prod_row">
                    <div class="col-md-6">
                        <div class="images">
                            <div class="text-center "> 
                            <img id="main-image" src={item.image} width="250" />
                             </div>
                            {/* <div class="thumbnail text-center"> 
                            <img onclick="change_image(this)" src="https://i.imgur.com/Rx7uKd0.jpg" width="70" />
                            <img onclick="change_image(this)" src="https://i.imgur.com/Dhebu4F.jpg" width="70" /> </div> */}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product p-4">
                           
                            <div class="mt-4 mb-3"> 
                            {/* <span class="text-uppercase text-muted brand">Orianz</span> */}
                                <h5 class="text-uppercase">{item.name}</h5>
                                <div class="price d-flex flex-row align-items-center"> 
                                <span class="act-price">Price : ${item.price}</span>
                                    {/* <div class="ml-2"> <small class="dis-price">$59</small> <span>40% OFF</span> </div> */}
                                </div>
                            </div>
                            <p class="about">Description: {item.description}</p>
                            {/* <div class="sizes mt-5">
                                <h6 class="text-uppercase">Size</h6>
                                 <label class="radio"> 
                                 <input type="radio" name="size" value="S" checked> </input>
                                 <span>S</span>
                                  </label>
                                   <label class="radio"> 
                                   <input type="radio" name="size" value="M"></input> <span>M</span> </label>
                                    <label class="radio">
                                         <input type="radio" name="size" value="L"> </input>
                                         <span>L</span> </label> <label class="radio"> 
                                         <input type="radio" name="size" value="XL"> </input>
                                         <span>XL</span> </label> <label class="radio">
                                              <input type="radio" name="size" value="XXL"> </input><span>XXL</span> </label>
                            </div> */}
                            <div class="cart mt-4 align-items-center">
                         <button class="btn btn-danger text-uppercase mr-2 px-4" data-item={item.id}  onClick={addToCart}>Add to cart</button> </div>
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
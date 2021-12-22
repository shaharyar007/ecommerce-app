import React , {useContext,useState} from 'react';
import { storeContext } from '../storeContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Products from './Products';

const Header = () => {

  const products = useContext(storeContext);

  const removeCartitem = (e) => {
    e.preventDefault();
    const removedID =e.target.dataset.id;
    // const removedItem  = products.CartList.filter((item) => item.id == removedID);
    // products.setCartList(products.CartList.filter(item => item.id != removedID));
  }


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
             <a href="#" className="nav-link"><Link to='/add-products'>Add Products</Link></a>
             <div class="dropdown">
             <a href="#" className="nav-link cart_menu">
                <h4 className="badge bg-secondary mb-0 py-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
 <span className="cart_number">{Object.keys(products.CartList).length}</span></h4> 
 <div className="cart_wrapper">
   <table>
     <thead>
       <th>Product</th>
       <th>Title</th>
       <th>Price</th>
       <th>Qty</th>
       <th>Total</th>
     </thead>
     <tbody>     
         { 
         Object.keys(products.CartList).map((item , i) => (
            <tr>            
            <td  key={i}><div className="cart_remove"><a href="" data-id={products.CartList[item].id} onClick={removeCartitem}><i class="fas fa-times"></i></a><img src={ products.CartList[item].image}  width="50px" height="50px" /></div></td>
            <td>{ products.CartList[item].name }</td>
            <td>${products.CartList[item].price}</td>
            <td></td>
            <td></td>
           
            </tr>
  ))
 }
      
     </tbody>
   </table>
   <button className="btn btn-dark w-100 mt-3">Go To Checkout</button>
   </div>         
               </a>
               </div>
      </div>
    </div>
  </div>
  
  </nav>
  )
}


  

 export default Header;
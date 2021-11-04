import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Products from './Products';
import { storeContext } from '../storeContext';

const AddProducts = () => {
    const user = useContext(storeContext);

    var text,des,imgUrl;
    const nameHandler =(e)=>{
         text = e.target.value;
         user.setProdName(text);
     
    }
    const desHandler=(e)=>{
         des = e.target.value;
         user.setProdDes(des);
    }
   const submitHandler=(e)=>{
       e.preventDefault();
       var d = new Date();
       var datei = d.toLocaleTimeString();
       user.setProductsList([
           ...user.productsList,
           { name: user.prodName , description: user.prodDes , image: user.prodImg , id: Math.random()*1000 , date: datei
           }
       ])
       user.setProdName('');
       user.setProdDes('');
       user.setProdImg('');
   }
    const imgHandler = (e) => {
        var reader = new FileReader();
        reader.onload = function(){
           if(reader.readyState == 2) {
            imgUrl = reader.result;
            user.setProdImg(imgUrl);
            
        }
    }

        reader.readAsDataURL(e.target.files[0]);

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
            <input type="text" className="form-control" onChange={nameHandler} value={user.prodName}></input>          
        </div>
        <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control" onChange={desHandler} value={user.prodDes}></input>
        </div>
        <div className="mb-3">
            <label className="form-label">Upload Product Image</label>
            <input type="file" className="form-control" name="image-upload" accept="image/*" onChange={imgHandler} ></input>
        </div>           
        <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
        </form>
            </div>
        </div>
       
        </div>
  )
}
 export default AddProducts;
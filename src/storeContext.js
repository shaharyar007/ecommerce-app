import React, { createContext, useState } from "react";

export const storeContext = createContext();
export const StoreProvider = ({ children }) => {

   const [prodName, setProdName] = useState('');
   const [prodDes, setProdDes] = useState('');
   const [prodImg , setProdImg] = useState('');
   const [prodDate , setProdDate] = useState('');
   const [prodPrice , setProdPrice] = useState('');
   const [productsList, setProductsList] = useState([]);
   const [CartList, setCartList] = useState([]);
   return(
       <storeContext.Provider
       value={{
               prodName,prodDes,productsList,prodImg,prodDate,prodPrice,CartList,setProdName,setProdDes,setProductsList,setProdImg,setProdDate,setProdPrice,setCartList
           }}
       >
           {children}
       </storeContext.Provider>
   );
};
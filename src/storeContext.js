import React, { createContext, useState } from "react";

export const storeContext = createContext();
export const StoreProvider = ({ children }) => {

   const [prodName, setProdName] = useState('');
   const [prodDes, setProdDes] = useState('');
   const [prodImg , setProdImg] = useState('');
   const [prodDate , setProdDate] = useState('');
   const [productsList, setProductsList] = useState([]);
   return(
       <storeContext.Provider
       value={{
               prodName,prodDes,productsList,prodImg,prodDate,setProdName,setProdDes,setProductsList,setProdImg,setProdDate
           }}
       >
           {children}
       </storeContext.Provider>
   );
};
import { createContext } from "react";
// import all_products from '../assets/all_products'
import { useState } from "react";

export const ShopContext = createContext();





const ShopContextProvider = (props)=>{
    const [islogin , setIsLogin] =useState(false);
    // const contextvalue = {all_products}

  

    return (
        <ShopContext.Provider value={{
            // contextvalue,
            islogin,
            setIsLogin,
        }
        }>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;

import { createContext, useState } from "react";

export const CartContext = createContext(); // creats empty box


 export const CartContextProvider = ({children}) => { 
 
                             // connects App to that box.


const [cart , setCart] = useState(1);

const handleChange = (inc) =>{

setCart(cart + inc);

}
 




 return  (

         <CartContext.Provider value={{cart , handleChange}} >
           
           {children}

         </CartContext.Provider>

 );

};

//Provider = Provides the value

// Consumer = takes the value 
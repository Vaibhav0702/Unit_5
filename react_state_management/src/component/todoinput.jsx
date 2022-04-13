import { useState } from "react";

export const TodoInput = ( { getData } ) =>{

const [ text , setText] = useState(" ");

return(

   <div>

           <input onChange={(e) => {
               setText(e.target.value);
           }} type="text" placeholder="Enter text" />


           <button onClick={() => { getData(text) }}>Add todo</button>


   </div>



);


};
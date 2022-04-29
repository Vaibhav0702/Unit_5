import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { addTodo } from "../Redux/action";



export const Todos = () => {

    // useState:

    const todos = useSelector(store => store.todos);
   
    const dispatch = useDispatch();


    const [text , setText] = useState("");


   const handleADD = () => {

      
    dispatch(addTodo({
        title : text,
        status : false,
    }));



   }


    return <div>

        <input type="text" onChange={(e)=> setText(e.target.value) } />
         
         <button onClick={handleADD}>ADD TODO</button>
        
        {
            todos.map((t)=>(
                <div key={t.title}>{t.title}</div>
            ))
        }

    </div>
}
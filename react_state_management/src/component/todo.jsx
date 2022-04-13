import { useState } from "react";
import { TodoInput } from "./todoinput"
import {TodoItem} from "./todoItem"
import {nanoid} from "nanoid";

function Todo(){

 const [todoList , setTodoList] = useState([]);

const getData = (todo) =>{

  const payload = {
      title :todo,                
      status:false,
      id : nanoid(5),
  }
    
    setTodoList([...todoList,payload]);
}

const handleStatus =(id) =>{

    console.log("id",id);

    // setTodoList([todoList.map(e => e.id ===id ? {...e, status: !e.status }: e)]);
    const newarr = todoList.map(e => {
        if(e.id === id)
        {
            return {...e,
                status: !e.status}
        }
        return e;
    })


    setTodoList(newarr);
    //find this id from todoList
    //toogle its status
    // get new arr set it again
};

return(

    <div>
        <TodoInput getData = {getData} />
        {
            todoList.map((e) => (
                <TodoItem handleStatus = {handleStatus} todo = {e} ></TodoItem>
            ))
        }

    </div>






);





}


export {Todo};
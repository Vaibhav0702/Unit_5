import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getTodos, sort, deleteTodo , toggleTodo } from "../Redux/Todos/action";



export const Todos = () => {

    // useState:

    const todos = useSelector((store) => store.todos.todos);


    const dispatch = useDispatch();


    const [text, setText] = useState("");

    const [filter, setFilter] = useState("");

    const handleADD = () => {

        const payload = {
            title: text,
            status: false,
        };

        fetch("http://localhost:8080/todos", {
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json",
            },
            method: "POST",
        }).then(() => setText("")).then(() => { dispatch(getTodos()) });   // post in database 



        alert("Added to DATA_BASE")

        // dispatch(addTodo({
        //     title: text,
        //     status: false,
        // }));   // save in momery after refresh it will clear



    }


    useEffect(() => {

        dispatch(getTodos());
        // now action is a async function 
    }, [])




    console.log("rendering Todos")

    return <div>


        <input type="text" placeholder="Filter Todos" onChange={e => { setFilter(e.target.value) }} />



        <select onChange={(e) => {
            dispatch(sort(e.target.value));
        }}>
            <option value="id">Sort By Id</option>
            <option value="status">sort By status</option>
            <option value="title">sort By title</option>
        </select>

        <input value={text} type="text" onChange={(e) => setText(e.target.value)} />

        <button onClick={handleADD}>ADD TODO</button>

        {
            todos.filter(todo => todo.title.includes(filter)).map((t) => (
                <div key={t.title}> {t.id} . {t.title} - {t.status ? "Done" : "Not Done"}

                    <button onClick={() => {
                        dispatch(deleteTodo(t.id))
                    }}>Delete</button>

                    <button onClick={() => {
                        dispatch(toggleTodo(t.id))
                    }}>Toggle</button>


                </div>
            ))
        }

    </div>
}







// redux is front-end state management
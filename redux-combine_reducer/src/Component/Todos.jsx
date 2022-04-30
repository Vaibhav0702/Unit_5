import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { addTodo } from "../Redux/Todos/action";



export const Todos = () => {

    // useState:

    const todos = useSelector((store) => store.todos.todos);


    const dispatch = useDispatch();


    const [text, setText] = useState("");


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
        }).then(() => setText("")).then(getData());   // post in database also refresh browser



        alert("Added to DATA_BASE")

        // dispatch(addTodo({
        //     title: text,
        //     status: false,
        // }));   // save in momery after refresh it will clear



    }


    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        fetch("http://localhost:8080/todos").then(x => x.json()).then(data => {
            dispatch(addTodo(data));
        });
    }; // get data from dataBase and show on screen 





    console.log("rendering Todos")

    return <div>

        <input value={text} type="text" onChange={(e) => setText(e.target.value)} />

        <button onClick={handleADD}>ADD TODO</button>

        {
            todos.map((t) => (
                <div key={t.title}>{t.title}</div>
            ))
        }

    </div>
}







// redux is front-end state management
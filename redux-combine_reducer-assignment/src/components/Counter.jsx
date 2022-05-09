import React from "react";

import { Addcounter } from "./Counter.reducer/action";

import { Reducecounter } from "./Counter.reducer/Reducecounter";

// import { store } from "./store";

import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
 
    const dispatch = useDispatch();
    
    const counter = useSelector((store) => store.counter.counter);

    // console.log(state);
    const handleadd = () => {
        dispatch(Addcounter(1));

    }
    const handlereduce = () => {
        dispatch(Reducecounter(1));

    }
    return (
        <>
            <h1>Counter:{counter}</h1>
            <button onClick={handleadd}>ADD</button>
            <button onClick={handlereduce}>reduce</button>
        </>
    )
}
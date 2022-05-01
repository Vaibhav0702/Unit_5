import React from "react";
import { Addcounter, Reducecounter } from "../Redux/action";

import { useDispatch, useSelector } from "react-redux";
export const Counter = () => {
    //const [state, setState]=React.useState(0);
    //const {counter}=store.getState();
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter);

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
            <button onClick={handlereduce}>SUB</button>
        </>
    )
}
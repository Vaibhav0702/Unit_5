
import { CartContext } from "../Context/Cartcontext"


import { useContext } from "react"



export const Cart = () => {


    const { handleChange } = useContext(CartContext);

    return <div style={{

        width: "50%",
        margin: "auto",
        padding: "10px",
        textAlign: "center",
    }}
    >


        <button onClick={() => {


            handleChange(1);

        }} > Add to cart </button>


    </div>




}
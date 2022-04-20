
import { CartContext } from "../Context/Cartcontext";

import { LangContext } from "../Context/LanguageContext";

import { useContext } from "react";

export const NavBar = () => {

    const { cart } = useContext(CartContext); // consumer

    const { lang, handleChange } = useContext(LangContext);

    return <nav style={{
        border: "1px solid red",
        width: "80%",
        margin: "auto",
        padding: "10px",
        display: "flex",
        justifyContent:"space-between",
      
    }}
    >


        {lang === "English" ? "Cart" : "Jhola" } : {cart}



        <button onClick={() => {


            handleChange();

        }} > Change == { lang } </button>

    </nav>



};
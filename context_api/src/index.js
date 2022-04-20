import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { CartContextProvider } from "./Context/Cartcontext.jsx";
import { LangContextProvider } from "./Context/LanguageContext.jsx";
ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <LangContextProvider>
        <App />
      </LangContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

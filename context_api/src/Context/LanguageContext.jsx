
import { createContext, useState } from "react";


export const LangContext = createContext();


export const LangContextProvider = ({ children }) => {

    const [lang, setLang] = useState("English");

    const handleChange = () => {

        setLang(lang === "English" ? "Hindi" : "English");
    }

    return <LangContext.Provider value={{ lang, handleChange }} >{children}</LangContext.Provider>



};
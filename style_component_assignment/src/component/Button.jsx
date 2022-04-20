// import "./button.css"


import styled from "styled-components"

// ----------------------------

// export const Button = ({ children, onClick }) => {

//     return <button onClick={onClick} className="btn">{children}</button>

// };


// -----------------

const Button = styled.button`
background-color: transparent;
border: ${(props)=> props.theme === "blue" ? "none"  : "1px solid red" };
border-radius: 4px;
padding: 8px;
cursor: pointer;
background: ${(props)=> props.theme === "blue" ?  "blue" : "white" };
color:  ${(props)=> props.theme === "blue" ? "white" :  "black" } ;
margin: 10px;

&:hover{
  
  border: ${(props)=> props.theme === "blue" ? "none"  : "2px dashed red" };
  
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
`;



export { Button };
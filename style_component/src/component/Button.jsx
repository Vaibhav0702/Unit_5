
// import "./button.css"


import styled from "styled-components"

// ----------------------------

// export const Button = ({ children, onClick }) => {

//     return <button onClick={onClick} className="btn">{children}</button>

// };


// -----------------

const Button = styled.button`

background-color: transparent;
border: none;
border-radius: 4px;

padding: 8px;
cursor: pointer;


background: ${(props)=> props.theme === "light" ? "teal" : "tomato"};
color: rgb(242, 242, 242);

margin: 10px;

&:hover{
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}


`;

const Div = styled.div`
    border: 1px solid red;
    background: ${(props)=> props.theme === "light" ? "#f4af96" : "teal"};
    width: 40%;
    margin: 10px auto;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
    

`;

export { Button, Div };
import { useState } from 'react';



import './App.css';
import { Button } from "./component/Button";


function App() {

  const [background , setBackground] = useState("blue");







  return (
    <div  theme={background} className="App">

      <h1>Hey Vaibhav</h1>

      <h3>Background is : {background} </h3>

      <Button  theme={background} onClick={() => {
        alert("Clicked Add one")
      }}>Add one</Button>



      <Button theme={background} onClick={() => {
        // alert("Clicked set theme")
        setBackground(background === "blue" ? "white" : "blue");
      }}>Set Background</Button>



      <Button  theme={background} onClick={() => {
        alert("Clicked Styled")
      }}>Styled</Button>

         <Button  theme={background}  
         onClick={() => {
        alert("Clicked click me")
      }}>click me</Button>


    </div>


  );
}

export default App;
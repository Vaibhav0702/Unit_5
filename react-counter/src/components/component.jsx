
import {useState} from "react"


function Counter(props){

  const [ counter , setCount] = useState(0)  // set count function 

  const handleChange = (value) => {
    setCount( counter + value);
  
  }
  
  const double = () =>{
    setCount(counter * 2);
}
    return (
        <div className="counter">
           
          <h3>Counter{counter % 2 === 0 ? <h1 className="even">{counter}</h1>: <h1 className="odd">{counter}</h1> } </h3>

          <button className="btn" onClick = {() => handleChange(1)}  >Add 1</button>
    
          <button className="btn" onClick = {() => handleChange(-1)} >Sub 1</button>

          <button className="btn" onClick={double}>Double</button>
     
          <h3 style = {counter % 2===0?{color:"green"}:{color:"red"}} > Number is {counter % 2 === 0 ? "Even" : "Odd" } </h3>

        </div>
    )
}






export { Counter } 
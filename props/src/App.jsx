
import { useState } from 'react';
import './App.css';
import {Category} from "./components/category";

function App() {

  const navbar = [
   
    {
      image : "https://rukminim2.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
      title : "top offers"
    },
    {
      image : "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
      title : "xxx offers"
    },
    {
      image : "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      title : "offers"
    },
    {
      image : "https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      title : "xxx offers"
    },
  ];

// -----------------------

const [count,setCount] = useState(0); // set count function 

// const handleAdd = () => {

//   if(count>=10)
//   {
//     return;
//   }

//   setCount(count+1)
// };

// const handleSub = () => {

//   if(count<=0)
//  {
//      return;
//   }

//     setCount(count-1)
//   };

// -------

const handleChange = (value) => {
  setCount(count + value);

}

if(count>=10 )
{
  return <h4>count reach max</h4>;
}






  return (
    <div className="App">


       <div className='counter'>
          
          <h3>Counter : { count }</h3>
          <button onClick = {() => handleChange(1)}  >Add 1</button>
    
          <button onClick = {() => handleChange(-1)} >Sub 1</button>
     
          <div>Number is {count % 2 === 0 ? "Even" : "odd" } </div>
        </div>

        <div className='nav'>
          {navbar.map((el)=>(
              <Category image = {el.image} label = {el.title} />
          ))}
        </div>
  


   

    </div>

  );
}

export default App;

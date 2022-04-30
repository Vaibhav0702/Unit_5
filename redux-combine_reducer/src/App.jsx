import './App.css';
import { Counter } from './Component/Counter';
import { Todos } from './Component/Todos';


function App() {

 
  return (
    <div className="App">

      <Counter/>
      <hr/>
      
      <Todos/>

     
    </div>
  );
}

export default App;
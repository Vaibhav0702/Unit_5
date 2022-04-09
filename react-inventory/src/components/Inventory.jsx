import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens: 20,
  });
    // Create add and remove functions here that changes the
    // state.
   
    // console.log(inv);

    const Add = () => {
        setInv({ ...inv, books : inv.books + 1 });  // (...) spread

        // console.log(inv.books);
      };
      const Add2 = () => {
        setInv({ ...inv, notebooks: inv.notebooks + 1 });
      };
      const Add3 = () => {
        setInv({ ...inv, pens: inv.pens + 1 });
      };
      const Add4 = () => {
        setInv({ ...inv, inkpens : inv.inkpens + 1 });
      };
      const Sub = () => {
        if(inv.books===0){
            return  
           }
             
        setInv({ ...inv, books: inv.books - 1 });
        // console.log(inv.books)
      };
      const Sub2 = () => {
        if(inv.notebooks === 0){
         return  
        }
            setInv({ ...inv, notebooks: inv.notebooks - 1 });
            
        
      };
      const Sub3 = () => {
        if(inv.pens===0){
            return  
           }
             
        setInv({ ...inv, pens: inv.pens - 1 });
      };
      const Sub4 = () => {
        if(inv.inkpens===0){
            return  
           }
             
        setInv({ ...inv, inkpens : inv.inkpens - 1 });
      };

      let sum = inv.books + inv.inkpens + inv.notebooks + inv.pens;
    


  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={Add}>+</button>
        <button className="circlularButton" onClick={Sub}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={Add2}>+</button>
        <button className="circlularButton" onClick={Sub2} >-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={Add3}>+</button>
        <button className="circlularButton" onClick={Sub3}>-</button>
        <span>{inv.pens}</span>
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={Add4}>+</button>
        <button className="circlularButton" onClick={Sub4}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {sum} 
    </div>
  );
};
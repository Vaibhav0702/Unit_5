import "./category.css";

function Category({ image , label }){

return (

   <div className="category">
       <img src= {image} alt="" />
       <b className="redtext"> {label} </b>
   </div>

);

}


export { Category };
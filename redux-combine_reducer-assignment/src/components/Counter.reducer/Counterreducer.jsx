import {ADD_COUNTER}from "./action";
import {REDUCE_COUNTER}from "./Reducecounter"


const init={counter:0}

const CounterReducer=(store=init,{type,payload})=>{
     switch(type){
     case ADD_COUNTER:
         return{
             ...store,
             counter:store.counter+payload
         };
        case REDUCE_COUNTER:
            return {
                ...store,
                counter:store.counter-payload
            };
          
            default:
                return store;
   }
}
export {CounterReducer}
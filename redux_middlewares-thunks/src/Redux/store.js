import {
  legacy_createStore as creatStore,
  combineReducers,
  applyMiddleware,
} from "redux"; //redux-toolkit
import { counterReducer } from "./Counter/reducer";
import { todosReducer } from "./Todos/reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  // auth :authReducer,
});

// function middleware(store){

//   return function (next){

//     return function(action){

//     };
//   };

// };


// const middleware1 = (store) => (next) => (action) => {
//   console.log("action", action);

//   if (typeof action === "function") {
//    return action(store.dispatch);
//   }

//   next(action);
// };     //  thunk is provided this entire function no need to write this if we use thunk.





// const middleware2 = (store) => (next) => (action) => {

//   console.log("Entering MW2");

//   next(action)
//   console.log("Exiting MW2");
// }



// currying function  =  function returning a function is currying function
// express : (req,res,next) =>{};



export const store = creatStore(
  rootReducer,
  applyMiddleware(thunk)

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // {counter : 0 , todos : []}





//  store.subscribe(()=>{

// console.log("Subscribe : " , store.getState())

// })

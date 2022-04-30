import { legacy_createStore as creatStore, combineReducers } from "redux"; //redux-toolkit
import { counterReducer } from "./Counter/reducer";
import { todosReducer } from "./Todos/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export const store = creatStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); // {counter : 0 , todos : []}

//  store.subscribe(()=>{

// console.log("Subscribe : " , store.getState())

// })

import { legacy_createStore as createStore, combineReducers } from "redux";

import { TodosReducer } from "./Reducetodos/Todosreducer";


import { CounterReducer } from "./Counter.reducer/Counterreducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
  todos: TodosReducer,
})
export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//{counter:0,todos:[]}

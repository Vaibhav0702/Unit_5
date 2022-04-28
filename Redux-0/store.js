import { legacy_createStore as createStore } from "redux"; // redux-toolkit

import { reducer } from "./reducer";

import { addTodo } from "./action";

// -------

const initState = {
  counter: 0,
  todos: [],
};

// -------

const store = createStore(reducer, initState); //useState(init)

console.log("initial store", store.getState());

store.dispatch({ type: ADD_COUNT, payload: 1 });

console.log("After dispatch", store.getState());

store.dispatch(addTodo("learn redux"));

console.log("After dispatch", store.getState());

store.dispatch(addTodo("learn React"));

console.log("After dispatch", store.getState());

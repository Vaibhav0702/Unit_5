import { ADD_TODO } from "./action";

// store : {counter : 0}

const init = { todos: [] };

export const todosReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      //   return { ...store, todos: [...store.todos, payload] };   // get data from previouse object.
    
      return { ...store, todos: payload }; // get data from data base.
    
      default:
      return store;
  }
};

import { ADD_TODO, DELETE_TODO, SORT, TOGGLE_TODO } from "./action";

// store : {counter : 0}

const init = { todos: [] };

export const todosReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      //   return { ...store, todos: [...store.todos, payload] };   // get data from previouse object OR MEMORY

      return { ...store, todos: payload }; // get data from data base.

    case SORT:
      return {
        ...store,
        todos: [...store.todos].sort((a, b) =>
          a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0
        ),
      };

    case DELETE_TODO:
      return { ...store, todos: store.todos.filter((el) => el.id !== payload) }; // function

    case TOGGLE_TODO:
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === payload ? { ...todo, status: !todo.status } : todo
        ), // function
      };

    default:
      return store;
  }
};

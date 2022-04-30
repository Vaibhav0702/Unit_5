


// Action Types

export const ADD_TODO = "ADD_TODO";

// Action creator


export const addTodo = (data) => {
    return {
      type: ADD_TODO,
      payload: data,
    };
  };
  

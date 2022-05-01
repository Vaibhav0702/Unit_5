// Action Types

export const ADD_TODO = "ADD_TODO";

export const SORT = "SORT";


export const DELETE_TODO = "DELETE_TODO";


export const TOGGLE_TODO = "TOGGLE_TODO";


// Action creator

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const getTodos = () => async (dispatch) => {
  const data = await fetch("http://localhost:8080/todos")
    .then((x) => x.json());

    dispatch(addTodo(data));
}; // get data from dataBase and show on browser



export const sort = (by) => {

  return {
    type :SORT ,
    payload :by ,
  }
}


export const deleteTodo = (id) => {

  return {
    type :DELETE_TODO,
    payload : id,
  }


}


export const toggleTodo = (id) => {

  return {
    type :TOGGLE_TODO,
    payload : id,
  }


}
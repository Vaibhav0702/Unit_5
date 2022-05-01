// {type : "" , payload : ""}

// Action Types

export const ADD_COUNT = "ADD_COUNT";

// Action creator

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};

// dispatch({type : "1" , payload : 1 })

// dispatch({type : "1" , payload : 2 })

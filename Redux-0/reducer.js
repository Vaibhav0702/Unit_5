

// How to update store
const reducer = (store, action) => {
    // --------
    //   if (action.type === "ADD_COUNT") {
    //     return { ...store, counter: store.counter + action.payload };
    //   }
  
    //   if (action.type === "ADD_TODO") {
    //     return { ...store, todos : [...store.todos , action.payload] };
    //   }
  
    //   return { ...store };
  
    //   ----------------better Approach-------------------------
  
    switch (action.type) {
      case ADD_COUNT:
        return { ...store, counter: store.counter + action.payload };
  
      case ADD_TODO:
        return { ...store, todos: [...store.todos, action.payload] };
  
      default:
        return { ...store };
    }
  };
  

  export {reducer};
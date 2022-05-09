import { ADD_TODO } from "./action";

const init = { todos: [] }

const TodosReducer = (store = init, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return { ...store, todos: [store.todos, payload] }
        default:
            return store;
    }
}
export { TodosReducer }
/* eslint-disable react-refresh/only-export-components */
import { createContext , useContext } from "react";


export const TodoContext = createContext({
    todos: [{
        id: 1,
        text: "Sample Todo",
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
});

export const TodoProvider = TodoContext.Provider

export const useTodo  = () => {
    return useContext(TodoContext); 
}




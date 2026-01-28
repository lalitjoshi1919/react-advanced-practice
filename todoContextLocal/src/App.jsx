import './App.css'
import TodoForm from './Component/TodoForm/TodoForm';
import { TodoProvider } from './Context/todoContext';
import { useState } from 'react';
import TodoItem from './Component/TodoItem/TodoItem';

function App() {
  const[todos , setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = ( id , updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  }

  const deleteTodo =(id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  }





  return (
    <>
      <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      { todos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                      )) }
                    </div>
                </div>
            </div>
    </TodoProvider>
    </>
  )
}

export default App

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [showtodos, setShowTodos] = useState(todos);
  const addTodo = (todo) => {
    if (
      !todo.text ||
      /^\s*$/.test(todo.text) ||
      todo.text.length < 1 ||
      todo.text.length > 25
    ) {
      return;
    }
    const newTodos = [todo, ...todos];
    setShowTodos(newTodos);
    setTodos(newTodos);
  };

  const searchTodo = (input) => {
    if (input.length > 0) {
      let searchedTodos = [...todos].filter((todo) =>
        todo.text.toLowerCase().includes(input.toLowerCase())
      );
      setShowTodos(searchedTodos);
    }
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
    });
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const updateTodo = (todoId, newVal) => {
    if (
      !newVal.text ||
      /^\s*$/.test(newVal.text) ||
      newVal.length < 1 ||
      newVal.length > 25
    ) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newVal : item))
    );
  };

  return (
    <div className="to-do-app">
      <h1>My To-Do List</h1>
      <TodoForm onSubmit={addTodo} searchTodo={searchTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        searchTodo={searchTodo}
        showTodos={showtodos}
      />
    </div>
  );
}

export default TodoList;

import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
  searchTodo,
  showTodos,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (val) => {
    updateTodo(edit.id, val);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return (
      <TodoForm edit={edit} onSubmit={submitUpdate} searchTodo={searchTodo} />
    );
  }

  return showTodos.map((todo, index) => (
    <div
      className={todo.isComplete ? "to-do-row complete" : "to-do-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icon">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;

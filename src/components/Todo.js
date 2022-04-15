import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
  myRef,
  handleClickInside,
  clickedOutside,
}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  return (
    <div className="todo-wrapper">
      {todos.map((todo, index) => (
        <div
          className="todo-row-wrapper"
          ref={myRef}
          onClick={handleClickInside}
        >
          <div
            className={
              todo.isComplete
                ? "todo-row complete"
                : edit.id === todo.id && !clickedOutside
                ? "edited-row"
                : "todo-row"
            }
            key={index}
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            {edit.id === todo.id && (
              <TodoForm edit={edit} onSubmit={submitUpdate} />
            )}
            <div
              className="edited-text"
              key={todo.id}
              onClick={() => completeTodo(todo.id)}
            >
              {todo.text}
            </div>
            <div className="icons">
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
        </div>
      ))}
    </div>
  );
}

export default Todo;


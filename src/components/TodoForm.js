import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    //reset the input value every time when it submits
    setInput("");
  };

  return (
    <form
      className={props.edit ? "todo-form update-form" : "todo-form"}
      onSubmit={handleSubmit}
    >
      {props.edit ? (
        <input
          className="todo-input edit"
          type="text"
          placeholder="Update your task"
          value={input}
          name="text"
          onChange={handleChange}
          ref={inputRef}
        />
      ) : (
        <>
          <input
            className="todo-input"
            type="text"
            placeholder="Add a task"
            value={input}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;

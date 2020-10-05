import React from "react";
import "./TodoListIteam.css";

const TodoListIteam = ({ todo, onRemovePressed }) => (
  <div className="todo-iteam-container">
    <h3>{todo.text}</h3>
    <div className="buttons-conatiner">
      <button className="completed-button">Mark As Completed</button>
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.text)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListIteam;

import React from "react";
import "./TodoListItem.css";
import { ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import DeleteForever from "@material-ui/icons/DeleteForever";
import Done from "@material-ui/icons/Done";

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
  <ListItem>
    <ListItemText
      primary={todo.text}
      secondary={new Date(todo.createdAt).toLocaleDateString()}
    ></ListItemText>

    <ListItemIcon>
      {todo.isCompleted ? null : (
        <Done
          onClick={() => onCompletedPressed(todo.id)}
          style={{ color: green[500] }}
          className="completed-button"
        ></Done>
      )}
    </ListItemIcon>
    <ListItemIcon>
      <DeleteForever
        onClick={() => onRemovePressed(todo.id)}
        style={{ color: red[800] }}
        fontSize="small"
      ></DeleteForever>
    </ListItemIcon>
  </ListItem>
);

export default TodoListItem;

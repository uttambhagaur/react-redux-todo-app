import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "./thunks";
import { Fab, ListItem, ListItemIcon } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <ListItem>
      <TextField
        id="standard-basic"
        label="Type your new todo here"
        type="text"
        className="MuiListItemText-root MuiListItemText-multiline"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ListItemIcon>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            const isDuplicateText = todos.some(
              (todo) => todo.text === inputValue
            );
            if (!isDuplicateText) {
              onCreatePressed(inputValue);
              setInputValue("");
            }
          }}
          className="new-todo-button"
        >
          <AddIcon />
        </Fab>
      </ListItemIcon>
    </ListItem>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);

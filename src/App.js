import React from "react";
import TodoList from "./todos/TodoList";
import { Container } from "@material-ui/core";
import "./App.css";

const App = () => (
  <Container maxWidth="sm" style={{ marginTop: "15px" }}>
    <TodoList />
  </Container>
);

export default App;

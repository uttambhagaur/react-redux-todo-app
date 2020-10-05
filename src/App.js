import React from "react";
import TodoList from "./todos/TodoList";
// import logo from './logo.svg';
import "./App.css";

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// const user = { firstName: "uttam", lastName: "Bhagaur" };

// function Clock(props) {
//   return <h1>{props.date.toLocaleTimeString()}</h1>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   tick() {
//     this.setState({ date: new Date() });
//   }
//   componentDidMount() {
//     this.timerId = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }
//   render() {
//     return <h1>{this.state.date.toLocaleTimeString()}</h1>;
//   }
// }

// function Welcome(props) {
//   return (
//     <div>
//       <h1>Hi, {formatName(props.user)}</h1>
//       <Clock date={new Date()} />
//     </div>
//   );
// }

function App() {
  return <TodoList />;
}

export default App;

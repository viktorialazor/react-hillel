import React from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  return (
    <div className="container">
      <Todo />
      <TodoForm />
    </div>
  );
}

export default App;

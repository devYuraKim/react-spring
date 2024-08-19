import { useState } from "react";
import "./App.css";
import "./Components/TodoRowItem";
import TodoTable from "./Components/TodoTable";

const todoList = [
  { rowNumber: 1, rowDescription: "Feed the dog", rowAssigned: "Eric" },
  { rowNumber: 2, rowDescription: "Buy some milk", rowAssigned: "Jason" },
  { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "Irene" },
  { rowNumber: 4, rowDescription: "Plan trip", rowAssigned: "Jessica" },
];

function App() {
  const [todos, setTodos] = useState(todoList);

  function addTodo() {
    setTodos((todos) => [
      ...todos,
      {
        rowNumber: todos.length + 1,
        rowDescription: "new todo item",
        rowAssigned: "user",
      },
    ]);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <TodoTable todos={todos}></TodoTable>
          <button className="btn btn-primary" onClick={addTodo}>
            Add a new todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

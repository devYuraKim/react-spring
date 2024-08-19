import { useState } from "react";
import "./App.css";
import "./Components/TodoRowItem";
import TodoTable from "./Components/TodoTable";
import NewTodoForm from "./Components/NewTodoForm";

const todoList = [
  { rowNumber: 1, rowDescription: "Feed the dog", rowAssigned: "Eric" },
  { rowNumber: 2, rowDescription: "Buy some milk", rowAssigned: "Jason" },
  { rowNumber: 3, rowDescription: "Make Dinner", rowAssigned: "Irene" },
  { rowNumber: 4, rowDescription: "Plan trip", rowAssigned: "Jessica" },
];

function App() {
  const [todos, setTodos] = useState(todoList);
  const [showForm, setShowForm] = useState(false);

  function addTodo(newTodo) {
    setTodos((todos) => [
      ...todos,
      {
        rowNumber: todos.length + 1,
        rowDescription: newTodo.description,
        rowAssigned: newTodo.assigned,
      },
    ]);
  }

  function deleteTodo(rowNumber) {
    setTodos((todos) => todos.filter((todo) => todo.rowNumber !== rowNumber));
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}></TodoTable>
          {!showForm && (
            <button
              className="btn btn-primary mt-3"
              onClick={() => setShowForm((prev) => !prev)}
            >
              Add a new todo
            </button>
          )}
          {showForm && (
            <NewTodoForm addTodo={addTodo} setShowForm={setShowForm} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

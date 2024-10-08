import { useRef } from "react";

function NewTodoForm({ addTodo, setShowForm }) {
  const assigned = useRef();
  const description = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    if (!assigned.current.value.trim() || !description.current.value.trim()) {
      alert("assigned and description cannot be empty");
      return;
    }

    const newTodo = {
      assigned: assigned.current.value,
      description: description.current.value,
    };
    addTodo(newTodo);
    setShowForm(false);

    assigned.current.value = "";
    description.current.value = "";
  }

  function handleReset() {
    assigned.current.value = "";
    description.current.value = "";
  }

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            ref={assigned}
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            ref={description}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3 me-2"
          onClick={handleSubmit}
        >
          Create
        </button>
        <button
          type="button"
          className="btn btn-warning mt-3"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;

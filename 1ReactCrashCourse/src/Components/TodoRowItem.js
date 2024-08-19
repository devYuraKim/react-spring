function TodoRowItem({ rowNumber, rowDescription, rowAssigned, deleteTodo }) {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>

      <td>
        <button className="btn" onClick={() => deleteTodo(rowNumber)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TodoRowItem;

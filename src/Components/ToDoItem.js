import React from "react";
import { Toast } from "react-bootstrap";

function ToDoItem(props) {

  const { toDo, onDelete, onUpdate } = props;

  function removeTask() {
    onDelete(toDo);
  }

  function updateTask() {
    onUpdate(toDo);
  }


  return (
      <Toast onClose={removeTask} className="mt-4" style={{ width: '32rem' }} key={toDo.title}>
        <Toast.Header>
          {toDo.isComplete ? <span className="badge rounded-pill bg-success" onClick={updateTask} pill bg="success">Complete</span>
          : <span  className="badge rounded-pill bg-danger" onClick={updateTask} pill bg="danger">Pending</span>}
          <span className="d-inline-block ms-2 me-auto">{toDo.assignee}</span>
        </Toast.Header>
        <Toast.Body>
          <p className="todo-title">{toDo.name}</p>
          <p className="todo-difficulty">Difficulty: {toDo.difficulty}</p>
        </Toast.Body>
      </Toast>
  )
}

export default ToDoItem;
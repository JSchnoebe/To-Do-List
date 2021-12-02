import { Toast, Badge } from "react-bootstrap";

function ToDoItem(props) {

  const { toDos } = props;

  const updateToDo = () => {
  }

  return (
    <>
    {toDos.map(toDo =>(
      <Toast>
        <Toast.Header>
          {toDo.isComplete ? <Badge className="updateToDoClick1" onClick={updateToDo} onUpdate={updateToDo}pill bg="success">Complete</Badge>
          : <Badge className="updateToDoClick2" onClick={updateToDo} pill bg="danger">Pending</Badge>}
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    )
    )}
    </>
  )
}

export default ToDoItem;
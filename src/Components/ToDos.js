import React from "react";
import { Card } from 'react-bootstrap';

class ToDosClassComponent extends React.Component{
  render(){
    const { toDos } = this.props;
    return(
      <ul>
        {toDos.map(toDo =>(
          <li key={toDo.id}>{toDo.name}</li>
        ))}

      </ul>
    )
  }
}

// export default ToDosClassComponent;



function ToDos(props) {

  const { toDos } = props;

  return(
    <>
    <div className="todoContainer">
    {toDos.map(toDo =>(
    <Card className="mb-2 todo" style={{ width: '18rem'}}>
    <Card.Header as="h1">{toDo.assignee}{toDo.isDone}</Card.Header>
    <Card.Body>
        <Card.Title>{toDo.name}</Card.Title>
      </Card.Body>
      </Card>
    ))}
    </div>
    </>
    )}

export default ToDos;

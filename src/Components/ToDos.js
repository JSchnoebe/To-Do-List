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
    <div class="todo">
    <Card style={{ width: '18rem' }}>
    {toDos.map(toDo =>(
    <>
    <Card.Header as="h1">{toDo.assignee}{toDo.isDone}</Card.Header>
    <Card.Body>
        <Card.Title>{toDo.name}</Card.Title>
      </Card.Body>
    </>
    ))}
  </Card>
  </div>
    )}

export default ToDos;

import React from "react";

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
    <ul>
      {toDos.map(toDo =>(
        <li key={toDo.id}>{toDo.name}</li>
      ))}

    </ul>
  )
}

export default ToDos;

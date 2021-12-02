import React from "react";
import ToDoItem from './ToDoItem';

// class ToDosClassComponent extends React.Component{
//   render(){
//     const { toDos } = this.props;
//     return(
//       <ul>
//         {toDos.map(toDo =>(
//           <li key={toDo.id}>{toDo.name}</li>
//         ))}

//       </ul>
//     )
//   }
// }

// export default ToDosClassComponent;



function ToDos(props) {

  const { data, onDelete, onUpdate } = props;

  return(
    <>
    {data.map(toDo => (
        <ToDoItem toDo={toDo} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </>
    )
}

export default ToDos;

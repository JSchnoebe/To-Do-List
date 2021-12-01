import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import ToDos from './Components/ToDos';
import ToDosForm from './Components/ToDosForm'
import { useState } from 'react';

const data = [
  { name: 'Walk the dog', assignee: 'John', dueDate: '1/15/22', difficulty: 2, isComplete: false},
  { name: 'Take out trash', assignee: 'Amy', dueDate: '1/10/22', difficulty: 1, isComplete: false},
  { name: 'Clean bathrooms', assignee: 'Tim', dueDate: '1/11/22', difficulty: 4, isComplete: true},
  { name: 'Mow lawn', assignee: 'Tim', dueDate: '1/11/22', difficulty: 5, isComplete: true},
  { name: 'Feed pets', assignee: 'Amy', dueDate: '1/14/22', difficulty: 1, isComplete: false}
]
let nextId = 10;

function App() {
  const [toDoItems, setToDoItems] = useState(data);

  function handleSave(formData) {
    const newToDoItem = {
      ...formData,
      id: nextId++,
    };

    const newToDoItems = [
      ...toDoItems,
      newToDoItem,
    ];

    setToDoItems(newToDoItems);
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link className="homelink" to="/">Home</Link>
          </li>
          <li>
            <a className="todolink" href="/toDos">To Do List</a>
          </li>
          <li>
            <a className="loginlink" href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <header>To Do List Manager</header>
      <Switch>
        <Route path="/" exact>
      <Home />
      </Route>
      <Route path="/toDos">
        <ToDosForm onSave={handleSave} />
      <ToDos toDos={toDoItems} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;

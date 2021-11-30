import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import ToDos from './Components/ToDos';

const data = [
  { name: 'Walk the dog', assignee: 'John', dueDate: '1/15/22', difficulty: 2, isComplete: false},
  { name: 'Take out trash', assignee: 'Amy', dueDate: '1/10/22', difficulty: 1, isComplete: false},
  { name: 'Clean bathrooms', assignee: 'Tim', dueDate: '1/11/22', difficulty: 4, isComplete: true},
  { name: 'Mow lawn', assignee: 'Tim', dueDate: '1/11/22', difficulty: 5, isComplete: true},
  { name: 'Feed pets', assignee: 'Amy', dueDate: '1/14/22', difficulty: 1, isComplete: false}
]

function App() {
  return (
    <div className="App">
      <Home />
      <ToDos toDos={data} />
    </div>
  );
}

export default App;

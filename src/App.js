
import './App.css';
import AddItem from './Components/AddItem';
import AddTodo from './Components/AddTodo';
import  TodoList  from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <AddItem/>
      <TodoList/>
    </div>
  );
}

export default App;

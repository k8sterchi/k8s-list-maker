import ToDoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List Application</h1>
      </header>
      <main>
        <ToDoList />
      </main>
    </div>
  );
}

export default App;

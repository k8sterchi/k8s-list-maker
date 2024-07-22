import { useState } from 'react';
import TodoForm from './TodoForm';

function TodoItem(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  // Function to handle the submission of an edited item
  const submitUpdate = (value) => {
    props.editTodoItem(edit.id, value);
    setEdit({ id: null, value: '' });
  };

  // If there's an item to edit, show the TodoForm component
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // Render the list of todo items
  return props.todos.map((item, i) => (
    <div
      className={`todo-row ${item.isComplete ? 'complete' : ''}`}
      key={i}
    >
      <div onClick={() => props.completeTodoItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit({ id: item.id, value: item.text })}> ✏️</p>
        <p onClick={() => props.removeTodoItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default TodoItem;
import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Function to add a todo item
  const addTodoItem = (item) => {
    // Check if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new todo item to the existing array of objects
    const newTodos = [item, ...todos];

    // Update state with the new set of todo items
    setTodos(newTodos);
  };

  // Function to mark todo item as complete
  const completeTodoItem = (id) => {
    // Toggle the completion status of the item
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  // Function to remove a todo item
  const removeTodoItem = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  // Function to edit a todo item
  const editTodoItem = (itemId, newValue) => {
    if (!newValue.text) {
      return;
    }

    // Update the todo item with the new value
    setTodos((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your todo list?</h1>
      <TodoForm onSubmit={addTodoItem} />
      <TodoItem
        todos={todos}
        completeTodoItem={completeTodoItem}
        removeTodoItem={removeTodoItem}
        editTodoItem={editTodoItem}
      />
    </div>
  );
}

export default TodoList;
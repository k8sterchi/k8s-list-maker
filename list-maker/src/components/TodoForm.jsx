import { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if input is empty
    if (!input) return;

    // Pass the new todo item to the parent component via props
    props.onSubmit({
      id: Math.random(Math.floor() * 1000), // Generate a random ID
      text: input, // The text of the todo item
    });

    // Clear the input field after submission
    setInput('');
  };

  // Function to handle input field changes
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Render the form, checking if an "edit" prop is provided to determine the mode
  return !props.edit ? (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Add Todo</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
        />
        <button className="todo-button">Update</button>
      </form>
    </div>
  );
}

export default TodoForm;
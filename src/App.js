import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const API_URL = 'http://localhost:5000/api/todos';

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos
  const getTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  // Add new todo
  const addTodo = async (title) => {
    const res = await axios.post(API_URL, { title });
    setTodos([...todos, res.data]);
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  // Toggle complete
  const toggleComplete = async (id, completed) => {
    const res = await axios.put(`${API_URL}/${id}`, { completed: !completed });
    setTodos(todos.map(todo => (todo._id === id ? res.data : todo)));
  };

  return (
    <div className="App">
      <h1>📝 ToDo App</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleComplete} />
    </div>
  );
}

export default App;

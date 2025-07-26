import React from 'react';

function TodoList({ todos, onDelete, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo._id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <span onClick={() => onToggle(todo._id, todo.completed)} style={{ cursor: 'pointer' }}>
            {todo.title}
          </span>
          <button onClick={() => onDelete(todo._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

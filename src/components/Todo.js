import React, { useState } from 'react';
import TodoForm from './TodoForm';

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
  priorityTodo,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div key={index}>
      <div className='card  w-96 bg-base-100 shadow-xl mx-auto'>
        <div>
          <div className='card-title'>{todo.text}</div>
          <div className='card-title'>{todo.date}</div>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          <button
            className='btn btn-warning'
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            Update
          </button>
          <button className='btn glass' onClick={() => removeTodo(todo.id)}>
            Delete
          </button>
          {todo.isComplete ? (
            <button className='btn btn-info' key={todo.id}>
              Finished
            </button>
          ) : (
            <button
              className='btn btn-info'
              key={todo.id}
              onClick={() => completeTodo(todo.id)}
            >
              Make ToDo Done
            </button>
          )}
          {todo.isImportant ? (
            <button className='btn btn-info' key={todo.id}>
              Important
            </button>
          ) : (
            <button
              className='btn btn-info'
              key={todo.id}
              onClick={() => priorityTodo(todo.id)}
            >
              Not Important
            </button>
          )}
        </div>
      </div>
    </div>
  ));
};

export default Todo;

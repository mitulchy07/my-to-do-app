import React, { useRef, useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [date, setDate] = useState(props.edit ? props.edit.value : '');
  const makedone = false;

  const inputRef = useRef(null);
  const dateRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
    setDate(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      date,
      makedone,
    });
    setInput('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='btn btn-outline'
          />
          <input
            placeholder='Update your item'
            value={date}
            type='date'
            onChange={handleDateChange}
            name='text'
            className='btn btn-outline'
          />
          <button onClick={handleSubmit} className='btn mx-2'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='btn btn-outline my-4'
            ref={inputRef}
          />
          <input
            placeholder='Add a todo'
            value={date}
            type='date'
            onChange={handleDateChange}
            name='date'
            className='btn btn-outline my-4'
            ref={dateRef}
          />
          <button onClick={handleSubmit} className='btn btn-success mx-2'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;

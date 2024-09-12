import React, { useState } from 'react';

const Taskcreate = ({ addTask }) => {
  const [Text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Text.trim()) {
      addTask(Text);
      setText('');
    }


  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={Text}
        onChange={(e) => setText(e.target.value)}/>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Taskcreate;

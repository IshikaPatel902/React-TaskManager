import React from 'react';

const Task = ({ task,complete,deleteT }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input type="checkbox" checked={task.completed} onChange={() => complete(task.id)} className="task-checkbox"/>
      <span className="task-text">{task.text}</span>
      <button onClick={() => deleteT(task.id)} className="delete-button">x</button>
    </li>
  );
};

export default Task;

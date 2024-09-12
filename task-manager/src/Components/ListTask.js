import React from 'react';
import Task from './PerTask';

const List = ({ tasks, complete, deleteT }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} complete={complete} deleteT={deleteT}/>
      ))}
    </ul>
  );
};

export default List;

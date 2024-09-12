import React, { useState, useEffect } from 'react';
import List from './Components/ListTask';
import Taskcreate from './Components/TaskCreate';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const newTask = (text) => {
    const newTask = {
      id: Math.random(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const complete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteT = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <h1>Pending Tasks</h1>
      <Taskcreate addTask={newTask} />
      <List tasks={tasks} complete={complete} deleteT={deleteT} />
    </div>
  );
};

export default App;

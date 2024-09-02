import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import TaskService from './services/TaskService';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await TaskService.getAllTasks();
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import TaskService from '../services/TaskService';

function TaskList({ tasks }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = async () => {
    const newTask = { title: newTaskTitle };
    await TaskService.addTask(newTask);
    setNewTaskTitle('');
  };

  const handleDeleteTask = async (id) => {
    await TaskService.deleteTask(id);
  };

  const handleToggleComplete = async (id) => {
    await TaskService.toggleComplete(id);
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task._id)}
            />
            {task.title}
            <button onClick={() => handleDeleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/tasks';

const TaskService = {
  getAllTasks: () => {
    return axios.get(baseUrl);
  },
  addTask: (task) => {
    return axios.post(baseUrl, task);
  },
  deleteTask: (id) => {
    return axios.delete(`${baseUrl}/${id}`);
  },
  toggleComplete: (id) => {
    return axios.put(`${baseUrl}/${id}`);
  }
};

export default TaskService;

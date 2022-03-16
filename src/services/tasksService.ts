import { AxiosResponse } from 'axios';
import { DataTask, Task } from '../types/Task';
import tasksUri from './configs/tasksUri';

class TasksService {
  async getAllTasks() {
    const response: AxiosResponse<Task[]> = await tasksUri.get('/tasks');
    return response;
  }

  async storeTask({ data }: { data: DataTask}) {
    const response: AxiosResponse<Task[]> = await tasksUri.post('/tasks', data);
    return response;
  }

  async updateTask({ newData }: { newData: Task}) {
    const response: AxiosResponse<Task[]> = await tasksUri.put('/tasks', newData);
    return response;
  }

  async deleteTask(id: string) {
    const response: AxiosResponse<Task[]> = await tasksUri.delete(`/tasks/${id}`);
    return response.data;
  }
}

export default new TasksService();

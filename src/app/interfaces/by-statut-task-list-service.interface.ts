import { Task } from '../model/Task.model';
import { TaskStatus } from '../enums/task-status.enum';

export interface ByStatutTaskListService {
  getTasksByStatus(status: TaskStatus): Task[];
}

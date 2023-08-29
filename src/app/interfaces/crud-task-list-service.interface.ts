import { Task } from '../model/Task.model';

export interface CRUDTaskListService {
  getTaskList(): Task[];
}

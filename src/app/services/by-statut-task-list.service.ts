import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crud-task-list.service';
import { TaskStatus } from '../enums/task-status.enum';
import { Task } from '../model/Task.model';

@Injectable({
  providedIn: 'root',
})
export class ByStatutTaskListService extends CRUDTaskListService {
  getTasksByStatus(status: TaskStatus): Task[] {
    return this.getTaskList().filter((task) => task.state === status);
  }
}

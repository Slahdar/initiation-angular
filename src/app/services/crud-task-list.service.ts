import { Injectable } from '@angular/core';
import { Task } from '../model/Task.model';
import { TaskStatus } from '../enums/task-status.enum';

@Injectable({
  providedIn: 'root',
})
export class CRUDTaskListService {
  private taskList: Task[] = [
    new Task(
      'Tâche 1',
      'Description de la tâche 1',
      TaskStatus.EN_COURS,
      new Date(2023, 8, 28)
    ),
    new Task(
      'Tâche 2',
      'Description de la tâche 2',
      TaskStatus.A_FAIRE,
      new Date(2023, 8, 28)
    ),
    new Task(
      'Tâche 3',
      'Description de la tâche 3',
      TaskStatus.TERMINEE,
      new Date(2023, 8, 28)
    ),
  ];

  getTaskList(): Task[] {
    return this.taskList;
  }
}

import { Injectable } from '@angular/core';
import { CRUDTaskListService } from './crud-task-list.service';
import { ByStatutTaskListService } from './by-statut-task-list.service';
import { TaskStatus } from '../enums/task-status.enum';
import { Task } from '../model/Task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskFacadeService {
  constructor(
    private crudService: CRUDTaskListService,
    private byStatutService: ByStatutTaskListService
  ) {}

  getTaskList(): Task[] {
    return this.crudService.getTaskList();
  }

  getTasksByStatus(status: TaskStatus): Task[] {
    return this.byStatutService.getTasksByStatus(status);
  }
}

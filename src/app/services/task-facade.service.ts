import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CRUDTaskListService } from './crud-task-list.service';
import { ByStatutTaskListService } from './by-statut-task-list.service';
import { Task } from '../model/Task.model';
import { TaskStatus } from '../enums/task-status.enum';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskFacadeService {
  constructor(
    private crudService: CRUDTaskListService,
    private byStatutService: ByStatutTaskListService
  ) {}

  getTaskList(): Observable<Task[]> {
    return this.crudService.getTaskList();
  }

  getTasksByStatus(status: TaskStatus): Observable<Task[]> {
    return this.byStatutService.getTasksByStatus(status);
  }
}

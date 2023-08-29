import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CRUDTaskListService } from './crud-task-list.service';
import { TaskStatus } from '../enums/task-status.enum';
import { Task } from '../model/Task.model';

@Injectable({
  providedIn: 'root',
})
export class ByStatutTaskListService {
  constructor(private crudService: CRUDTaskListService) {}

  getTasksByStatus(status: TaskStatus): Observable<Task[]> {
    return this.crudService
      .getTaskList()
      .pipe(map((tasks) => tasks.filter((task) => task.state === status)));
  }
}

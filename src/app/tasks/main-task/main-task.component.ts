import { Component, OnInit, Input } from '@angular/core';
import { TaskFacadeService } from '../../services/task-facade.service';
import { TaskList } from '../../model/Task-list.model';
import { Observable } from 'rxjs';
import { Task } from '../../model/Task.model';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
})
export class MainTaskComponent implements OnInit {
  taskList$!: Observable<Task[]>;

  constructor(private taskFacade: TaskFacadeService) {}

  ngOnInit(): void {
    this.taskList$ = this.taskFacade.getTaskList();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../../model/Task-list.model';
import { Task } from '../../model/Task.model';
import { TaskStatus } from '../../enums/task-status.enum';
import { TaskFacadeService } from '../../services/task-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() taskList!: Observable<Task[]>;

  constructor() {}

  ngOnInit(): void {}
}

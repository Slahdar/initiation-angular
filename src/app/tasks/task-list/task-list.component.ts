import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from '../../model/Task-list.model';
import { TaskFacadeService } from '../../services/task-facade.service';
import { Task } from '../../model/Task.model';
import { TaskStatus } from '../../enums/task-status.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input() taskList: Task[] = [];

  constructor(private taskFacadeService: TaskFacadeService) {}

  ngOnInit(): void {
    this.taskList = this.taskFacadeService.getTaskList();
  }
}

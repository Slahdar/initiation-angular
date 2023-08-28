import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../model/Task.model';
// import { TaskStatus } from '../enums/task-status.enum';
// import { StatusColorDirective } from '../status-color.directive';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  ngOnInit(): void {}
}

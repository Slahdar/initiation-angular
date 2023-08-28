import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task.model';
import { TaskStatus } from '../enums/task-status.enum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  task!: Task;

  ngOnInit(): void {
    this.task = new Task(
      'Débuter angular',
      'Suivez les étapes du pdf pour compléter cette tâche',
      TaskStatus.A_FAIRE
    );
  }
}

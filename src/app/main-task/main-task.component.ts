import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task.model';
import { TaskStatus } from '../enums/task-status.enum';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
})
export class MainTaskComponent implements OnInit {
  mainTask!: Task;

  ngOnInit(): void {
    this.mainTask = new Task(
      'Tâche principale',
      'Ceci est la description de la tâche principale',
      TaskStatus.EN_COURS
    );
  }
}

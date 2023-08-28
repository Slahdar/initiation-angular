import { Component, OnInit } from '@angular/core';
import { TaskList } from '../model/Task-list.model';
import { Task } from '../model/Task.model';
import { TaskStatus } from '../enums/task-status.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  taskList!: TaskList;

  ngOnInit(): void {
    const tasks: Task[] = [
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

    this.taskList = new TaskList(tasks);
  }
}

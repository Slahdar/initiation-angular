import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/Task.model';
import { TaskStatus } from '../enums/task-status.enum';
import { TaskList } from '../model/Task-list.model';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
})
export class MainTaskComponent implements OnInit {
  @Input() taskList: TaskList;

  constructor() {
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

  ngOnInit(): void {}
}

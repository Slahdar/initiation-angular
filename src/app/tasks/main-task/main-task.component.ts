import { Component, OnInit, Input } from '@angular/core';
import { TaskList } from '../../model/Task-list.model';
import { CRUDTaskListService } from '../../services/crud-task-list.service';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
})
export class MainTaskComponent implements OnInit {
  @Input() taskList!: TaskList;

  constructor(private crudService: CRUDTaskListService) {}

  ngOnInit(): void {
    this.taskList = new TaskList(this.crudService.getTaskList());
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing-module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { MainTaskComponent } from './main-task/main-task.component';
import { DateFormatPipe } from '../date-format.pipe';
import { StatusColorDirective } from '../status-color.directive';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskComponent,
    MainTaskComponent,
    DateFormatPipe,
    StatusColorDirective,
  ],
  imports: [CommonModule, TasksRoutingModule],
})
export class TasksModule {}

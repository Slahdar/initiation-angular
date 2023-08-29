import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAddTaskFormComponent } from './main-add-task-form/main-add-task-form.component';
// import { TaskComponent } from './tasks/task/task.component';
// import { MainTaskComponent } from './tasks/main-task/main-task.component';
// import { TaskListComponent } from './tasks/task-list/task-list.component';
// import { StatusColorDirective } from './status-color.directive';
// import { DateFormatPipe } from './date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainAddTaskFormComponent,
    // TaskComponent,
    // MainTaskComponent,
    // TaskListComponent,
    // StatusColorDirective,
    // DateFormatPipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

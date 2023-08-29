import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskFacadeService } from '../services/task-facade.service';

@Component({
  selector: 'app-main-add-task-form',
  templateUrl: './main-add-task-form.component.html',
  styleUrls: ['./main-add-task-form.component.scss'],
})
export class MainAddTaskFormComponent implements OnInit {
  addTaskForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private TaskFacadeService: TaskFacadeService
  ) {
    this.addTaskForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.subscribeToFormChanges();
  }

  private subscribeToFormChanges(): void {
    this.addTaskForm.valueChanges.subscribe((formData) => {});
  }
}

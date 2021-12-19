import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  @Output() onCreateTask = new EventEmitter();

  taskForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.taskForm = this.formBuilder.group({
      text: ['', [Validators.required, Validators.minLength(5)]],
      date: ['', [Validators.required]],
      reminder: [false],
    });
  }

  getFormControl(name: string) {
    return this.taskForm.get(name) as FormControl;
  }

  submitHandler() {
    this.onCreateTask.emit(this.taskForm.value);
    this.taskForm.reset();
  }

  toggleReminder() {
    const control = this.taskForm.controls['reminder'];

    control.setValue(!control.value);
  }
}

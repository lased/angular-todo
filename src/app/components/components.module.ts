import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { InputComponent } from './input/input.component';

const MODULES = [
  CommonModule,
  FontAwesomeModule,
  ReactiveFormsModule,
  FormsModule,
];

const COMPONENTS = [
  ButtonComponent,
  HeaderComponent,
  TaskComponent,
  TasksComponent,
  TaskFormComponent,
  InputComponent,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ComponentsModule {}

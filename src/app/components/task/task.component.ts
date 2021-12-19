import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Task } from '@app/interfaces';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = {} as Task;
  @Output() onRemove = new EventEmitter();
  @Output() onToggleReminder = new EventEmitter();

  faTimes = faTimes;

  removeTaskHandler(task: Task) {
    this.onRemove.emit(task);
  }

  toggleReminderHandler(task: Task) {
    this.onToggleReminder.emit(task);
    
  }
}

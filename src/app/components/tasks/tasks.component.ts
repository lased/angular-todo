import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from '@app/interfaces';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  @Input() tasks: Task[] = [];
  @Output() onRemoveTask = new EventEmitter();
  @Output() onToggleReminder = new EventEmitter();

  removeTaskHandler(task: Task) {
    this.onRemoveTask.emit(task);
  }

  toggleReminderHandler(task: Task) {
    this.onToggleReminder.emit(task);
  }
}

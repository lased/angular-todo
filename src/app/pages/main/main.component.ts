import { Component, OnInit } from '@angular/core';

import { TaskService } from '@app/services/task.service';
import { Task } from '@app/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  title = 'Список задач';
  tasks: Task[] = [];
  toggleButton: boolean = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  toggleButtonHandler(state: boolean) {
    this.toggleButton = state;
  }

  createTaskHandler(task: Task) {
    this.taskService.createTask(task).subscribe((createdTask) => {
      console.log(this.tasks);

      this.tasks.push(createdTask);
    });
  }

  removeTaskHandler(removableTask: Task) {
    this.taskService.removeTask(removableTask).subscribe((removedTask) => {
      this.tasks = this.tasks.filter((task) => task !== removableTask);
    });
  }

  toggleReminderHandler(task: Task) {
    const updatableTask = { ...task };

    updatableTask.reminder = !updatableTask.reminder;
    this.taskService.updateTask(updatableTask).subscribe((updatedTask) => {
      this.tasks = this.tasks.map((currentTask) =>
        currentTask.id === updatedTask.id ? updatedTask : currentTask
      );
    });
  }
}

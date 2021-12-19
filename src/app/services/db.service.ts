import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import TASKS from '@app/tasks';
import { Connection, Task } from '@app/interfaces';

@Injectable()
export class DbService implements Connection {
  getAll() {
    return of(this.getTasks());
  }

  create(task: Task) {
    const newTask: Task = { ...task };
    const tasks = this.getTasks();

    newTask.id = tasks.length + 1;
    tasks.push(newTask);
    this.setTasks(tasks);

    return of(newTask);
  }

  update(task: Task) {
    const updatedTask: Task = { ...task };
    const tasks = this.getTasks().map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    this.setTasks(tasks);

    return of(updatedTask);
  }

  remove(task: Task) {
    const removed: Task = { ...task };
    const tasks = this.getTasks().filter((task) => task.id !== removed.id);

    this.setTasks(tasks);

    return of(removed);
  }

  private getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') as string) || TASKS;
  }

  private setTasks(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

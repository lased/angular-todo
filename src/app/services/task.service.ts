import { Injectable } from '@angular/core';

import { Task } from '@app/interfaces';
import { DbService } from './db.service';

@Injectable()
export class TaskService {
  constructor(private dbService: DbService) {}

  getTasks() {
    return this.dbService.getAll();
  }

  createTask(creatableTask: Task) {
    return this.dbService.create(creatableTask);
  }

  updateTask(updatableTask: Task) {
    return this.dbService.update(updatableTask);
  }

  removeTask(removableTask: Task) {
    return this.dbService.remove(removableTask);
  }
}

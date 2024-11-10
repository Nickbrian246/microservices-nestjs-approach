import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAllTasks(): string {
    return 'Hello World! DESDE EL SERVICIO DE LAS TASKS';
  }
  getTaskById(): string {
    return 'Hello World! DESDE EL SERVICIO DE LAS TASKS';
  }
  createTask(): string {
    return 'Hello World! DESDE EL SERVICIO DE LAS TASKS';
  }
  updateTaskById(): string {
    return 'Hello World! DESDE EL SERVICIO DE LAS TASKS';
  }
  deleteTaskById(): string {
    return 'Hello World! DESDE EL SERVICIO DE LAS TASKS';
  }
}

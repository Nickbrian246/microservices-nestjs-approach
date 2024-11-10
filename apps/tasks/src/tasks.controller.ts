import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @MessagePattern('tasks.findAll')
  getHello(): string {
    return this.tasksService.getAllTasks();
  }
  @MessagePattern('tasks.getTaskById')
  getTaskById(): string {
    return this.tasksService.getTaskById();
  }
  @MessagePattern('tasks.createTask')
  createTask(): string {
    return this.tasksService.createTask();
  }
  @MessagePattern('tasks.updateTaskById')
  updateTaskById(): string {
    return this.tasksService.updateTaskById();
  }
  @MessagePattern('tasks.deleteTaskById')
  deleteTaskById(): string {
    return this.tasksService.deleteTaskById();
  }
}

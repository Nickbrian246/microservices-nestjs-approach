import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

import { UpdateTaskDto } from './dto/update-task.dto';
import { ClientProxy } from '@nestjs/microservices';
import { HandlerMicroServiceErrors } from '../utils/error-handler';
import { catchError } from 'rxjs';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASKS_CLIENT') private tasksService: ClientProxy,
    private microserviceErrorHandler: HandlerMicroServiceErrors,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.tasksService.send('tasks.createTask', createTaskDto).pipe(
      catchError((err) => {
        throw this.microserviceErrorHandler.handleError(err);
      }),
    );
  }

  findAll() {
    return this.tasksService.send('tasks.findAll', UpdateTaskDto).pipe(
      catchError((err) => {
        throw this.microserviceErrorHandler.handleError(err);
      }),
    );
  }

  findOne(id: number) {
    return this.tasksService.send('tasks.getTaskById', id).pipe(
      catchError((err) => {
        throw this.microserviceErrorHandler.handleError(err);
      }),
    );
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.tasksService.send('tasks.updateTaskById', updateTaskDto).pipe(
      catchError((err) => {
        throw this.microserviceErrorHandler.handleError(err);
      }),
    );
  }

  remove(id: number) {
    return this.tasksService.send('tasks.deleteTaskById', id).pipe(
      catchError((err) => {
        throw this.microserviceErrorHandler.handleError(err);
      }),
    );
  }
}

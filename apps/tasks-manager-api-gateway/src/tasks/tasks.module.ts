import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HandlerMicroServiceErrors } from '../utils/error-handler';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TASKS_CLIENT',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
    UsersModule,
  ],
  controllers: [TasksController],
  providers: [TasksService, HandlerMicroServiceErrors],
})
export class TasksModule {}

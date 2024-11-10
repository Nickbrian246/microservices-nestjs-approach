import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { HandlerMicroServiceErrors } from '../utils/error-handler';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_CLIENT',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  providers: [UsersService, HandlerMicroServiceErrors],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}

import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.createOne')
  createOneUser(@Payload() user: UserDto) {
    console.log({ payload: user });
    return this.usersService.createUser(user);
  }

  @MessagePattern('users.findAll')
  getUsers() {
    return this.usersService.getUsers();
  }

  @MessagePattern('users.getUserById')
  getUserById(@Payload() id: string) {
    console.log(id);

    return this.usersService.getUserById(id);
  }

  @MessagePattern('users.updateUserById')
  updateUserById(@Payload() data: UpdateUserDto) {
    return this.usersService.updateUserById(data.id, data.user);
  }

  @MessagePattern('users.deleteUserById')
  deleteUserById(@Payload() { id }: { id: string }) {
    return this.usersService.deleteUserById(id);
  }
}

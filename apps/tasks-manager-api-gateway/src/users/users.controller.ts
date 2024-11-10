import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user-dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: string) {
    console.log(id);

    return this.userService.getUserById(id);
  }

  @Post()
  createOneUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @Put()
  updateUser(@Body() data: UpdateUserDto) {
    return this.userService.UpdateUserById(data.user, data.id);
  }

  @Delete('/:id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }
}

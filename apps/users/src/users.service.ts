import { Injectable } from '@nestjs/common';
import { ApiSuccessResponse } from './types/api-success-response';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { errorHandler } from './decatorators/erros-handler';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  @errorHandler()
  async createUser(user: UserDto): Promise<ApiSuccessResponse<User>> {
    const data = await this.userRepository.save({ ...user });
    return { data };
  }

  @errorHandler()
  async getUsers(): Promise<ApiSuccessResponse<User[]>> {
    const data = await this.userRepository.find({});
    return { data };
  }

  @errorHandler()
  async getUserById(id: string): Promise<ApiSuccessResponse<User>> {
    const data = await this.userRepository.findOne({
      where: { id: parseInt(id) },
    });

    return { data };
  }

  @errorHandler()
  async updateUserById(
    id: string,
    user: UserDto,
  ): Promise<ApiSuccessResponse<User>> {
    const updateResult = await this.userRepository.update(id, { ...user });

    if (updateResult.affected === 0) {
      throw new Error(`User with id ${id} not found`);
    }
    const data = await this.userRepository.findOne({
      where: { id: parseInt(id) },
    });

    return { data };
  }

  @errorHandler()
  async deleteUserById(id: string): Promise<ApiSuccessResponse<DeleteResult>> {
    const data = await this.userRepository.delete(parseInt(id));
    return { data };
  }
}

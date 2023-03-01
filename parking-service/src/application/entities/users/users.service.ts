import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserBody } from '@infrahttp/dtos/create-user-body';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async validateUser(email: string) {
    return this.userRepository.findOne({ where: { email: email } });
  }

  async createUser(body: CreateUserBody) {
    const hash = await bcrypt.hash(body.password, 10);

    await this.userRepository.save({
      email: body.email,
      name: body.name,
      password: hash,
    });
  }

  async deleteUser(id: number) {
    await this.userRepository.delete(id);
  }
}

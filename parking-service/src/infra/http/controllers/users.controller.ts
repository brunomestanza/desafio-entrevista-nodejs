import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '@application/entities/users/users.service';
import { CreateUserBody } from '@infrahttp/dtos/create-user-body';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async createEstablishment(@Body() body: CreateUserBody) {
    const { email, name, password } = body;

    return this.userService.createUser({
      email,
      name,
      password,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}

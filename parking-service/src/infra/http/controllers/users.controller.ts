import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UsersService } from '@applicationentities/users/users.service';
import { CreateUserBody } from '@infrahttp/dtos/create-user-body';
import { JwtAuthGuard } from '@applicationentities/auth/jwt-auth.guard';

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

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}

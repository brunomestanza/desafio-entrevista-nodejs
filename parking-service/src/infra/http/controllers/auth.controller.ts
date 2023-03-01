import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from '@application/entities/auth/auth.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthBody } from '@infrahttp/dtos/auth-body';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: AuthBody) {
    const user = { ...body };

    return this.authService.login(user);
  }
}

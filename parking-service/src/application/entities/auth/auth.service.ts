import { Injectable, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@applicationentities/users/users.service';
import { AuthBody } from '@infrahttp/dtos/auth-body';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.validateUser(email);

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);

      if (isMatch) {
        const { password, ...result } = user;

        return result;
      }
    }

    return null;
  }

  async login(user: AuthBody) {
    const userData = await this.usersService.validateUser(user.email);

    if (!userData) {
      throw new BadRequestException('No user found with this email.');
    }

    const payload = { email: user.email, sub: userData.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

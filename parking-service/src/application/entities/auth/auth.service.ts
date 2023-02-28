import { Injectable } from '@nestjs/common';
import { UsersService } from '@application/entities/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.validateUser(email);

    if (user && user.password == pass) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }
}

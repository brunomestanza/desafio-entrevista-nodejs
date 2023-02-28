import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/typeorm/database.module';
import { UsersController } from '@infra/http/controllers/users.controller';
import { UsersService } from './users.service';
import { userProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...userProviders, UsersService],
  exports: [...userProviders, UsersService],
})
export class UsersModule {}

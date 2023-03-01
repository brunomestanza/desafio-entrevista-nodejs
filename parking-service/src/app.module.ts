import { Module } from '@nestjs/common';
import { EstablishmentModule } from '@application/entities/establishment/establishment.module';
import { VehicleModule } from '@application/entities/vehicle/vehicle.module';
import { EntryModule } from '@application/entities/entry/entry.module';
import { AuthModule } from '@application/entities/auth/auth.module';
import { UsersModule } from '@applicationentities/users/users.module';

@Module({
  imports: [
    EstablishmentModule,
    VehicleModule,
    EntryModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

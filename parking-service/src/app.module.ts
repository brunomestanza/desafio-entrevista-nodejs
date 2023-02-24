import { Module } from '@nestjs/common';
import { EstablishmentModule } from '@application/entities/establishment/establishment.module';
import { VehicleModule } from '@applicationentities/vehicle/vehicle.module';

@Module({
  imports: [EstablishmentModule, VehicleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

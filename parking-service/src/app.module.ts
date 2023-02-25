import { Module } from '@nestjs/common';
import { EstablishmentModule } from '@application/entities/establishment/establishment.module';
import { VehicleModule } from '@applicationentities/vehicle/vehicle.module';
import { EntryModule } from '@applicationentities/entry/entry.module';

@Module({
  imports: [EstablishmentModule, VehicleModule, EntryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

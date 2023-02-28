import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/typeorm/database.module';
import { VehiclesController } from '@infrahttp/controllers/vehicles.controller';
import { VehicleService } from './vehicle.service';
import { vehicleProviders } from './vehicle.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [VehiclesController],
  providers: [...vehicleProviders, VehicleService],
  exports: [...vehicleProviders, VehicleService],
})
export class VehicleModule {}

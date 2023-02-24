import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/typeorm/database.module';
import { vehicleProviders } from './vehicle.providers';
import { VehicleService } from './vehicle.service';
import { VehiclesController } from '@infrahttp/controllers/vehicles.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [VehiclesController],
  providers: [...vehicleProviders, VehicleService],
})
export class VehicleModule {}

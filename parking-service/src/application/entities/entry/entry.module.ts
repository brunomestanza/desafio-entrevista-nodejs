import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/typeorm/database.module';
import { EstablishmentModule } from '@applicationentities/establishment/establishment.module';
import { VehicleModule } from '@applicationentities/vehicle/vehicle.module';
import { EntryController } from '@infrahttp/controllers/entrys.controller';
import { EntryService } from './entry.service';
import { establishmentProviders } from '@applicationentities/establishment/establishment.providers';
import { vehicleProviders } from '@applicationentities/vehicle/vehicle.providers';
import { entryProviders } from './entry.providers';

@Module({
  imports: [DatabaseModule, EstablishmentModule, VehicleModule],
  controllers: [EntryController],
  providers: [
    ...entryProviders,
    ...establishmentProviders,
    ...vehicleProviders,
    EntryService,
  ],
})
export class EntryModule {}

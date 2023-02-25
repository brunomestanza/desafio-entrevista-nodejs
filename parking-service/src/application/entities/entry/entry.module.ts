import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/typeorm/database.module';
import { entryProviders } from './entry.providers';
import { EntryService } from './entry.service';
import { EntryController } from '@infrahttp/controllers/entrys.controller';
import { establishmentProviders } from '@applicationentities/establishment/establishment.providers';
import { vehicleProviders } from '@applicationentities/vehicle/vehicle.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EntryController],
  providers: [
    ...entryProviders,
    ...establishmentProviders,
    ...vehicleProviders,
    EntryService,
  ],
})
export class EntryModule {}

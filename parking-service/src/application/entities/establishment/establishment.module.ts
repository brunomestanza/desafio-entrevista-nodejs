import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/typeorm/database.module';
import { establishmentProviders } from './establishment.providers';
import { EstablishmentService } from './establishment.service';
import { EstablishmentsController } from '@infra/http/controllers/establishments.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [EstablishmentsController],
  providers: [...establishmentProviders, EstablishmentService],
})
export class EstablishmentModule {}

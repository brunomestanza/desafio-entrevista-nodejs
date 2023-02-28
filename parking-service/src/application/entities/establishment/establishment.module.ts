import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/typeorm/database.module';
import { EstablishmentsController } from '@infra/http/controllers/establishments.controller';
import { establishmentProviders } from './establishment.providers';
import { EstablishmentService } from './establishment.service';

@Module({
  imports: [DatabaseModule],
  controllers: [EstablishmentsController],
  providers: [...establishmentProviders, EstablishmentService],
  exports: [...establishmentProviders, EstablishmentService],
})
export class EstablishmentModule {}

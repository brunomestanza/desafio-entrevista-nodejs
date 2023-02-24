import { Module } from '@nestjs/common';
import { EstablishmentModule } from '@application/entities/establishment/establishment.module';

@Module({
  imports: [EstablishmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

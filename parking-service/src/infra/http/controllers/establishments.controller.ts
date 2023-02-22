import { Controller, Body, Post } from '@nestjs/common';
import { CreateEstablishment } from '@applicationuse-cases/create-establishment';
import { CreateEstablishmentBody } from '@infrahttp/dtos/create-establishment-body';

@Controller('establishments')
export class EstablishmentsController {
  constructor(private createEstablishment: CreateEstablishment) {}

  @Post()
  async createEstablishmentRequest(@Body() body: CreateEstablishmentBody) {
    const {
      name,
      address,
      cnpj,
      phone,
      quantityOfCarsVacancys,
      quantityOfMotorcycleVacancys,
    } = body;

    const { establishment } = await this.createEstablishment.execute({
      name,
      address,
      cnpj,
      phone,
      quantityOfCarsVacancys,
      quantityOfMotorcycleVacancys,
    });

    console.log(establishment);
  }
}

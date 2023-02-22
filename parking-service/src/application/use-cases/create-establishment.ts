import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Establishment } from '@application/entities/establishment';
import { Cnpj } from '@application/entities/establishment/cnpj';
import { Phone } from '@application/entities/establishment/phone';
import { EstablishmentsRepository } from '../repositories/establishments-repository';

interface CreateEstablishmentRequest {
  name: string;
  cnpj: string;
  address: string;
  phone: string;
  quantityOfMotorcycleVacancys: number;
  quantityOfCarsVacancys: number;
}

interface CreateEstablishmentResponse {
  establishment: Establishment;
}

@Injectable()
export class CreateEstablishment {
  constructor(private establishmentRepository: EstablishmentsRepository) {}

  async execute(
    request: CreateEstablishmentRequest,
  ): Promise<CreateEstablishmentResponse> {
    const {
      name,
      cnpj,
      address,
      phone,
      quantityOfMotorcycleVacancys,
      quantityOfCarsVacancys,
    } = request;

    const establishment = new Establishment({
      id: randomUUID(),
      name,
      cnpj: new Cnpj(cnpj),
      address,
      phone: new Phone(phone),
      quantityOfMotorcycleVacancys,
      quantityOfCarsVacancys,
    });

    await this.establishmentRepository.create(establishment);

    return { establishment };
  }
}

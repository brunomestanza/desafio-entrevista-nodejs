import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Establishment } from './establishment.entity';
import { CreateEstablishmentBody } from '@infrahttp/dtos/create-establishment-body';
import { UpdateEstablishmentBody } from '@infrahttp/dtos/update-establishment-body';

@Injectable()
export class EstablishmentService {
  constructor(
    @Inject('ESTABLISHMENT_REPOSITORY')
    private establishmentRepository: Repository<Establishment>,
  ) {}

  async findAllEstablishments(): Promise<Establishment[]> {
    return await this.establishmentRepository.find();
  }

  async findEstablishmentById(id: number): Promise<Establishment[]> {
    return await this.establishmentRepository.findBy({ id: id });
  }

  async createEstablishment(body: CreateEstablishmentBody) {
    await this.establishmentRepository.save({
      name: body.name,
      cnpj: body.cnpj,
      address: body.address,
      phone: body.phone,
      quantityOfMotorcycleVacancys: body.quantityOfMotorcycleVacancys,
      quantityOfCarsVacancys: body.quantityOfCarsVacancys,
    });
  }

  async updateEstablishment(body: UpdateEstablishmentBody) {
    const establishment = await this.establishmentRepository.find({
      where: {
        id: body.id,
      },
    });

    if (!establishment) {
      throw new BadRequestException('No establishment found to update.');
    }

    const newEstablishment = {
      ...establishment[0],
      ...body,
    };

    await this.establishmentRepository.update(
      { id: body.id },
      {
        name: newEstablishment.name,
        cnpj: newEstablishment.cnpj,
        address: newEstablishment.address,
        phone: newEstablishment.phone,
        quantityOfMotorcycleVacancys:
          newEstablishment.quantityOfMotorcycleVacancys,
        quantityOfCarsVacancys: newEstablishment.quantityOfCarsVacancys,
      },
    );
  }

  async deleteEstablishment(id: number) {
    await this.establishmentRepository.delete(id);
  }
}

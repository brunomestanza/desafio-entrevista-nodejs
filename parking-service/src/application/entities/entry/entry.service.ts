import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Entry } from './entry.entity';
import { Establishment } from '@applicationentities/establishment/establishment.entity';
import { Vehicle } from '@applicationentities/vehicle/vehicle.entity';
import { CreateEntryBody } from '@infrahttp/dtos/create-entry-body';
import { UpdateEntryBody } from '@infrahttp/dtos/update-entry-body';

interface CountEntrysAndExitsResponse {
  entrys: number;
  exits: number;
}

@Injectable()
export class EntryService {
  constructor(
    @Inject('ENTRY_REPOSITORY')
    private entryRepository: Repository<Entry>,
    private establishmentRepository: Repository<Establishment>,
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async findAllEntrys(): Promise<Entry[]> {
    return await this.entryRepository.find();
  }

  async findAllEntrysFromEstablishment(
    establishmentId: number,
  ): Promise<Entry[]> {
    return await this.entryRepository.find({
      // where: {
      //   establishment.id: establishmentId,
      // },
    });
  }

  async countEntrysAndExits(): Promise<CountEntrysAndExitsResponse> {
    const entrys = await this.entryRepository.count();
    const vehiclesWithNoExit = await this.entryRepository.count({
      where: {
        exitDate: '',
      },
    });

    return { entrys, exits: entrys - vehiclesWithNoExit };
  }

  async createEntry(body: CreateEntryBody) {
    const establishment = new Establishment();
    establishment.address = 'teste';
    const vehicle = new Vehicle();

    const teste = await this.entryRepository.save({
      establishmentId: establishment,
      vehicleId: vehicle,
      entryDate: String(new Date()),
      exitDate: '',
    });

    console.log(teste.establishmentId);
  }

  async confirmVehicleExit(entryId: number) {
    await this.entryRepository.update(
      { id: entryId },
      { exitDate: String(new Date()) },
    );
  }

  // async updateEstablishment(body: UpdateEstablishmentBody) {
  //   const establishment = await this.establishmentRepository.find({
  //     where: {
  //       id: body.id,
  //     },
  //   });

  //   const newEstablishment = {
  //     ...establishment[0],
  //     ...body,
  //   };

  //   await this.establishmentRepository.update(
  //     { id: body.id },
  //     {
  //       name: newEstablishment.name,
  //       cnpj: newEstablishment.cnpj,
  //       address: newEstablishment.address,
  //       phone: newEstablishment.phone,
  //       quantityOfMotorcycleVacancys:
  //         newEstablishment.quantityOfMotorcycleVacancys,
  //       quantityOfCarsVacancys: newEstablishment.quantityOfCarsVacancys,
  //     },
  //   );
  // }

  // async deleteEstablishment(id: number) {
  //   await this.establishmentRepository.delete(id);
  // }
}

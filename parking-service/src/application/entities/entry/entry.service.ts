import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Entry } from './entry.entity';
import { Establishment } from '@applicationentities/establishment/establishment.entity';
import { Vehicle } from '@applicationentities/vehicle/vehicle.entity';
import { CreateEntryBody } from '@infrahttp/dtos/create-entry-body';

interface CountEntrysAndExitsResponse {
  entrys: number;
  exits: number;
}

@Injectable()
export class EntryService {
  constructor(
    @Inject('ENTRY_REPOSITORY')
    private entryRepository: Repository<Entry>,
    @Inject('ESTABLISHMENT_REPOSITORY')
    private establishmentRepository: Repository<Establishment>,
    @Inject('VEHICLE_REPOSITORY')
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async findAllEntrys(): Promise<Entry[]> {
    return await this.entryRepository.find();
  }

  async findAllEntrysFromEstablishment(
    establishmentId: number,
  ): Promise<Entry[]> {
    console.log('Check point!');
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
    const establishment = await this.establishmentRepository.findOne({
      where: {
        id: body.establishmentId,
      },
    });

    if (!establishment) {
      throw new BadRequestException('No establishment found with given id');
    }

    const vehicle = await this.vehicleRepository.findOne({
      where: {
        id: body.vehicleId,
      },
    });

    if (!vehicle) {
      throw new BadRequestException('No vehicle found with given id');
    }

    await this.entryRepository.save({
      establishment,
      vehicle,
      entryDate: String(new Date()),
      exitDate: '',
    });
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

import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Entry } from './entry.entity';
import { Establishment } from '@application/entities/establishment/establishment.entity';
import { Vehicle } from '@application/entities/vehicle/vehicle.entity';
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
    return await this.entryRepository.findBy({
      establishment: { id: establishmentId },
    });
  }

  async findAllEntrysFromVehicle(vehicleId: number): Promise<Entry[]> {
    return await this.entryRepository.findBy({
      establishment: { id: vehicleId },
    });
  }

  async countEntrysAndExits(): Promise<CountEntrysAndExitsResponse> {
    const entrys = await this.entryRepository.count();
    const vehiclesWithNoExit = await this.entryRepository.countBy({
      exitDate: '',
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

    let quantityOfVacancys: number;

    const quantityOfVehicles = await this.entryRepository.count({
      where: {
        establishment: establishment,
        exitDate: '',
        vehicle: { type: vehicle.type },
      },
    });

    if (vehicle.type === 'Carro') {
      quantityOfVacancys =
        establishment.quantityOfCarsVacancys - quantityOfVehicles;
    } else {
      quantityOfVacancys =
        establishment.quantityOfMotorcycleVacancys - quantityOfVehicles;
    }

    if (quantityOfVacancys <= 0) {
      throw new BadRequestException('No vacancys');
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

  async deleteEntry(id: number) {
    await this.entryRepository.delete(id);
  }
}

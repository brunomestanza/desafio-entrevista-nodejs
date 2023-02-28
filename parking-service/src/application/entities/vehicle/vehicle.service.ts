import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { CreateVehicleBody } from '@infra/http/dtos/create-vehicle-body';
import { UpdateVehicleBody } from '@infra/http/dtos/update-vehicle-body';

@Injectable()
export class VehicleService {
  constructor(
    @Inject('VEHICLE_REPOSITORY')
    private vehiclesRepository: Repository<Vehicle>,
  ) {}

  async findAllVehicles(): Promise<Vehicle[]> {
    return this.vehiclesRepository.find();
  }

  async findVehicleById(id: number): Promise<Vehicle[]> {
    return this.vehiclesRepository.findBy({ id: id });
  }

  async createVehicle(body: CreateVehicleBody) {
    await this.vehiclesRepository.save({
      brand: body.brand,
      model: body.model,
      color: body.color,
      licensePlate: body.licensePlate,
      type: body.type,
    });
  }

  async updateVehicle(body: UpdateVehicleBody) {
    const vehicle = await this.vehiclesRepository.findOne({
      where: { id: body.id },
    });

    if (!vehicle) {
      throw new BadRequestException('No vehicle found to update.');
    }

    const newVehicle = {
      ...vehicle[0],
      ...body,
    };

    await this.vehiclesRepository.update(
      { id: body.id },
      {
        brand: newVehicle.brand,
        model: newVehicle.model,
        color: newVehicle.color,
        licensePlate: newVehicle.licensePlate,
        type: newVehicle.type,
      },
    );
  }

  async deleteVehicle(id: number) {
    await this.vehiclesRepository.delete(id);
  }
}

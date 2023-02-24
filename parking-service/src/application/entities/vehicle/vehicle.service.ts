import { Injectable, Inject } from '@nestjs/common';
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
    const vehicle = await this.vehiclesRepository.find({
      where: {
        id: body.id,
      },
    });

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

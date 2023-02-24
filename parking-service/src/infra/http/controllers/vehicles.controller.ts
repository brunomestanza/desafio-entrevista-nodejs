import {
  Controller,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { VehicleService } from '@application/entities/vehicle/vehicle.service';
import { Vehicle } from '@application/entities/vehicle/vehicle.entity';
import { CreateVehicleBody } from '@infrahttp/dtos/create-vehicle-body';
import { UpdateVehicleBody } from '@infrahttp/dtos/update-vehicle-body';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly establishmentService: VehicleService) {}

  @Get()
  async getEstablishments(): Promise<Vehicle[]> {
    return this.establishmentService.findAllVehicles();
  }

  @Post()
  async createEstablishment(@Body() body: CreateVehicleBody) {
    const { brand, model, color, licensePlate, type } = body;

    return this.establishmentService.createVehicle({
      brand,
      model,
      color,
      licensePlate,
      type,
    });
  }

  @Put()
  async updateEstablisment(@Body() body: UpdateVehicleBody) {
    return this.establishmentService.updateVehicle(body);
  }

  @Delete(':id')
  async deleteVehicle(@Param('id') id: number) {
    return this.establishmentService.deleteVehicle(id);
  }
}

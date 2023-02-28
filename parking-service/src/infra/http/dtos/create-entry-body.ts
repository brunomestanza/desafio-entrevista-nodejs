import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEntryBody {
  @IsNotEmpty({ message: "EstablishmentId can't be null" })
  @IsNumber({}, { message: 'EstablishmentId has to be a number' })
  @ApiProperty({
    description: 'Id do estabelecimento aonde foi feita a entrada do veículo.',
    example: '1',
  })
  establishmentId: number;

  @IsNotEmpty({ message: "VehicleId can't be null" })
  @IsNumber({}, { message: 'VehicleId has to be a number' })
  @ApiProperty({
    description: 'Id do veículo que fez a entrada no estabelecimento.',
    example: '1',
  })
  vehicleId: number;
}

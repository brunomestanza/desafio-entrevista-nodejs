import { IsValidLicensePlate } from '@application/entities/vehicle/LicensePlateValidator';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateVehicleBody {
  @ApiProperty({
    description: 'O Id do veículo a ser atualizado.',
    example: '1',
  })
  id: number;

  @IsString({ message: 'Brand has to be a string' })
  @ApiProperty({
    description: 'A nova marca do veículo.',
    example: 'Audi',
  })
  brand: string;

  @IsString({ message: 'Model has to be a string' })
  @ApiProperty({
    description: 'O novo modelo do veículo.',
    example: 'A6',
  })
  model: string;

  @IsString({ message: 'Color has to be a string' })
  @ApiProperty({
    description: 'A nova cor do veículo.',
    example: 'Azul',
  })
  color: string;

  @IsValidLicensePlate({
    message:
      'LicensePlate format is invalid, please use a valid format, like AAA1234 OR 1234AAA',
  })
  @ApiProperty({
    description: 'A nova placa do veículo.',
    example: 'AAAA-112',
  })
  licensePlate: string;

  @IsString({ message: 'Type has to be a string' })
  @ApiProperty({
    description: 'O novo tipo do veículo.',
    example: 'Esportivo',
  })
  type: string;
}

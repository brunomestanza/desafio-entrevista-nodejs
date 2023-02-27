import { IsValidLicensePlate } from '@application/entities/vehicle/LicensePlateValidator';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVehicleBody {
  @IsNotEmpty({ message: "Brand can't be null" })
  @IsString({ message: 'Brand has to be a string' })
  @ApiProperty({
    description: 'Marca de carro.',
    example: 'Audi',
  })
  brand: string;

  @IsNotEmpty({ message: "Model can't be null" })
  @IsString({ message: 'Model has to be a string' })
  @ApiProperty({
    description: 'Modelo do carro.',
    example: 'A4',
  })
  model: string;

  @IsNotEmpty({ message: "Color can't be null" })
  @IsString({ message: 'Color has to be a string' })
  @ApiProperty({
    description: 'Cor do carro.',
    example: 'Vermelho',
  })
  color: string;

  @IsNotEmpty({ message: "LicensePlate can't be null" })
  @IsValidLicensePlate({
    message:
      'LicensePlate format is invalid, please use a valid format, like AAA1234 OR 1234AAA',
  })
  @ApiProperty({
    description: 'Placa do carro, deve ter formato válido.',
    example: 'AAA-1234',
  })
  licensePlate: string;

  @IsNotEmpty({ message: "Type can't be null" })
  @IsString({ message: 'Type has to be a string' })
  @ApiProperty({
    description: 'Tipo de carro.',
    example: 'Conversível',
  })
  type: string;
}

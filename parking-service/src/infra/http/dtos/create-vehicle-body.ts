import { IsValidLicensePlate } from '@application/entities/vehicle/LicensePlateValidator';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVehicleBody {
  @IsNotEmpty({ message: "Brand can't be null" })
  @IsString({ message: 'Brand has to be a string' })
  brand: string;

  @IsNotEmpty({ message: "Model can't be null" })
  @IsString({ message: 'Model has to be a string' })
  model: string;

  @IsNotEmpty({ message: "Color can't be null" })
  @IsString({ message: 'Color has to be a string' })
  color: string;

  @IsNotEmpty({ message: "LicensePlate can't be null" })
  @IsValidLicensePlate({
    message:
      'LicensePlate format is invalid, please use a valid format, like AAA1234 OR 1234AAA',
  })
  licensePlate: string;

  @IsNotEmpty({ message: "Type can't be null" })
  @IsString({ message: 'Type has to be a string' })
  type: string;
}

import { IsValidLicensePlate } from '@application/entities/vehicle/LicensePlateValidator';
import { IsString } from 'class-validator';

export class UpdateEntryBody {
  id: number;

  @IsString({ message: 'Brand has to be a string' })
  brand: string;

  @IsString({ message: 'Model has to be a string' })
  model: string;

  @IsString({ message: 'Color has to be a string' })
  color: string;

  @IsValidLicensePlate({
    message:
      'LicensePlate format is invalid, please use a valid format, like AAA1234 OR 1234AAA',
  })
  licensePlate: string;

  @IsString({ message: 'Type has to be a string' })
  type: string;
}

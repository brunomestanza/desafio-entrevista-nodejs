import { Min, IsNumber, IsString } from 'class-validator';
import { IsValidCnpj } from '@application/entities/establishment/CnpjValidator';
import { IsValidPhone } from '@application/entities/establishment/PhoneValidator';

export class UpdateEstablishmentBody {
  @IsNumber({}, { message: 'Address has to be a number' })
  id: number;

  @IsString({ message: 'Name has to be a string' })
  name: string;

  @IsValidCnpj({ message: 'CNPJ is in a invalid format' })
  cnpj: string;

  @IsString({ message: 'Address has to be a string' })
  address: string;

  @IsValidPhone({ message: 'Phone is in a invalid format' })
  phone: string;

  @Min(0, {
    message: 'QuantityOfMotorcycleVacancys has to be a positive number',
  })
  quantityOfMotorcycleVacancys: number;

  @Min(0, {
    message: 'QuantityOfCarsVacancys has to be a positive number',
  })
  quantityOfCarsVacancys: number;
}

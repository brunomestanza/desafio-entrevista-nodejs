import { IsNotEmpty, Min, IsString } from 'class-validator';
import { IsValidCnpj } from '@application/entities/establishment/CnpjValidator';
import { IsValidPhone } from '@application/entities/establishment/PhoneValidator';

export class CreateEstablishmentBody {
  @IsNotEmpty({ message: "Name can't be null" })
  @IsString({ message: 'Name has to be a string' })
  name: string;

  @IsNotEmpty({ message: "CNPJ can't be null" })
  @IsValidCnpj({ message: 'CNPJ is in a invalid format' })
  cnpj: string;

  @IsNotEmpty({ message: "Address can't be null" })
  @IsString({ message: 'Address has to be a string' })
  address: string;

  @IsNotEmpty({ message: "Phone can't be null" })
  @IsValidPhone({ message: 'Phone is in a invalid format' })
  phone: string;

  @IsNotEmpty({ message: "QuantityOfMotorcycleVacancys can't be null" })
  @Min(0, {
    message: 'QuantityOfMotorcycleVacancys has to be a positive number',
  })
  quantityOfMotorcycleVacancys: number;

  @IsNotEmpty({ message: "QuantityOfCarsVacancys can't be null" })
  @Min(0, {
    message: 'QuantityOfCarsVacancys has to be a positive number',
  })
  quantityOfCarsVacancys: number;
}

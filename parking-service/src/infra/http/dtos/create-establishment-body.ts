import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Min, IsString } from 'class-validator';
import { IsValidCnpj } from '@application/entities/establishment/CnpjValidator';
import { IsValidPhone } from '@application/entities/establishment/PhoneValidator';

export class CreateEstablishmentBody {
  @IsNotEmpty({ message: "Name can't be null" })
  @IsString({ message: 'Name has to be a string' })
  @ApiProperty({
    description: 'Nome do estabelecimento.',
    example: 'Lojinha do seu Celso',
  })
  name: string;

  @IsNotEmpty({ message: "CNPJ can't be null" })
  @IsValidCnpj({ message: 'CNPJ is in a invalid format' })
  @ApiProperty({
    description: 'CPNJ do estabelecimento, deve ter formato válido.',
    example: '57.042.510/0001-49',
  })
  cnpj: string;

  @IsNotEmpty({ message: "Address can't be null" })
  @IsString({ message: 'Address has to be a string' })
  @ApiProperty({
    description: 'Endereço do estabelecimento.',
    example: 'Rua, número, Bairro, Cidade, Estado, CEP',
  })
  address: string;

  @IsNotEmpty({ message: "Phone can't be null" })
  @IsValidPhone({ message: 'Phone is in a invalid format' })
  @ApiProperty({
    description: 'Telefone do estabelecimento, deve ter formato válido.',
    example: '+55 (12) 98110-6863',
  })
  phone: string;

  @IsNotEmpty({ message: "QuantityOfMotorcycleVacancys can't be null" })
  @Min(0, {
    message: 'QuantityOfMotorcycleVacancys has to be a positive number',
  })
  @ApiProperty({
    description: 'Quantidade de vagas de motos no local.',
    example: '1',
  })
  quantityOfMotorcycleVacancys: number;

  @IsNotEmpty({ message: "QuantityOfCarsVacancys can't be null" })
  @Min(0, {
    message: 'QuantityOfCarsVacancys has to be a positive number',
  })
  @ApiProperty({
    description: 'Quantidade de vagas de carros no local.',
    example: '1',
  })
  quantityOfCarsVacancys: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { Min, IsNumber, IsString } from 'class-validator';
import { IsValidCnpj } from '@application/entities/establishment/CnpjValidator';
import { IsValidPhone } from '@application/entities/establishment/PhoneValidator';

export class UpdateEstablishmentBody {
  @IsNumber({}, { message: 'Id has to be a number' })
  @ApiProperty({
    description: 'O Id do estabelecimento a ser atualizado.',
    example: '1',
  })
  id: number;

  @IsString({ message: 'Name has to be a string' })
  @ApiProperty({
    description: 'O novo nome do estabelecimento.',
    example: 'Armazém do seu Zé',
  })
  name: string;

  @IsValidCnpj({ message: 'CNPJ is in a invalid format' })
  @ApiProperty({
    description: 'O novo CNPJ do estabelecimento.',
    example: '57.042.510/0001-49',
  })
  cnpj: string;

  @IsString({ message: 'Address has to be a string' })
  @ApiProperty({
    description: 'O novo endereço do estabelecimento.',
    example: 'Rua, número, bairro, cidade, estado, CEP',
  })
  address: string;

  @IsValidPhone({ message: 'Phone is in a invalid format' })
  @ApiProperty({
    description: 'O novo telefone do estabelecimento.',
    example: '+55 (12) 98110-6863',
  })
  phone: string;

  @Min(0, {
    message: 'QuantityOfMotorcycleVacancys has to be a positive number',
  })
  @ApiProperty({
    description: 'A nova quantia de vagas de motos do estabelecimento.',
    example: '1',
  })
  quantityOfMotorcycleVacancys: number;

  @Min(0, {
    message: 'QuantityOfCarsVacancys has to be a positive number',
  })
  @ApiProperty({
    description: 'A nova quantia de vagas de carros do estabelecimento.',
    example: '1',
  })
  quantityOfCarsVacancys: number;
}

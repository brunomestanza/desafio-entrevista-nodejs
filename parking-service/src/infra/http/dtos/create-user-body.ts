import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty({ message: "Name can't be null" })
  @IsString({ message: 'Name has to be a string' })
  @ApiProperty({
    description: 'Nome do usuário.',
    example: 'Bruno Mestanza',
  })
  name: string;

  @IsNotEmpty({ message: "Email can't be null" })
  @IsEmail({}, { message: 'Email has to have a valid format' })
  @ApiProperty({
    description: 'Email do usuário.',
    example: 'email@email.com',
  })
  email: string;

  @IsNotEmpty({ message: "Password can't be null" })
  @IsString({ message: 'Password has to be a string' })
  @ApiProperty({
    description: 'Senha do usuário.',
    example: 'senha123',
  })
  password: string;
}

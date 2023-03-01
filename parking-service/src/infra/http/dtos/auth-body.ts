import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AuthBody {
  @IsNotEmpty({ message: "Email can't be null" })
  @ApiProperty({
    description: 'Email do usuário a ser autenticado.',
    example: 'email@email.com',
  })
  email: string;

  @IsNotEmpty({ message: "Password can't be null" })
  @ApiProperty({
    description: 'Senha do usuário a ser autenticado.',
    example: 'senha123',
  })
  password: string;
}

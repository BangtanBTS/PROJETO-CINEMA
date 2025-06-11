// src/usuario/dto/create-usuario.dto.ts
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'O email não pode ser vazio.' })
  @IsEmail({}, { message: 'Forneça um email válido.' })
  email: string;

  @IsOptional()
  @IsString({ message: 'O nome deve ser uma string.' })
  name?: string;

  @IsNotEmpty({ message: 'A senha não pode ser vazia.' })
  @IsString({ message: 'A senha deve ser uma string.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  password: string;
}
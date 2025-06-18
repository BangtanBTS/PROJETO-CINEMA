// src/usuario/dto/update-usuario.dto.ts
import { PartialType } from '@nestjs/mapped-types'; // Mapped-types é geralmente instalado com o NestJS
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
  @IsOptional()
  @IsEmail({}, { message: 'Forneça um email válido.' })
  email?: string;

  @IsOptional()
  @IsString({ message: 'O nome deve ser uma string.' })
  name?: string;

  @IsOptional()
  @IsString({ message: 'A senha deve ser uma string.' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  password?: string;
}
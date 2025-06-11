import { IsString, IsInt, IsOptional, IsDateString } from 'class-validator';

export class UpdateFilmeDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  genero?: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsString()
  classificacaoIndicativa?: string;

  @IsOptional()
  @IsInt()
  duracao?: number;

  @IsOptional()
  @IsDateString()
  dataEstreia?: Date;

  @IsOptional()
  @IsString()
  foto?: string;
}

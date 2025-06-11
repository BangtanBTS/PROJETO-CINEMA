import { IsDateString, IsString, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSessaoDto {
  @IsString()
  filme: string;

  @IsString()
  sala: string;

  @IsDateString()
  horario: string;

  @Type(() => Number)
  @IsNumber()
  valorIngresso: number;

  @IsString()
  idioma: string;

  @IsString()
  formato: string;
}

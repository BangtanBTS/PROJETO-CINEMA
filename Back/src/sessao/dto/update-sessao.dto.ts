import { IsDateString, IsString, IsOptional, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateSessaoDto {
  @IsOptional()
  @IsString()
  filme?: string;

  @IsOptional()
  @IsString()
  sala?: string;

  @IsOptional()
  @IsDateString()
  horario?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  valorIngresso?: number;

  @IsOptional()
  @IsString()
  idioma?: string;

  @IsOptional()
  @IsString()
  formato?: string;
}

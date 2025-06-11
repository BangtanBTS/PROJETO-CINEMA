import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateSalaDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsInt()
  capacidade?: number;

  @IsOptional()
  @IsString()
  tipo?: string;
}

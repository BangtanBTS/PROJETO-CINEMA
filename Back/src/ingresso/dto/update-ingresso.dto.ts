import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdateIngressoDto {
  @IsOptional()
  @IsInt()
  sessaoId?: number;

  @IsOptional()
  @IsString()
  nomeCliente?: string;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  poltrona?: string;

  @IsOptional()
  @IsString()
  pagamento?: string;
}

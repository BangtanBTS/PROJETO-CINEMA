import { IsString, IsInt } from 'class-validator';

export class CreateIngressoDto {
  @IsInt()
  sessaoId: number;

  @IsString()
  nomeCliente: string;

  @IsString()
  cpf: string;

  @IsString()
  poltrona: string;

  @IsString()
  pagamento: string;
}

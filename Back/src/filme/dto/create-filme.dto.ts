import { IsString, IsInt, IsDateString } from 'class-validator';

export class CreateFilmeDto {
  @IsString()
  titulo: string;

  @IsString()
  genero: string;

  @IsString()
  descricao: string;

  @IsString()
  classificacaoIndicativa: string;

  @IsInt()
  duracao: number;

  @IsDateString()
  dataEstreia: Date;

  @IsString()
  foto: string;
}

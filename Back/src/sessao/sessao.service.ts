import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  // Criar uma nova sessão no banco de dados
  async create(createSessaoDto: CreateSessaoDto) {
    console.log("🟢 Entrou no método create da Sessão");
    console.log("Sessão recebida no backend:", createSessaoDto);

    const { filme, sala, horario, valorIngresso, idioma, formato } = createSessaoDto;

    // Encontrar filme pelo nome
    const filmeExistente = await this.prisma.filme.findFirst({
      where: { titulo: filme },
    });

    if (!filmeExistente) {
      throw new Error('Filme não encontrado');
    }

    // Encontrar sala pelo nome
    const salaExistente = await this.prisma.sala.findFirst({
      where: { nome: sala },
    });

    if (!salaExistente) {
      throw new Error('Sala não encontrada');
    }

    // Criar a sessão
    return this.prisma.sessao.create({
      data: {
        horario: new Date(horario),
        valorIngresso,
        idioma,
        formato,
        filme: {
          connect: { id: filmeExistente.id },
        },
        sala: {
          connect: { id: salaExistente.id },
        },
      },
    });
  }

  // Buscar todas as sessões cadastradas
  findAll() {
    return this.prisma.sessao.findMany({
      include: {
        filme: true,
        sala: true,
      },
    });
  }
}

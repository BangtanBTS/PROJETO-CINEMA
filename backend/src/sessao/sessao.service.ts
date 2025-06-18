import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  // Criar uma nova sessão
  async create(createSessaoDto: CreateSessaoDto) {
    console.log("🟢 Entrou no método create da Sessão");
    console.log("Sessão recebida no backend:", createSessaoDto);

    const { filme, sala, horario, valorIngresso, idioma, formato } = createSessaoDto;

    const filmeExistente = await this.prisma.filme.findFirst({ where: { titulo: filme } });
    if (!filmeExistente) throw new NotFoundException('Filme não encontrado');

    const salaExistente = await this.prisma.sala.findFirst({ where: { nome: sala } });
    if (!salaExistente) throw new NotFoundException('Sala não encontrada');

    return this.prisma.sessao.create({
      data: {
        horario: new Date(horario),
        valorIngresso,
        idioma,
        formato,
        filme: { connect: { id: filmeExistente.id } },
        sala: { connect: { id: salaExistente.id } },
      },
    });
  }

  // Buscar todas as sessões
  findAll() {
    return this.prisma.sessao.findMany({
      include: {
        filme: true,
        sala: true,
      },
    });
  }

  // Buscar uma sessão pelo ID
  async findOne(id: number) {
    const sessao = await this.prisma.sessao.findUnique({
      where: { id },
      include: {
        filme: true,
        sala: true,
      },
    });

    if (!sessao) throw new NotFoundException('Sessão não encontrada');
    return sessao;
  }

  // Atualizar sessão
  async update(id: number, dto: UpdateSessaoDto) {
    const { filme, sala, horario, valorIngresso, idioma, formato } = dto;

    const filmeExistente = await this.prisma.filme.findFirst({ where: { titulo: filme } });
    if (!filmeExistente) throw new NotFoundException('Filme não encontrado');

    const salaExistente = await this.prisma.sala.findFirst({ where: { nome: sala } });
    if (!salaExistente) throw new NotFoundException('Sala não encontrada');

    return this.prisma.sessao.update({
      where: { id },
      data: {
        horario: horario ? new Date(horario) : new Date(),
        valorIngresso,
        idioma,
        formato,
        filme: { connect: { id: filmeExistente.id } },
        sala: { connect: { id: salaExistente.id } },
      },
    });
  }

  // Remover sessão
  async remove(id: number) {
    return this.prisma.sessao.delete({
      where: { id },
    });
  }
}

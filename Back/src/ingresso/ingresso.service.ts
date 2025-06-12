import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';

@Injectable()
export class IngressoService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateIngressoDto) {
    const { sessaoId, ...resto } = data;

    return this.prisma.ingresso.create({
      data: {
        ...resto,
        sessao: {
          connect: { id: sessaoId },
        },
      },
    });
  }

  findAll() {
    return this.prisma.ingresso.findMany({
      include: {
        sessao: {
          include: {
            filme: true,
            sala: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const ingresso = await this.prisma.ingresso.findUnique({
      where: { id },
      include: {
        sessao: {
          include: {
            filme: true,
            sala: true,
          },
        },
      },
    });

    if (!ingresso) throw new NotFoundException('Ingresso não encontrado.');
    return ingresso;
  }

  async update(id: number, data: UpdateIngressoDto) {
    const { sessaoId, ...resto } = data;

    return this.prisma.ingresso.update({
      where: { id },
      data: {
        ...resto,
        ...(sessaoId && { sessao: { connect: { id: sessaoId } } }),
      },
    });
  }

  async remove(id: number) {
    return this.prisma.ingresso.delete({
      where: { id },
    });
  }
}

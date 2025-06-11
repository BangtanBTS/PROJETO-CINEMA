import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';

@Injectable()
export class IngressoService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateIngressoDto) {
    return this.prisma.ingresso.create({ data });
  }

  findAll() {
    return this.prisma.ingresso.findMany({
      include: {
        sessao: {
          include: {
            filme: true,
            sala: true
          }
        }
      }
    });
  }

  async findOne(id: number) {
    const ingresso = await this.prisma.ingresso.findUnique({
      where: { id },
      include: {
        sessao: {
          include: {
            filme: true,
            sala: true
          }
        }
      }
    });

    if (!ingresso) throw new NotFoundException('Ingresso não encontrado.');
    return ingresso;
  }

  update(id: number, data: UpdateIngressoDto) {
    return this.prisma.ingresso.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.ingresso.delete({ where: { id } });
  }
}

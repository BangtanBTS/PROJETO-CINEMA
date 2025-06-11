import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.FilmeCreateInput) {
    return this.prisma.filme.create({ data });
  }

  findAll() {
    return this.prisma.filme.findMany();
  }

  findOne(id: number) {
    return this.prisma.filme.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.FilmeUpdateInput) {
    return this.prisma.filme.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.filme.delete({ where: { id } });
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { user } from '@prisma/client'; // 👈 minúsculo

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<user> {
    return this.prisma.user.create({
      data: createUsuarioDto,
    });
  }

  async findAll(): Promise<user[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<user | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado.`);
    }
    return user;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<user> {
    const userExists = await this.prisma.user.findUnique({ where: { id } });
    if (!userExists) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado para atualização.`);
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUsuarioDto,
    });
  }

  async remove(id: number): Promise<user> {
    const userExists = await this.prisma.user.findUnique({ where: { id } });
    if (!userExists) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado para remoção.`);
    }
    return this.prisma.user.delete({
      where: { id },
    });
  }
}

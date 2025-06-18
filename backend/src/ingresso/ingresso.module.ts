import { Module } from '@nestjs/common';
import { IngressoService } from './ingresso.service';
import { IngressoController } from './ingresso.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [IngressoController],
  providers: [IngressoService, PrismaService],
})
export class IngressoModule {}

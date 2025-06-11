import { Module } from '@nestjs/common';
import { SessaoService } from './sessao.service';
import { SessaoController } from './sessao.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [SessaoController],
  providers: [SessaoService, PrismaService],
})
export class SessaoModule {}

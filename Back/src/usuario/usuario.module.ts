// src/usuario/usuario.module.ts
import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
// O PrismaModule já está global, então não precisa importar aqui se você o fez @Global()
// Se não for global, você precisaria importar o PrismaModule aqui:
// import { PrismaModule } from '../prisma/prisma.module';

@Module({
  // imports: [PrismaModule], // Descomente se PrismaModule não for global
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}
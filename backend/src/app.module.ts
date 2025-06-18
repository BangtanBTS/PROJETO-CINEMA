import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FilmeModule } from './filme/filme.module'; 
import { SalaModule } from './sala/sala.module';
import { SessaoModule } from './sessao/sessao.module';
import { IngressoModule } from './ingresso/ingresso.module';

@Module({
  imports: [
    PrismaModule,
    UsuarioModule,
    FilmeModule,
    SalaModule, 
    SessaoModule,
    IngressoModule,// 👈 adicionado corretamente aqui
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

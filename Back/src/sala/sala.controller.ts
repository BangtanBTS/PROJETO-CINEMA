import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';
import { UpdateSalaDto } from './dto/update-sala.dto';

@Controller('salas')
export class SalaController {
  constructor(private readonly salaService: SalaService) {}

  @Post()
  create(@Body() dto: CreateSalaDto) {
    return this.salaService.create(dto);
  }

  @Get()
  findAll() {
    return this.salaService.findAll();
  }

  @Get('name/:nome') // Rota para buscar salas pelo nome
  findByName(@Param('nome') nome: string) {
    return this.salaService.findByName(nome);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSalaDto) {
    return this.salaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salaService.remove(+id);
  }
}

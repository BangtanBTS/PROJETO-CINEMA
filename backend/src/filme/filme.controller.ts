import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { Prisma } from '@prisma/client';

@Controller('filmes')
export class FilmeController {
  constructor(private readonly filmesService: FilmeService) {}

  @Post()
  create(@Body() data: Prisma.FilmeCreateInput) {
    return this.filmesService.create(data);
  }

  @Get()
  findAll() {
    return this.filmesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmesService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.FilmeUpdateInput) {
    return this.filmesService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmesService.remove(Number(id));
  }
}

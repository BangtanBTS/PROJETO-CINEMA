import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngressoService } from './ingresso.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';
import { UpdateIngressoDto } from './dto/update-ingresso.dto';

@Controller('ingressos')
export class IngressoController {
  constructor(private readonly ingressoService: IngressoService) {}

  @Post()
  create(@Body() data: any) {
    return this.ingressoService.create(data);
  }

  @Get()
  findAll() {
    return this.ingressoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingressoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateIngressoDto) {
    return this.ingressoService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingressoService.remove(+id);
  }
}

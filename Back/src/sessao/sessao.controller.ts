import { Controller, Get, Post, Body } from '@nestjs/common';
import { SessaoService } from './sessao.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';

@Controller('sessoes')
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @Post()
  create(@Body() createSessaoDto: CreateSessaoDto) {
    return this.sessaoService.create(createSessaoDto);
  }

  @Get()
  findAll() {
    return this.sessaoService.findAll();
  }
}

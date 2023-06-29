import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { IMarca } from './model/marcas.interface';
import { AuthGuard } from '../auth/auth.guard';

@Controller('marcas')
export class MarcasController {
  constructor(private readonly marcasService: MarcasService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createMarcaDto: IMarca) {
    return this.marcasService.create(createMarcaDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.marcasService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marcasService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateMarcaDto: IMarca) {
    return this.marcasService.update(id, updateMarcaDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marcasService.remove(id);
  }
}

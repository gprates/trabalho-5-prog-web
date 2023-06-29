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
import { ModelosService } from './modelos.service';
import { IModelo } from './model/modelos.interface';
import { AuthGuard } from '../auth/auth.guard';

@Controller('modelos')
export class ModelosController {
  constructor(private readonly modelosService: ModelosService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createModeloDto: IModelo) {
    return this.modelosService.create(createModeloDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.modelosService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modelosService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateModeloDto: IModelo) {
    return this.modelosService.update(id, updateModeloDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modelosService.remove(id);
  }
}

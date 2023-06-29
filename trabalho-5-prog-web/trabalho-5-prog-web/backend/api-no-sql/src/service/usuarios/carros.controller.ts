import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CarrosService } from './carros.service';
import { ICarro } from './model/carros.interface';
import { AuthGuard } from '../auth/auth.guard';

@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createCarroDTO: ICarro) {
    return this.carrosService.create(createCarroDTO);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.carrosService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carrosService.findOne(id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCarroDTO: ICarro) {
    return this.carrosService.update(id, updateCarroDTO);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carrosService.remove(id);
  }
}

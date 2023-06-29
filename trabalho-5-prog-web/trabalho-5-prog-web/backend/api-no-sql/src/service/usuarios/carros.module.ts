import { Module } from '@nestjs/common';
import { CarrosService } from './carros.service';
import { CarrosController } from './carros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarroSchema } from './model/carros.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Carros', schema: CarroSchema }]),
  ],
  controllers: [CarrosController],
  providers: [CarrosService],
})
export class CarrosModule {}

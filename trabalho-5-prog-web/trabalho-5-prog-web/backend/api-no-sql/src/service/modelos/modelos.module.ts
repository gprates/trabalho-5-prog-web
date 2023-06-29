import { Module } from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { ModelosController } from './modelos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ModeloSchema } from './model/modelos.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Modelos', schema: ModeloSchema }]),
  ],
  controllers: [ModelosController],
  providers: [ModelosService],
})
export class ModelosModule {}

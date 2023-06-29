import { Module } from '@nestjs/common';
import { MarcasService } from './marcas.service';
import { MarcasController } from './marcas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MarcaSchema } from './model/marcas.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Marcas', schema: MarcaSchema }]),
  ],
  controllers: [MarcasController],
  providers: [MarcasService],
})
export class MarcasModule {}

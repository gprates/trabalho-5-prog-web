import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IMarca } from './model/marcas.interface';

@Injectable()
export class MarcasService {
  constructor(
    @InjectModel('Marcas') private marcaModel: Model<IMarca>,
  ) {}

  async create(createMarcaDTO: IMarca) {
    const marca = this.marcaModel.create(createMarcaDTO);

    return marca;
  }

  async findAll() {
    return this.marcaModel.find();
  }

  async findOne(id: string | Types.ObjectId) {
    return this.marcaModel.findById(id);
  }

  async update(id: string | Types.ObjectId, updateMarcaDTO: IMarca) {
    return this.marcaModel.findByIdAndUpdate(id, updateMarcaDTO, { new: true });
  }

  async remove(id: string | Types.ObjectId) {
    await this.marcaModel.deleteOne({ id });
  }
}

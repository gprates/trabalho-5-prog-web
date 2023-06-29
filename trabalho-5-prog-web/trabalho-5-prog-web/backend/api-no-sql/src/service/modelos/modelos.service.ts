import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IModelo } from './model/modelos.interface';

@Injectable()
export class ModelosService {
  constructor(
    @InjectModel('Modelos') private modeloModel: Model<IModelo>,
  ) {}

  async create(createModeloDTO: IModelo) {
    const modelo = this.modeloModel.create(createModeloDTO);

    return modelo;
  }

  async findAll() {
    return this.modeloModel.find();
  }

  async findOne(id: string | Types.ObjectId) {
    return this.modeloModel.findById(id);
  }

  async update(id: string | Types.ObjectId, updateModeloDTO: IModelo) {
    return this.modeloModel.findByIdAndUpdate(id, updateModeloDTO, { new: true });
  }

  async remove(id: string | Types.ObjectId) {
    await this.modeloModel.deleteOne({ id });
  }
}

import { Injectable } from '@nestjs/common';
import { ICarro } from './model/carros.interface';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CarrosService {
  constructor(
    @InjectModel('Carros') private carroModel: Model<ICarro>,
  ) {}

  async create(createCarroDto: ICarro) {
    const carro = this.carroModel.create(createCarroDto);

    return carro;
  }

  async findAll() {
    return this.carroModel.find();
  }

  async findOne(id: string | Types.ObjectId) {
    return this.carroModel.findById(id);
  }

  async update(id: string | Types.ObjectId, updateCarroDTO: ICarro) {
    return this.carroModel.findByIdAndUpdate(id, updateCarroDTO, { new: true });
  }

  async remove(id: string | Types.ObjectId) {
    await this.carroModel.deleteOne({ id });
  }
}

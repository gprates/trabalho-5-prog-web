import { Injectable } from '@nestjs/common';
import { IUsuario } from './model/usuarios.interface';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel('Usuarios') private usuarioModel: Model<IUsuario>,
  ) {}

  async create(createUsuarioDTO: IUsuario) {
    const usuario = this.usuarioModel.create(createUsuarioDTO);

    return usuario;
  }

  async findAll() {
    return this.usuarioModel.find();
  }

  async findOne(id: string | Types.ObjectId) {
    return this.usuarioModel.findById(id);
  }

  async findOneByEmail(email: string) {
    return this.usuarioModel.findOne({ email }).lean();
  }

  async update(id: string | Types.ObjectId, updateUsuarioDTO: IUsuario) {
    return this.usuarioModel.findByIdAndUpdate(id, updateUsuarioDTO, { new: true });
  }

  async remove(id: string | Types.ObjectId) {
    await this.usuarioModel.deleteOne({ id });
  }
}
